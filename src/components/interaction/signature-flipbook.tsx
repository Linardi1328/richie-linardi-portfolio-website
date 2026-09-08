"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  useCallback,
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

type SignatureFlipbookProps = {
  children: ReactNode;
  world: PortfolioWorld;
};

type FlipPhase = "idle" | "dragging" | "turning" | "arriving";

type PointerState = {
  dragging: boolean;
  lastTime: number;
  lastX: number;
  pointerId: number;
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
const MIN_TURN_DURATION_MS = 220;
const REDUCED_TURN_DURATION_MS = 150;
const DRAG_COMMIT_THRESHOLD = 0.3;
const FLICK_COMMIT_VELOCITY = 0.55;
const SWIPE_START_DISTANCE = 12;
const SWIPE_AXIS_BIAS = 1.2;
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
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
  const [turnDuration, setTurnDuration] = useState(TURN_DURATION_MS);
  const [geometry, setGeometry] = useState<FlipGeometry>(defaultGeometry);
  const busyRef = useRef(false);
  const pointerRef = useRef<PointerState | null>(null);
  const trackpadRef = useRef<TrackpadState>({
    distance: 0,
    progress: 0,
    settleTimer: 0,
  });

  const targetLabel =
    targetWorld === "basketball" ? "Basketball side" : "Professional side";
  const targetShortLabel =
    targetWorld === "basketball" ? "Basketball" : "Professional";
  const swipeDirection = world === "professional" ? "left" : "right";
  const keyboardKey = world === "professional" ? "ArrowLeft" : "ArrowRight";
  const reverseEyebrow =
    targetWorld === "basketball" ? "ATHLETE ARCHIVE" : "SOFTWARE · DATA · AI";
  const reverseTitle = targetWorld === "basketball" ? "13" : "RBL";

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
      window.clearTimeout(trackpadRef.current.settleTimer);
      trackpadRef.current = { distance: 0, progress: 0, settleTimer: 0 };
      syncGeometry();

      const duration = prefersReducedMotion()
        ? REDUCED_TURN_DURATION_MS
        : getTurnDuration(motion.fromProgress ?? 0, motion.velocity ?? 0);

      setTurnDuration(duration);
      setPhase("turning");
      setProgress(1);
      markWorldFlipArrival(targetWorld);

      const destination =
        requestedDestination || resolveWorldDestination(targetWorld);

      window.setTimeout(() => {
        router.push(destination);
      }, duration);
    },
    [router, syncGeometry, targetWorld],
  );

  useEffect(() => {
    rememberWorldRoute(world, pathname || defaultWorldRoutes[world]);
  }, [pathname, world]);

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

  useEffect(() => {
    return () => {
      window.clearTimeout(trackpadRef.current.settleTimer);
    };
  }, []);

  useEffect(() => {
    if (!consumeWorldFlipArrival(world)) {
      return;
    }

    const reducedMotion = prefersReducedMotion();
    busyRef.current = true;
    let settleTimer = 0;
    let resetTimer = 0;

    const arrivalFrame = window.requestAnimationFrame(() => {
      syncGeometry();
      setPhase("arriving");
      setProgress(1);

      settleTimer = window.setTimeout(
        () => setProgress(0),
        reducedMotion ? 20 : 48,
      );
      resetTimer = window.setTimeout(
        () => {
          setPhase("idle");
          busyRef.current = false;
        },
        reducedMotion ? 230 : 790,
      );
    });

    return () => {
      window.cancelAnimationFrame(arrivalFrame);
      window.clearTimeout(settleTimer);
      window.clearTimeout(resetTimer);
    };
  }, [syncGeometry, world]);

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

    window.clearTimeout(trackpadRef.current.settleTimer);
    trackpadRef.current = { distance: 0, progress: 0, settleTimer: 0 };
    syncGeometry();
    pointerRef.current = {
      dragging: false,
      lastTime: event.timeStamp,
      lastX: event.clientX,
      pointerId: event.pointerId,
      progress: 0,
      startX: event.clientX,
      startY: event.clientY,
      velocity: 0,
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const pointer = pointerRef.current;

    if (!pointer || pointer.pointerId !== event.pointerId || busyRef.current) {
      return;
    }

    const horizontalDistance =
      world === "professional"
        ? pointer.startX - event.clientX
        : event.clientX - pointer.startX;
    const verticalDistance = Math.abs(event.clientY - pointer.startY);

    if (
      !pointer.dragging &&
      horizontalDistance > SWIPE_START_DISTANCE &&
      horizontalDistance > verticalDistance * SWIPE_AXIS_BIAS
    ) {
      pointer.dragging = true;
      setPhase("dragging");
      event.currentTarget.setPointerCapture(event.pointerId);
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

  function finishPointerGesture(event: ReactPointerEvent<HTMLDivElement>) {
    const pointer = pointerRef.current;

    if (!pointer || pointer.pointerId !== event.pointerId) {
      return;
    }

    pointerRef.current = null;

    if (!pointer.dragging) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

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

    setProgress(0);
    setPhase("idle");
  }

  function cancelPointerGesture(event: ReactPointerEvent<HTMLDivElement>) {
    const pointer = pointerRef.current;

    if (!pointer || pointer.pointerId !== event.pointerId) {
      return;
    }

    pointerRef.current = null;
    setProgress(0);
    setPhase("idle");
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
      horizontalMagnitude <= verticalMagnitude * 1.05
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

      setProgress(0);
      setPhase("idle");
    }, TRACKPAD_END_DELAY_MS);
  }

  const direction = world === "professional" ? -1 : 1;
  const angle = direction * progress * geometry.angleLimit;
  const style = {
    "--flip-angle": `${angle}deg`,
    "--flip-origin-y": geometry.originY,
    "--flip-progress": `${progress}`,
    "--flip-scroll-y": geometry.scrollY,
    "--flip-viewport-height": geometry.viewportHeight,
    overscrollBehaviorX: "contain",
    touchAction: "pan-y pinch-zoom",
    userSelect: phase === "dragging" ? "none" : undefined,
    WebkitUserSelect: phase === "dragging" ? "none" : undefined,
  } as CSSProperties;
  const pageStyle =
    phase === "turning"
      ? ({
          transitionDuration: `${turnDuration}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 0.84, 0.24, 1)",
        } as CSSProperties)
      : undefined;
  const reverseTitleStyle =
    targetWorld === "professional"
      ? ({ justifySelf: "end", textAlign: "right" } as CSSProperties)
      : undefined;
  const swipeHintStyle = {
    pointerEvents: "none",
    cursor: "default",
    border: "none",
    background: "transparent",
    boxShadow: "none",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
  } as CSSProperties;

  return (
    <div
      aria-busy={phase === "turning"}
      className="signature-flipbook"
      data-phase={phase}
      data-world={world}
      onPointerCancel={cancelPointerGesture}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointerGesture}
      onWheel={handleWheel}
      style={style}
    >
      {/* [TOUCH: full-page-swipe] [POINTER: edge-hover-peek] */}
      <div aria-hidden="true" className="signature-flipbook__drag-zone" />

      <div className="signature-flipbook__stage">
        {/* [FLIP STATE 03] Reverse Revealed */}
        <div
          aria-hidden="true"
          className="signature-flipbook__reverse"
          data-reverse-world={targetWorld}
          inert
        >
          <div className="signature-flipbook__reverse-grid">
            <span>{reverseEyebrow}</span>
            <strong style={reverseTitleStyle}>{reverseTitle}</strong>
            <p>{targetLabel}</p>
          </div>
        </div>

        {/* [FLIP STATE 02] Partial Turn */}
        <div
          aria-hidden={phase === "turning" ? true : undefined}
          className="signature-flipbook__page"
          inert={phase === "turning"}
          style={pageStyle}
        >
          {children}
        </div>
      </div>

      {/* [FLIP HINT] Swipe-first directional guidance; keyboard uses matching arrow key. */}
      <div
        aria-label={`Swipe ${swipeDirection} or use the ${swipeDirection} arrow key to open ${targetLabel.toLowerCase()}`}
        className="signature-flipbook__edge-control"
        role="note"
        style={swipeHintStyle}
      >
        <span aria-hidden="true" className="signature-flipbook__edge-line" />
        <span className="signature-flipbook__edge-copy">
          <small>Swipe {swipeDirection}</small>
          <strong>{targetShortLabel}</strong>
        </span>
        <span aria-hidden="true" className="signature-flipbook__edge-arrow">
          {world === "professional" ? "←" : "→"}
        </span>
      </div>

      {/* [REDUCED MOTION] Side Switch Fallback */}
      <span aria-live="polite" className="signature-flipbook__status">
        {phase === "turning" ? `Opening ${targetLabel.toLowerCase()}.` : ""}
      </span>
    </div>
  );
}
