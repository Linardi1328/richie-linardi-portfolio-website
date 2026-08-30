"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { PortfolioWorld } from "@/data/world-navigation";
import { cn } from "@/lib/cn";

type WorldSwitcherProps = {
  className?: string;
  world: PortfolioWorld;
};

const routeKeys: Record<PortfolioWorld, string> = {
  professional: "rbl:last-route:professional",
  basketball: "rbl:last-route:basketball",
};

const defaultRoutes: Record<PortfolioWorld, string> = {
  professional: "/",
  basketball: "/basketball",
};

export function WorldSwitcher({ className, world }: WorldSwitcherProps) {
  const pathname = usePathname();
  const targetWorld: PortfolioWorld =
    world === "professional" ? "basketball" : "professional";
  const [targetRoute, setTargetRoute] = useState(defaultRoutes[targetWorld]);

  useEffect(() => {
    window.sessionStorage.setItem(routeKeys[world], pathname || defaultRoutes[world]);

    const rememberedTarget = window.sessionStorage.getItem(routeKeys[targetWorld]);
    if (rememberedTarget) {
      setTargetRoute(rememberedTarget);
    }
  }, [pathname, targetWorld, world]);

  const targetLabel =
    targetWorld === "basketball" ? "Basketball side" : "Professional side";

  return (
    <Link
      aria-label={`Turn to ${targetLabel.toLowerCase()}`}
      className={cn("world-switcher", className)}
      data-target-world={targetWorld}
      href={targetRoute}
    >
      <span aria-hidden="true" className="world-switcher__edge" />
      <span className="world-switcher__copy">
        <span className="world-switcher__eyebrow">Turn page</span>
        <span className="world-switcher__label">{targetLabel}</span>
      </span>
      <span aria-hidden="true" className="world-switcher__arrow">
        {world === "professional" ? "→" : "←"}
      </span>
    </Link>
  );
}
