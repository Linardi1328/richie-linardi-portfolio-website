"use client";

import { useProofMode } from "./proof-mode-context";
import { cn } from "@/lib/cn";

export function ProofModeToggle({ className }: { className?: string }) {
  const { isProofMode, toggleProofMode } = useProofMode();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isProofMode}
      aria-label="Toggle Evidence and Proof Inspection Mode"
      onClick={toggleProofMode}
      className={cn(
        "proof-mode-toggle",
        isProofMode && "proof-mode-toggle--active",
        className,
      )}
      title={
        isProofMode
          ? "Proof Mode Active: Showing verifiable citations & boundaries"
          : "Activate Proof Mode to highlight evidence, sources, and verification bounds"
      }
    >
      <span className="proof-mode-toggle__pip" aria-hidden="true" />
      <span className="proof-mode-toggle__label">PROOF</span>
      <span className="proof-mode-toggle__state" aria-hidden="true">
        {isProofMode ? "ON" : "OFF"}
      </span>
    </button>
  );
}
