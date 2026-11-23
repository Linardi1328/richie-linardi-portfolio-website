import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, "..");

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

test("no cancelled GTEX placement terms in any public src/ source files", () => {
  const srcFiles = scanFiles(join(REPO_ROOT, "src"));
  const forbiddenPatterns = [
    /gtex/i,
    /data\s+annotation\s+intern/i,
    /incoming\s+intern/i,
    /23\s+nov\s+2026/i,
    /19\s+feb\s+2027/i,
  ];

  const violations = [];
  for (const file of srcFiles) {
    const content = readFileSync(file, "utf8");
    for (const pattern of forbiddenPatterns) {
      if (pattern.test(content)) {
        violations.push({ file, pattern: pattern.source });
      }
    }
  }

  assert.deepEqual(
    violations,
    [],
    `Found cancelled GTEX placement copy in src/ files: ${JSON.stringify(violations, null, 2)}`,
  );
});

test("professional home data reflects truthful availability without GTEX", async () => {
  const professionalHomePath = join(REPO_ROOT, "src/data/professional-home.ts");
  const content = readFileSync(professionalHomePath, "utf8");

  assert.doesNotMatch(content, /gtex/i);
  assert.doesNotMatch(content, /data\s+annotation/i);
  assert.doesNotMatch(content, /23\s+nov/i);

  assert.match(
    content,
    /Open to data science, AI and analytics internships/i,
    "Should include truthful availability statement",
  );
});

test("foundation pages experience and resume data have no GTEX record", () => {
  const foundationPagesPath = join(REPO_ROOT, "src/data/foundation-pages.ts");
  const content = readFileSync(foundationPagesPath, "utf8");

  assert.doesNotMatch(content, /gtex/i);
  assert.doesNotMatch(content, /data\s+annotation/i);
  assert.doesNotMatch(content, /scheduled\s+23\s+nov/i);

  // Assert required legitimate roles are present
  assert.match(content, /Independent Software Developer/i);
  assert.match(content, /Stats Team Leader/i);
  assert.match(content, /Auditor · KHLIM Group of Companies/i);
  assert.match(content, /AI Video Hackathon KL 2026/i);
});

test("resume page contains no GTEX and does not introduce unverified projects", () => {
  const resumePagePath = join(REPO_ROOT, "src/app/resume/page.tsx");
  const content = readFileSync(resumePagePath, "utf8");

  assert.doesNotMatch(content, /gtex/i);
  assert.doesNotMatch(content, /data\s+annotation\s+intern/i);
  assert.doesNotMatch(content, /23\s+Nov\s+2026/i);

  // Must not introduce LedgerPilot AI or FIT1045
  assert.doesNotMatch(content, /LedgerPilot/i);
  assert.doesNotMatch(content, /FIT1045/i);

  // Preserves verified active and past roles
  assert.match(content, /R&E Technologies/);
  assert.match(content, /Stats Team Leader/);
  assert.match(content, /Auditor/);
  assert.match(content, /KHLIM 3x3 Live V1/);
});

test("homepage editorial components do not mention GTEX or scheduled placement", () => {
  const homePagesPath = join(
    REPO_ROOT,
    "src/components/editorial/home-pages.tsx",
  );
  const content = readFileSync(homePagesPath, "utf8");

  assert.doesNotMatch(content, /gtex/i);
  assert.doesNotMatch(content, /incoming intern/i);
  assert.doesNotMatch(content, /data annotation/i);
  assert.doesNotMatch(content, /23 nov 2026/i);

  assert.match(content, /Open to data science, AI and analytics internships/i);
});

test("rendered production routes do not contain cancelled placement copy when built", async (t) => {
  const { existsSync } = await import("node:fs");
  const nextBuildPath = join(REPO_ROOT, ".next");
  if (!existsSync(nextBuildPath)) {
    t.skip("No .next build found; skipping runtime route assertion");
    return;
  }

  const { spawn } = await import("node:child_process");
  const net = await import("node:net");

  const port = await new Promise((res, rej) => {
    const srv = net.createServer();
    srv.unref();
    srv.on("error", rej);
    srv.listen(0, "127.0.0.1", () => {
      const { port } = srv.address();
      srv.close(() => res(port));
    });
  });

  const server = spawn(
    "npx",
    ["next", "start", "-p", String(port), "-H", "127.0.0.1"],
    {
      cwd: REPO_ROOT,
      env: { ...process.env, PORT: String(port) },
      stdio: "ignore",
    },
  );

  try {
    let ready = false;
    for (let i = 0; i < 40; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${port}/`);
        if (res.status === 200) {
          ready = true;
          break;
        }
      } catch {}
      await new Promise((r) => setTimeout(r, 250));
    }

    assert.ok(ready, "Next.js server failed to respond within bounded timeout");

    const routes = ["/", "/resume", "/experience", "/about", "/contact"];
    for (const route of routes) {
      const res = await fetch(`http://127.0.0.1:${port}${route}`);
      assert.equal(res.status, 200, `Expected 200 for ${route}`);
      const text = await res.text();
      assert.doesNotMatch(
        text,
        /gtex/i,
        `Found GTEX in rendered HTML for ${route}`,
      );
      assert.doesNotMatch(
        text,
        /data\s+annotation\s+intern/i,
        `Found Data Annotation Intern in rendered HTML for ${route}`,
      );
      assert.doesNotMatch(
        text,
        /23\s+nov\s+2026/i,
        `Found cancelled date 23 Nov 2026 in rendered HTML for ${route}`,
      );
    }
  } finally {
    server.kill("SIGTERM");
  }
});
