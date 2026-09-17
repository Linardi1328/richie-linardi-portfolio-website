"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type WheelEvent as ReactWheelEvent,
} from "react";
import type { PortfolioWorld } from "@/data/world-navigation";
import {
  WORLD_FLIP_REQUEST_EVENT,
  consumeWorldFlipArrival,
  defaultWorldRoutes,
  getOppositeWorld,
  markWorldFlipArrival,
  rememberWorldRoute,
  resolveWorldDestination,
  type WorldFlipRequestDetail,
} from "@/lib/portfolio-world-transition";

export type WorldArrivalContextValue = {
  heroArrivalActive: boolean;
};

export const WorldArrivalContext = createContext<WorldArrivalContextValue>({
  heroArrivalActive: false,
});

export function useWorldArrival() {
  return useContext(WorldArrivalContext);
}

type SignatureFlipbookProps = {
  children: ReactNode;
  world: PortfolioWorld;
};

type FlipPhase = "idle" | "dragging" | "turning" | "cancelling" | "arriving";

type PointerState = {
  dragging: boolean;
  isEdgeOrigin: boolean;
  lastTime: number;
  lastX: number;
  lockedVertical: boolean;
  pointerId: number;
  pointerType: string;
  progress: number;
  startX: number;
  startY: number;
  velocity: number;
};

type TrackpadState = {
  distance: number;
  progress: number;
  settleTimer: number;
};

type FlipGeometry = {
  angleLimit: number;
  originY: string;
  scrollY: string;
  viewportHeight: string;
};

type TurnMotion = {
  fromProgress?: number;
  velocity?: number;
};

const TURN_DURATION_MS = 660;
const MIN_TURN_DURATION_MS = 240;
const REDUCED_TURN_DURATION_MS = 150;
const CANCEL_DURATION_MS = 240;
const ARRIVAL_DURATION_MS = 360;
const DRAG_COMMIT_THRESHOLD = 0.3;
const FLICK_COMMIT_VELOCITY = 0.55;
const TRACKPAD_DRAG_DISTANCE = 260;
const TRACKPAD_COMMIT_THRESHOLD = 0.24;
const TRACKPAD_END_DELAY_MS = 90;

const defaultGeometry: FlipGeometry = {
  angleLimit: 96,
  originY: "50vh",
  scrollY: "0px",
  viewportHeight: "100vh",
};

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getAngleLimit(viewportWidth: number) {
  if (viewportWidth < 600) {
    return 72;
  }

  if (viewportWidth < 1024) {
    return 84;
  }

  return 96;
}

function getTurnDuration(fromProgress: number, velocity: number) {
  const remainingProgress = 1 - clamp(fromProgress);
  const distanceDuration = TURN_DURATION_MS * Math.max(0.34, remainingProgress);
  const velocityFactor = clamp(1 - Math.max(velocity, 0) * 0.18, 0.72, 1);

  return Math.round(
    clamp(
      distanceDuration * velocityFactor,
      MIN_TURN_DURATION_MS,
      TURN_DURATION_MS,
    ),
  );
}

// Ease-out cubic: starts fast and decelerates smoothly to rest
function easeOutCubic(t: number): number {
  const inv = 1 - t;
  return 1 - inv * inv * inv;
}

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(
    target.closest(
      "a, button, input, textarea, select, option, video, audio, iframe, [role='button'], [role='link'], [role='slider'], [contenteditable='true'], [data-no-page-swipe]",
    ),
  );
}

export function SignatureFlipbook({ children, world }: SignatureFlipbookProps) {
  const pathname = usePathname();
  const router = useRouter();
  const targetWorld = getOppositeWorld(world);
  const [phase, setPhase] = useState<FlipPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [geometry, setGeometry] = useState<FlipGeometry>(defaultGeometry);
  const [heroArrivalActive, setHeroArrivalActive] = useState(false);

  const busyRef = useRef(false);
  const pointerRef = useRef<PointerState | null>(null);
  const trackpadRef = useRef<TrackpadState>({
    distance: 0,
    progress: 0,
    settleTimer: 0,
  });

  // Animation frame and timer references for clean lifecycle cancellation
  const turnRafRef = useRef<number | null>(null);
  const cancelRafRef = useRef<number | null>(null);
  const arrivalRafRef = useRef<number | null>(null);
  const routeTimerRef = useRef<number | null>(null);
  const heroTimerRef = useRef<number | null>(null);

  const targetLabel =
    targetWorld === "basketball" ? "Basketball side" : "Professional side";
  const keyboardKey = world === "professional" ? "ArrowLeft" : "ArrowRight";
  const reverseEyebrow =
    targetWorld === "basketball" ? "ATHLETE ARCHIVE" : "SOFTWARE · DATA · AI";
  const reverseTitle = targetWorld === "basketball" ? "13" : "RBL";

  const clearAllAnimations = useCallback(() => {
    if (turnRafRef.current) {
      cancelAnimationFrame(turnRafRef.current);
      turnRafRef.current = null;
    }
    if (cancelRafRef.current) {
      cancelAnimationFrame(cancelRafRef.current);
      cancelRafRef.current = null;
    }
    if (arrivalRafRef.current) {
      cancelAnimationFrame(arrivalRafRef.current);
      arrivalRafRef.current = null;
    }
    if (routeTimerRef.current) {
      clearTimeout(routeTimerRef.current);
      routeTimerRef.current = null;
    }
    if (heroTimerRef.current) {
      clearTimeout(heroTimerRef.current);
      heroTimerRef.current = null;
    }
    window.clearTimeout(trackpadRef.current.settleTimer);
  }, []);

  const syncGeometry = useCallback(() => {
    setGeometry({
      angleLimit: getAngleLimit(window.innerWidth),
      originY: `${window.scrollY + window.innerHeight / 2}px`,
      scrollY: `${window.scrollY}px`,
      viewportHeight: `${window.innerHeight}px`,
    });
  }, []);

  const startTurn = useCallback(
    (requestedDestination?: string, motion: TurnMotion = {}) => {
      if (busyRef.current) {
        return;
      }

      busyRef.current = true;
      clearAllAnimations();
      syncGeometry();

      const reduced = prefersReducedMotion();
      const duration = reduced
        ? REDUCED_TURN_DURATION_MS
        : getTurnDuration(motion.fromProgress ?? 0, motion.velocity ?? 0);

      setPhase("turning");
      markWorldFlipArrival(targetWorld);

      const destination =
        requestedDestination || resolveWorldDestination(targetWorld);

      if (reduced) {
        setProgress(1);
        routeTimerRef.current = window.setTimeout(() => {
          router.push(destination);
        }, duration);
        return;
      }

      // Frame-locked rAF interpolation: drives rotation, lighting, and shadow together
      const startP = motion.fromProgress ?? progress;
      const startTime = performance.now();

      function stepTurn(now: number) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const nextP = startP + (1 - startP) * easeOutCubic(t);
        setProgress(nextP);

        if (t < 1) {
          turnRafRef.current = requestAnimationFrame(stepTurn);
        } else {
          setProgress(1);
          router.push(destination);
        }
      }

      turnRafRef.current = requestAnimationFrame(stepTurn);
    },
    [clearAllAnimations, progress, router, syncGeometry, targetWorld],
  );

  // Remember route for back-destination resolution
  useEffect(() => {
    rememberWorldRoute(world, pathname || defaultWorldRoutes[world]);
  }, [pathname, world]);

  // Clean up if pathname changes unexpectedly during turn
  useEffect(() => {
    return () => {
      clearAllAnimations();
      busyRef.current = false;
    };
  }, [clearAllAnimations, pathname]);

  // Handle external flip request events (from world-switcher / hinge button)
  useEffect(() => {
    function handleFlipRequest(event: Event) {
      const request = event as CustomEvent<WorldFlipRequestDetail>;

      if (request.detail.sourceWorld !== world) {
        return;
      }

      startTurn(request.detail.destination);
    }

    window.addEventListener(WORLD_FLIP_REQUEST_EVENT, handleFlipRequest);

    return () => {
      window.removeEventListener(WORLD_FLIP_REQUEST_EVENT, handleFlipRequest);
    };
  }, [startTurn, world]);

  // Keyboard navigation: ArrowLeft / ArrowRight
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        busyRef.current ||
        event.repeat ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        isInteractiveTarget(event.target) ||
        event.key !== keyboardKey
      ) {
        return;
      }

      event.preventDefault();
      startTurn();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyboardKey, startTurn]);

  // Destination Arrival: single owner of the arrival signal
  useEffect(() => {
    if (!consumeWorldFlipArrival(world)) {
      return;
    }

    busyRef.current = true;
    clearAllAnimations();

    const arrivalRaf = requestAnimationFrame((timestamp) => {
      syncGeometry();
      setPhase("arriving");
      setProgress(1);

      const reduced = prefersReducedMotion();
      if (reduced) {
        routeTimerRef.current = window.setTimeout(() => {
          setProgress(0);
          setPhase("idle");
          busyRef.current = false;
          setHeroArrivalActive(true);
        }, 50);
        return;
      }

      // Settling curve: frame-locked deceleration from 1.0 down to 0.0
      const startTime = timestamp;
      const duration = ARRIVAL_DURATION_MS;

      function stepArrival(now: number) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        // Ease out from 1 to 0
        const nextP = 1 - easeOutCubic(t);
        setProgress(nextP);

        if (t < 1) {
          arrivalRafRef.current = requestAnimationFrame(stepArrival);
        } else {
          setProgress(0);
          setPhase("idle");
          busyRef.current = false;
          // Trigger coordinated destination hero reveal only after turn settles
          setHeroArrivalActive(true);

          heroTimerRef.current = window.setTimeout(() => {
            // Keep hero in arrived state
          }, 1200);
        }
      }

      arrivalRafRef.current = requestAnimationFrame(stepArrival);
    });

    arrivalRafRef.current = arrivalRaf;

    return () => {
      clearAllAnimations();
    };
  }, [clearAllAnimations, syncGeometry, world]);

  // Pointer Handlers with explicit edge-origin zone & cancellation settling
  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (
      busyRef.current ||
      phase !== "idle" ||
      !event.isPrimary ||
      isInteractiveTarget(event.target) ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return;
    }

    // Exclude critical iOS edge gesture zone (leftmost 22px and rightmost 22px on touch devices)
    if (
      event.pointerType === "touch" &&
      (event.clientX < 22 || event.clientX > window.innerWidth - 22)
    ) {
      return;
    }

    // Identify edge-origin vs content zone:
    // Professional flips leftwards (originating from right edge)
    // Basketball flips rightwards (originating from left edge)
    const isEdgeOrigin =
      world === "professional"
        ? event.clientX >= window.innerWidth - 76 ||
          Boolean(
            (event.target as HTMLElement)?.closest(
              ".signature-flipbook__hint, .signature-flipbook__drag-zone",
            ),
          )
        : event.clientX <= 76 ||
          Boolean(
            (event.target as HTMLElement)?.closest(
              ".signature-flipbook__hint, .signature-flipbook__drag-zone",
            ),
          );

    clearAllAnimations();
    syncGeometry();
    pointerRef.current = {
      dragging: false,
      isEdgeOrigin,
      lastTime: event.timeStamp,
      lastX: event.clientX,
      lockedVertical: false,
      pointerId: event.pointerId,
      pointerType: event.pointerType,
      progress: 0,
      startX: event.clientX,
      startY: event.clientY,
      velocity: 0,
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const pointer = pointerRef.current;

    if (
      !pointer ||
      pointer.pointerId !== event.pointerId ||
      busyRef.current ||
      pointer.lockedVertical
    ) {
      return;
    }

    const horizontalDistance =
      world === "professional"
        ? pointer.startX - event.clientX
        : event.clientX - pointer.startX;
    const verticalDistance = Math.abs(event.clientY - pointer.startY);

    // If vertical movement clearly dominates before horizontal threshold, lock to vertical scrolling
    if (!pointer.dragging && verticalDistance > 10 && horizontalDistance < 14) {
      pointer.lockedVertical = true;
      return;
    }

    // Thresholds: lower distance for edge origin, higher threshold for content swipe
    const startThreshold = pointer.isEdgeOrigin ? 10 : 22;
    const axisBias = pointer.isEdgeOrigin ? 1.2 : 1.7;

    if (
      !pointer.dragging &&
      horizontalDistance > startThreshold &&
      horizontalDistance > verticalDistance * axisBias
    ) {
      pointer.dragging = true;
      setPhase("dragging");
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        // Fallback if pointer capture is unavailable
      }
    }

    const elapsed = Math.max(event.timeStamp - pointer.lastTime, 1);
    const frameDistance =
      world === "professional"
        ? pointer.lastX - event.clientX
        : event.clientX - pointer.lastX;
    const frameVelocity = frameDistance / elapsed;

    pointer.velocity = pointer.velocity * 0.65 + frameVelocity * 0.35;
    pointer.lastTime = event.timeStamp;
    pointer.lastX = event.clientX;

    if (!pointer.dragging) {
      return;
    }

    event.preventDefault();
    const dragDistance = Math.min(window.innerWidth * 0.52, 420);
    const nextProgress = clamp(horizontalDistance / dragDistance);
    pointer.progress = nextProgress;
    setProgress(nextProgress);
  }

  function startCancelSettling(fromProgress: number) {
    if (fromProgress <= 0) {
      setProgress(0);
      setPhase("idle");
      busyRef.current = false;
      pointerRef.current = null;
      return;
    }

    setPhase("cancelling");
    busyRef.current = true;
    const startTime = performance.now();
    const duration = CANCEL_DURATION_MS;

    function stepCancel(now: number) {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      // Ease out to zero
      const nextP = fromProgress * (1 - easeOutCubic(t));
      setProgress(nextP);

      if (t < 1) {
        cancelRafRef.current = requestAnimationFrame(stepCancel);
      } else {
        setProgress(0);
        setPhase("idle");
        busyRef.current = false;
        pointerRef.current = null;
      }
    }

    cancelRafRef.current = requestAnimationFrame(stepCancel);
  }

  function finishPointerGesture(event: ReactPointerEvent<HTMLDivElement>) {
    const pointer = pointerRef.current;

    if (!pointer || pointer.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        // Ignore if already released
      }
    }

    if (!pointer.dragging) {
      pointerRef.current = null;
      return;
    }

    // Verify commit threshold: must exceed progress threshold OR flick velocity
    if (
      pointer.progress >= DRAG_COMMIT_THRESHOLD ||
      pointer.velocity >= FLICK_COMMIT_VELOCITY
    ) {
      startTurn(undefined, {
        fromProgress: pointer.progress,
        velocity: pointer.velocity,
      });
      return;
    }

    // Cancelled gesture: give real settling state with smooth return to zero
    startCancelSettling(pointer.progress);
  }

  function cancelPointerGesture(event: ReactPointerEvent<HTMLDivElement>) {
    const pointer = pointerRef.current;

    if (!pointer || pointer.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        // Ignore if already released
      }
    }

    if (pointer.dragging) {
      startCancelSettling(pointer.progress);
    } else {
      pointerRef.current = null;
      setProgress(0);
      setPhase("idle");
    }
  }

  function handleWheel(event: ReactWheelEvent<HTMLDivElement>) {
    if (
      busyRef.current ||
      pointerRef.current ||
      event.ctrlKey ||
      isInteractiveTarget(event.target)
    ) {
      return;
    }

    const horizontalMagnitude = Math.abs(event.deltaX);
    const verticalMagnitude = Math.abs(event.deltaY);

    if (
      horizontalMagnitude < 2 ||
      horizontalMagnitude <= verticalMagnitude * 1.15
    ) {
      return;
    }

    const directionalDelta =
      world === "professional" ? event.deltaX : -event.deltaX;
    const trackpad = trackpadRef.current;

    trackpad.distance = Math.max(0, trackpad.distance + directionalDelta);
    trackpad.progress = clamp(trackpad.distance / TRACKPAD_DRAG_DISTANCE);

    if (trackpad.progress > 0) {
      if (phase === "idle") {
        syncGeometry();
        setPhase("dragging");
      }

      setProgress(trackpad.progress);
    }

    window.clearTimeout(trackpad.settleTimer);
    trackpad.settleTimer = window.setTimeout(() => {
      const finalProgress = trackpadRef.current.progress;
      trackpadRef.current = { distance: 0, progress: 0, settleTimer: 0 };

      if (finalProgress >= TRACKPAD_COMMIT_THRESHOLD) {
        startTurn(undefined, {
          fromProgress: finalProgress,
          velocity: 0.7,
        });
        return;
      }

      startCancelSettling(finalProgress);
    }, TRACKPAD_END_DELAY_MS);
  }

  // Explicit lighting curve calculation:
  // light curve = sin(pi * progress) -> 0 at start, 1.0 at mid-turn (p=0.5), 0 at completion
  const direction = world === "professional" ? -1 : 1;
  const angle = direction * progress * geometry.angleLimit;
  const clampedP = clamp(progress);
  const light = Math.sin(Math.PI * clampedP);
  const edgeIntensity = Math.pow(light, 1.2);
  const shadowX = (world === "professional" ? 1 : -1) * Math.round(light * 44);
  const shadowBlur = Math.round(light * 72);
  const shadowSpread = Math.round(light * 18);
  const shadowOpacity = light * (world === "professional" ? 0.32 : 0.42);
  const creaseOpacity = light * 0.28;

  const style = {
    "--flip-angle": `${angle.toFixed(2)}deg`,
    "--flip-origin-y": geometry.originY,
    "--flip-progress": `${progress.toFixed(4)}`,
    "--flip-light": `${light.toFixed(4)}`,
    "--flip-edge-intensity": `${edgeIntensity.toFixed(4)}`,
    "--flip-shadow-blur": `${shadowBlur}px`,
    "--flip-shadow-spread": `${shadowSpread}px`,
    "--flip-shadow-opacity": `${shadowOpacity.toFixed(4)}`,
    "--flip-shadow-x": `${shadowX}px`,
    "--flip-crease-opacity": `${creaseOpacity.toFixed(4)}`,
    "--flip-scroll-y": geometry.scrollY,
    "--flip-viewport-height": geometry.viewportHeight,
    overscrollBehaviorX: "contain",
    touchAction: "pan-y pinch-zoom",
    userSelect:
      phase === "dragging" || phase === "cancelling" ? "none" : undefined,
    WebkitUserSelect:
      phase === "dragging" || phase === "cancelling" ? "none" : undefined,
  } as CSSProperties;

  const reverseTitleStyle =
    targetWorld === "professional"
      ? ({ justifySelf: "end", textAlign: "right" } as CSSProperties)
      : undefined;

  return (
    <WorldArrivalContext.Provider value={{ heroArrivalActive }}>
      <div
        aria-busy={phase === "turning"}
        className="signature-flipbook"
        data-hero-arrived={heroArrivalActive ? "true" : undefined}
        data-phase={phase}
        data-world={world}
        onLostPointerCapture={cancelPointerGesture}
        onPointerCancel={cancelPointerGesture}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointerGesture}
        onWheel={handleWheel}
        style={style}
      >
        {/* [TOUCH: edge-swipe-zone] [POINTER: edge-hover-peek] */}
        <div aria-hidden="true" className="signature-flipbook__drag-zone" />

        <div className="signature-flipbook__stage">
          {/* [FLIP STATE 03] Reverse Revealed with dynamic lighting */}
          <div
            aria-hidden="true"
            className="signature-flipbook__reverse"
            data-reverse-world={targetWorld}
            inert
          >
            <div className="signature-flipbook__reverse-grid">
              <strong
                aria-hidden="true"
                className="signature-flipbook__reverse-watermark"
                style={reverseTitleStyle}
              >
                {reverseTitle}
              </strong>
              <div className="signature-flipbook__reverse-meta">
                <span className="signature-flipbook__reverse-eyebrow">
                  {reverseEyebrow}
                </span>
                <p className="signature-flipbook__reverse-label">
                  {targetLabel}
                </p>
              </div>
            </div>
          </div>

          {/* [FLIP STATE 02] Turning Page with progressive shadow & lighting */}
          <div
            aria-hidden={phase === "turning" ? true : undefined}
            className="signature-flipbook__page"
            data-hero-arrived={heroArrivalActive ? "true" : undefined}
            inert={phase === "turning"}
          >
            {/* Non-interactive surface crease overlay (ambient occlusion) */}
            <div
              aria-hidden="true"
              className="signature-flipbook__crease-overlay"
            />

            {/* Non-interactive specular page-edge lighting */}
            <div
              aria-hidden="true"
              className="signature-flipbook__edge-light"
            />

            {children}
          </div>
        </div>

        {/* [FLIP HINT / WORLD TAB] Authored book-edge marker tab */}
        <div aria-hidden="true" className="signature-flipbook__hint">
          {world === "professional" ? (
            <div className="signature-flipbook__tab-inner">
              <span className="signature-flipbook__tab-arrow">←</span>
              <span className="signature-flipbook__tab-action">SWIPE LEFT</span>
              <span className="signature-flipbook__tab-identity">13</span>
              <span className="signature-flipbook__tab-target">ATHLETE</span>
            </div>
          ) : (
            <div className="signature-flipbook__tab-inner">
              <span className="signature-flipbook__tab-identity">RBL</span>
              <span className="signature-flipbook__tab-target">
                PROFESSIONAL
              </span>
              <span className="signature-flipbook__tab-action">
                SWIPE RIGHT
              </span>
              <span className="signature-flipbook__tab-arrow">→</span>
            </div>
          )}
        </div>

        {/* [REDUCED MOTION] Side Switch Fallback */}
        <span aria-live="polite" className="signature-flipbook__status">
          {phase === "turning" ? `Opening ${targetLabel.toLowerCase()}.` : ""}
        </span>
      </div>
    </WorldArrivalContext.Provider>
  );
}
