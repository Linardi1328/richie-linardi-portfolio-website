import type { PortfolioWorld } from "@/data/world-navigation";

export const WORLD_FLIP_REQUEST_EVENT = "rbl:world-flip-request";
export const WORLD_FLIP_ARRIVAL_KEY = "rbl:world-flip-arrival";

export const defaultWorldRoutes: Record<PortfolioWorld, string> = {
  professional: "/",
  basketball: "/basketball",
};

const routeKeys: Record<PortfolioWorld, string> = {
  professional: "rbl:last-route:professional",
  basketball: "rbl:last-route:basketball",
};

export type WorldFlipRequestDetail = {
  destination: string;
  sourceWorld: PortfolioWorld;
  targetWorld: PortfolioWorld;
};

export function getOppositeWorld(world: PortfolioWorld): PortfolioWorld {
  return world === "professional" ? "basketball" : "professional";
}

export function rememberWorldRoute(world: PortfolioWorld, pathname: string) {
  try {
    window.sessionStorage.setItem(routeKeys[world], pathname);
  } catch {
    // Session storage can be unavailable in hardened/private browser contexts.
  }
}

export function readRememberedWorldRoute(world: PortfolioWorld) {
  try {
    return window.sessionStorage.getItem(routeKeys[world]);
  } catch {
    return null;
  }
}

export function resolveWorldDestination(world: PortfolioWorld) {
  return readRememberedWorldRoute(world) || defaultWorldRoutes[world];
}

const ARRIVAL_MARKER_TTL_MS = 3500;

export function markWorldFlipArrival(world: PortfolioWorld) {
  try {
    const payload = JSON.stringify({ world, timestamp: Date.now() });
    window.sessionStorage.setItem(WORLD_FLIP_ARRIVAL_KEY, payload);
  } catch {
    // Arrival animation is progressive enhancement only.
  }
}

export function clearWorldFlipArrival() {
  try {
    window.sessionStorage.removeItem(WORLD_FLIP_ARRIVAL_KEY);
  } catch {
    // Ignore
  }
}

export function consumeWorldFlipArrival(world: PortfolioWorld) {
  try {
    const raw = window.sessionStorage.getItem(WORLD_FLIP_ARRIVAL_KEY);

    if (!raw) {
      return false;
    }

    window.sessionStorage.removeItem(WORLD_FLIP_ARRIVAL_KEY);

    let arrivalWorld = raw;
    let timestamp = 0;

    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        arrivalWorld = parsed.world;
        timestamp = parsed.timestamp;
      }
    } catch {
      // Plain string fallback
    }

    if (arrivalWorld !== world) {
      return false;
    }

    if (timestamp > 0 && Date.now() - timestamp > ARRIVAL_MARKER_TTL_MS) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}
