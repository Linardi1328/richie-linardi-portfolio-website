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

export function ProofModeProvider({ children }: { children: ReactNode }) {
  const isProofMode = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setProofMode = useCallback((active: boolean) => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(STORAGE_KEY, String(active));
      window.dispatchEvent(new Event("rbl_proof_mode_change"));
    } catch {
      // Ignore
    }
  }, []);

  const toggleProofMode = useCallback(() => {
    setProofMode(!getSnapshot());
  }, [setProofMode]);

  return (
    <ProofModeContext.Provider
      value={{ isProofMode, toggleProofMode, setProofMode }}
    >
      {children}
    </ProofModeContext.Provider>
  );
}

export function useProofMode() {
  return useContext(ProofModeContext);
}
