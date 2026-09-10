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

// 2. Target files for route-specific identity content checks
const supportingFiles = [
  join(projectRoot, "src/components/about/about-identity-page.tsx"),
  join(projectRoot, "src/components/experience/experience-record-page.tsx"),
  join(projectRoot, "src/components/education/education-monash-page.tsx"),
  join(projectRoot, "src/data/foundation-pages.ts"),
];

// 2a. Stale current-profile terms for production-facing identity routes
const staleCurrentProfilePhrases = ["FIT1045", "Teaching Assistant"];

for (const file of supportingFiles) {
  try {
    const content = readFileSync(file, "utf8");
    for (const phrase of staleCurrentProfilePhrases) {
      if (content.includes(phrase)) {
        console.error(
          `❌ Stale current-profile term "${phrase}" found in production-facing identity route ${file}`,
        );
        hasError = true;
      }
    }
  } catch (err) {
    console.error(`❌ Could not read supporting file ${file}:`, err.message);
    hasError = true;
  }
}

// 2b. Unverified coursework claims (must not be presented as Monash coursework)
const unverifiedCourseworkPhrases = [
  "data structures",
  "computational complexity",
  "statistical inference",
  "machine learning",
  "software architecture",
  "production engineering standards",
  "full-stack coursework",
  "AI-model development",
];

const educationFile = join(
  projectRoot,
  "src/components/education/education-monash-page.tsx",
);
try {
  const content = readFileSync(educationFile, "utf8");
  for (const phrase of unverifiedCourseworkPhrases) {
    if (content.toLowerCase().includes(phrase.toLowerCase())) {
      console.error(
        `❌ Unverified Monash coursework claim "${phrase}" found in ${educationFile}`,
      );
      hasError = true;
    }
  }
} catch (err) {
  console.error(`❌ Could not read ${educationFile}:`, err.message);
  hasError = true;
}

// 2c. Guardrails for unverified specifics, titles, and boundaries
const unverifiedSpecifics = [
  "Monash Basketball Club",
  "1:49",
  "1 minute 49",
  "two-person team",
  "2-person team",
  "hackathon winner",
  "hackathon award",
  "hackathon placement",
  "hackathon prize",
  "hackathon first place",
  "hackathon 1st place",
  "hackathon podium",
  "Club Manager",
  "Head Coach",
  "Committee Head",
  "Lead Systems Builder",
  "Statistics Specialist",
  "court-side scoring flow",
  "three group companies",
  "certified public accountant",
  "CPA certification",
  "CPA qualification",
  "audit sign-off",
  "audit partner",
  "audit manager",
  "autonomous audit",
];

for (const file of supportingFiles) {
  try {
    const content = readFileSync(file, "utf8");
    for (const phrase of unverifiedSpecifics) {
      if (content.toLowerCase().includes(phrase.toLowerCase())) {
        console.error(
          `❌ Unverified specific or title "${phrase}" found in ${file}`,
        );
        hasError = true;
      }
    }
  } catch (err) {
    console.error(`❌ Could not read ${file}:`, err.message);
    hasError = true;
  }
}

// 2d. Unsupported biographical/operational elaborations
const unverifiedBiographicalPhrases = [
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
    for (const { phrase, file: targetFile } of unverifiedBiographicalPhrases) {
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

// 4. Athlete-side content-truth and hype guardrails
const athleteForbiddenPhrases = [
  "Starting contributor",
  "Finals scoring co-leader",
  "primary scoring presence",
  "historic international gold",
  "Sophomore Debut",
  "Senior Final Run",
  "conference First Team",
  "National Top 12 All-Star Roster",
  "Led Gloria 1 to",
  "9-for-14",
  "ten competitive seasons",
  'href: "https://basketyuk.com"',
  'href: "https://www.sofascore.com"',
];

for (const file of srcFiles) {
  const content = readFileSync(file, "utf8");
  for (const phrase of athleteForbiddenPhrases) {
    if (content.includes(phrase)) {
      console.error(
        `❌ Athlete-side unverified phrase or generic URL "${phrase}" found in ${file}`,
      );
      hasError = true;
    }
  }
}

// 4b. Content-truth assertion: If 64.29 appears in athlete content/data, it must remain attached to the canonical Basketyuk FG leaderboard
for (const file of srcFiles) {
  const content = readFileSync(file, "utf8");
  if (content.includes("64.29")) {
    if (!content.includes("basketyukFgLeaderboard")) {
      console.error(
        `❌ 64.29% FG shooting claim in ${file} must remain attached to canonical Basketyuk FG leaderboard (basketyukFgLeaderboard)`,
      );
      hasError = true;
    }
  }
}

if (hasError) {
  console.error(
    "\n💥 Content truth audit failed. Please address errors above.",
  );
  process.exit(1);
}

console.log("✅ Content truth and source-of-truth contracts passed.\n");
