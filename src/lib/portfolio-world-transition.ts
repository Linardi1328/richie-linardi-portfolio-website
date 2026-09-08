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

export function markWorldFlipArrival(world: PortfolioWorld) {
  try {
    window.sessionStorage.setItem(WORLD_FLIP_ARRIVAL_KEY, world);
  } catch {
    // Arrival animation is progressive enhancement only.
  }
}

export function consumeWorldFlipArrival(world: PortfolioWorld) {
  try {
    const arrivalWorld = window.sessionStorage.getItem(WORLD_FLIP_ARRIVAL_KEY);

    if (arrivalWorld !== world) {
      return false;
    }

    window.sessionStorage.removeItem(WORLD_FLIP_ARRIVAL_KEY);
    return true;
  } catch {
    return false;
  }
}
