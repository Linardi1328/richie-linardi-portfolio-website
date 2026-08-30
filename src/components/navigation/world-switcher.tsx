"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import type { MouseEvent } from "react";
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
  const router = useRouter();
  const targetWorld: PortfolioWorld =
    world === "professional" ? "basketball" : "professional";
  const targetLabel =
    targetWorld === "basketball" ? "Basketball side" : "Professional side";

  useEffect(() => {
    window.sessionStorage.setItem(
      routeKeys[world],
      pathname || defaultRoutes[world],
    );
  }, [pathname, world]);

  function handleWorldSwitch(event: MouseEvent<HTMLAnchorElement>) {
    const rememberedTarget = window.sessionStorage.getItem(routeKeys[targetWorld]);

    if (rememberedTarget && rememberedTarget !== defaultRoutes[targetWorld]) {
      event.preventDefault();
      router.push(rememberedTarget);
    }
  }

  return (
    <Link
      aria-label={`Turn to ${targetLabel.toLowerCase()}`}
      className={cn("world-switcher", className)}
      data-target-world={targetWorld}
      href={defaultRoutes[targetWorld]}
      onClick={handleWorldSwitch}
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
