"use client";

import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from "react";

interface ProofModeContextValue {
  isProofMode: boolean;
  toggleProofMode: () => void;
  setProofMode: (active: boolean) => void;
}

const ProofModeContext = createContext<ProofModeContextValue>({
  isProofMode: false,
  toggleProofMode: () => {},
  setProofMode: () => {},
});

const STORAGE_KEY = "rbl_proof_mode_active";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("rbl_proof_mode_change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("rbl_proof_mode_change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export function ProofModeProvider({
  children,
  enabled = true,
}: {
  children: ReactNode;
  enabled?: boolean;
}) {
  const isProofMode = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const effectiveProofMode = enabled ? isProofMode : false;

  const setProofMode = useCallback(
    (active: boolean) => {
      if (!enabled || typeof window === "undefined") return;
      try {
        sessionStorage.setItem(STORAGE_KEY, String(active));
        window.dispatchEvent(new Event("rbl_proof_mode_change"));
      } catch {
        // Ignore
      }
    },
    [enabled],
  );

  const toggleProofMode = useCallback(() => {
    if (!enabled) return;
    setProofMode(!effectiveProofMode);
  }, [enabled, effectiveProofMode, setProofMode]);

  return (
    <ProofModeContext.Provider
      value={{
        isProofMode: effectiveProofMode,
        toggleProofMode,
        setProofMode,
      }}
    >
      {children}
    </ProofModeContext.Provider>
  );
}

export function useProofMode() {
  return useContext(ProofModeContext);
}
