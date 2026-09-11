"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { MouseEvent } from "react";
import type { PortfolioWorld } from "@/data/world-navigation";
import { cn } from "@/lib/cn";
import {
  WORLD_FLIP_REQUEST_EVENT,
  defaultWorldRoutes,
  getOppositeWorld,
  rememberWorldRoute,
  resolveWorldDestination,
  type WorldFlipRequestDetail,
} from "@/lib/portfolio-world-transition";

type WorldSwitcherProps = {
  className?: string;
  world: PortfolioWorld;
};

export function WorldSwitcher({ className, world }: WorldSwitcherProps) {
  const pathname = usePathname();
  const targetWorld = getOppositeWorld(world);
  const targetLabel =
    targetWorld === "basketball" ? "Athlete side" : "Professional side";
  const hingeSymbol = world === "professional" ? "13 ↔" : "↔ RBL";

  useEffect(() => {
    rememberWorldRoute(world, pathname || defaultWorldRoutes[world]);
  }, [pathname, world]);

  function handleWorldSwitch(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();

    const detail: WorldFlipRequestDetail = {
      destination: resolveWorldDestination(targetWorld),
      sourceWorld: world,
      targetWorld,
    };

    window.dispatchEvent(
      new CustomEvent<WorldFlipRequestDetail>(WORLD_FLIP_REQUEST_EVENT, {
        detail,
      }),
    );
  }

  return (
    <Link
      aria-label={`Turn to ${targetLabel}`}
      aria-keyshortcuts={world === "professional" ? "ArrowLeft" : "ArrowRight"}
      className={cn("world-switcher", className)}
      data-target-world={targetWorld}
      href={defaultWorldRoutes[targetWorld]}
      onClick={handleWorldSwitch}
    >
      <span aria-hidden="true" className="world-switcher__edge" />
      <span className="world-switcher__hinge-symbol">{hingeSymbol}</span>
    </Link>
  );
}
