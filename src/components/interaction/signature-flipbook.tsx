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
  pointerId: number;
  progress: number;
  startX: number;
  startY: number;
};

type FlipGeometry = {
  angleLimit: number;
  originY: string;
  scrollY: string;
  viewportHeight: string;
};

const TURN_DURATION_MS = 660;
const REDUCED_TURN_DURATION_MS = 150;
const DRAG_COMMIT_THRESHOLD = 0.34;

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

export function SignatureFlipbook({
  children,
  world,
}: SignatureFlipbookProps) {
  const pathname = usePathname();
  const router = useRouter();
  const targetWorld = getOppositeWorld(world);
  const [phase, setPhase] = useState<FlipPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [geometry, setGeometry] = useState<FlipGeometry>(defaultGeometry);
  const busyRef = useRef(false);
  const pointerRef = useRef<PointerState | null>(null);

  const targetLabel =
    targetWorld === "basketball" ? "Basketball side" : "Professional side";
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
    (requestedDestination?: string) => {
      if (busyRef.current) {
        return;
      }

      busyRef.current = true;
      syncGeometry();
      setPhase("turning");
      setProgress(1);
      markWorldFlipArrival(targetWorld);

      const destination =
        requestedDestination || resolveWorldDestination(targetWorld);
      const duration = prefersReducedMotion()
        ? REDUCED_TURN_DURATION_MS
        : TURN_DURATION_MS;

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
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return;
    }

    syncGeometry();
    pointerRef.current = {
      dragging: false,
      pointerId: event.pointerId,
      progress: 0,
      startX: event.clientX,
      startY: event.clientY,
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
      horizontalDistance > 12 &&
      horizontalDistance > verticalDistance * 1.2
    ) {
      pointer.dragging = true;
      setPhase("dragging");
      event.currentTarget.setPointerCapture(event.pointerId);
    }

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

    if (pointer.progress >= DRAG_COMMIT_THRESHOLD) {
      startTurn();
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

  const direction = world === "professional" ? -1 : 1;
  const angle = direction * progress * geometry.angleLimit;
  const style = {
    "--flip-angle": `${angle}deg`,
    "--flip-origin-y": geometry.originY,
    "--flip-progress": `${progress}`,
    "--flip-scroll-y": geometry.scrollY,
    "--flip-viewport-height": geometry.viewportHeight,
  } as CSSProperties;

  return (
    <div
      aria-busy={phase === "turning"}
      className="signature-flipbook"
      data-phase={phase}
      data-world={world}
      style={style}
    >
      {/* [TOUCH: edge-swipe-zone] [POINTER: edge-hover-peek] */}
      <div
        aria-hidden="true"
        className="signature-flipbook__drag-zone"
        onPointerCancel={cancelPointerGesture}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointerGesture}
      />

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
            <strong>{reverseTitle}</strong>
            <p>{targetLabel}</p>
          </div>
        </div>

        {/* [FLIP STATE 02] Partial Turn */}
        <div
          aria-hidden={phase === "turning" ? true : undefined}
          className="signature-flipbook__page"
          inert={phase === "turning"}
        >
          {children}
        </div>
      </div>

      {/* [FLIP CONTROL] Page Edge / Corner */}
      <button
        aria-label={`Turn portfolio to ${targetLabel.toLowerCase()}`}
        className="signature-flipbook__edge-control"
        disabled={phase === "turning"}
        onClick={() => startTurn()}
        type="button"
      >
        <span aria-hidden="true" className="signature-flipbook__edge-line" />
        <span className="signature-flipbook__edge-copy">
          <small>Turn page</small>
          <strong>
            {targetWorld === "basketball" ? "Basketball" : "Professional"}
          </strong>
        </span>
        <span aria-hidden="true" className="signature-flipbook__edge-arrow">
          {world === "professional" ? "←" : "→"}
        </span>
      </button>

      {/* [REDUCED MOTION] Side Switch Fallback */}
      <span aria-live="polite" className="signature-flipbook__status">
        {phase === "turning" ? `Opening ${targetLabel.toLowerCase()}.` : ""}
      </span>
    </div>
  );
}
