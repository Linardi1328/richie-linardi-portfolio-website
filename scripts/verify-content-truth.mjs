#!/usr/bin/env node

/**
 * Content Truth & Source-of-Truth Verification Gate
 *
 * Core rule:
 * "Plausibility is not evidence. Specific personal, academic, athletic,
 * professional, chronological, or operational claims must trace to an
 * approved source of truth."
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const projectRoot = resolve(".");
let hasError = false;

function scanFiles(dir, matchExts = [".ts", ".tsx", ".js", ".mjs"]) {
  const files = [];
  for (const item of readdirSync(dir)) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      if (item !== "node_modules" && item !== ".next" && item !== ".git") {
        files.push(...scanFiles(fullPath, matchExts));
      }
    } else if (matchExts.some((ext) => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

console.log("🔍 Running content-truth and source-of-truth audit...");

// 1. Audit for forbidden legacy and hidden project content in src/
const srcFiles = scanFiles(join(projectRoot, "src"));
const forbiddenTerms = ["Healthy Bite", "ProofLab"];

for (const file of srcFiles) {
  const content = readFileSync(file, "utf8");
  for (const term of forbiddenTerms) {
    if (content.includes(term)) {
      console.error(`❌ Forbidden content "${term}" found in ${file}`);
      hasError = true;
    }
  }
}

// 2. Audit for unsupported biographical/operational elaborations in supporting routes
const supportingFiles = [
  join(projectRoot, "src/components/about/about-identity-page.tsx"),
  join(projectRoot, "src/components/experience/experience-record-page.tsx"),
  join(projectRoot, "src/components/education/education-monash-page.tsx"),
];

const unverifiedPhrases = [
  {
    phrase: "School of Information Technology",
    file: "experience-record-page.tsx",
  },
  { phrase: "2024 – Present", file: "experience-record-page.tsx" },
  { phrase: "2024 - Present", file: "experience-record-page.tsx" },
  { phrase: "KHLIM Super App", file: "all" },
  { phrase: "live debugging sessions", file: "experience-record-page.tsx" },
  {
    phrase: "film review, and conditioning",
    file: "experience-record-page.tsx",
  },
  { phrase: "vocal defensive direction", file: "all" },
  { phrase: "production regressions", file: "all" },
  {
    phrase: "critical production incidents",
    file: "experience-record-page.tsx",
  },
  { phrase: "blameless post-mortem", file: "experience-record-page.tsx" },
  { phrase: "Team Captaincy", file: "all" },
];

for (const file of supportingFiles) {
  try {
    const content = readFileSync(file, "utf8");
    for (const { phrase, file: targetFile } of unverifiedPhrases) {
      if (targetFile === "all" || file.endsWith(targetFile)) {
        if (content.includes(phrase)) {
          console.error(
            `❌ Unsupported elaboration "${phrase}" found in ${file}`,
          );
          hasError = true;
        }
      }
    }
  } catch (err) {
    console.error(`❌ Could not read supporting file ${file}:`, err.message);
    hasError = true;
  }
}

// 3. Verify that experience-record-page.tsx uses publicProjectCatalogue from project-registry
const experienceFile = join(
  projectRoot,
  "src/components/experience/experience-record-page.tsx",
);
try {
  const content = readFileSync(experienceFile, "utf8");
  if (!content.includes("publicProjectCatalogue")) {
    console.error(
      "❌ experience-record-page.tsx must derive projects from publicProjectCatalogue in project-registry.ts",
    );
    hasError = true;
  }
} catch (err) {
  console.error(`❌ Could not verify ${experienceFile}:`, err.message);
  hasError = true;
}

if (hasError) {
  console.error(
    "\n💥 Content truth audit failed. Please address errors above.",
  );
  process.exit(1);
}

console.log("✅ Content truth and source-of-truth contracts passed.\n");
