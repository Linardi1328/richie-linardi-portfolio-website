"use client";

import { useState } from "react";
import { ConceptATechnicalArchive } from "@/components/exploration/concept-a-technical-archive";
import { ConceptBGenerativeGeometry } from "@/components/exploration/concept-b-generative-geometry";
import { ConceptCExperimentalEditorial } from "@/components/exploration/concept-c-experimental-editorial";
import "@/styles/concept-exploration.css";

type Concept = "a" | "b" | "c";
type Mode = "professional" | "athlete";

export default function ExplorationPage() {
  const [activeConcept, setActiveConcept] = useState<Concept>("b");
  const [activeMode, setActiveMode] = useState<Mode>("professional");

  return (
    <div className="exploration-wrapper">
      {/* Exploration Control Banner */}
      <aside className="fixed top-2 right-2 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-black/80 px-3 py-1.5 text-xs text-white shadow-2xl backdrop-blur-md">
        <span className="font-mono font-bold text-amber-400">
          RBL // 13 LAB
        </span>
        <div className="flex gap-1 border-x border-white/20 px-2 font-mono">
          <button
            onClick={() => setActiveConcept("a")}
            className={`rounded px-1.5 py-0.5 ${activeConcept === "a" ? "bg-white text-black font-bold" : "opacity-60"}`}
          >
            A: Archive
          </button>
          <button
            onClick={() => setActiveConcept("b")}
            className={`rounded px-1.5 py-0.5 ${activeConcept === "b" ? "bg-white text-black font-bold" : "opacity-60"}`}
          >
            B: Geometry
          </button>
          <button
            onClick={() => setActiveConcept("c")}
            className={`rounded px-1.5 py-0.5 ${activeConcept === "c" ? "bg-white text-black font-bold" : "opacity-60"}`}
          >
            C: Editorial
          </button>
        </div>
        <div className="flex gap-1 font-mono">
          <button
            onClick={() => setActiveMode("professional")}
            className={`rounded px-1.5 py-0.5 ${activeMode === "professional" ? "bg-sky-400 text-black font-bold" : "opacity-60"}`}
          >
            PRO
          </button>
          <button
            onClick={() => setActiveMode("athlete")}
            className={`rounded px-1.5 py-0.5 ${activeMode === "athlete" ? "bg-amber-400 text-black font-bold" : "opacity-60"}`}
          >
            ATH
          </button>
        </div>
      </aside>

      {/* Render Active Concept */}
      {activeConcept === "a" && (
        <ConceptATechnicalArchive
          key={`a-${activeMode}`}
          initialMode={activeMode}
        />
      )}
      {activeConcept === "b" && (
        <ConceptBGenerativeGeometry
          key={`b-${activeMode}`}
          initialMode={activeMode}
        />
      )}
      {activeConcept === "c" && (
        <ConceptCExperimentalEditorial
          key={`c-${activeMode}`}
          initialMode={activeMode}
        />
      )}
    </div>
  );
}
