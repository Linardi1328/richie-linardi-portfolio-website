import { spawn } from "node:child_process";
import net from "node:net";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, "..");

function getAvailablePort() {
  return new Promise((res, rej) => {
    const srv = net.createServer();
    srv.unref();
    srv.on("error", rej);
    srv.listen(0, "127.0.0.1", () => {
      const { port } = srv.address();
      srv.close(() => res(port));
    });
  });
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForServer(port, maxAttempts = 40, intervalMs = 250) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/`);
      if (res.status === 200) return true;
    } catch {
      // not ready yet
    }
    await delay(intervalMs);
  }
  return false;
}

async function run() {
  const port = await getAvailablePort();
  console.log(
    `Starting Next.js production server on ephemeral port ${port}...`,
  );

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
    const isReady = await waitForServer(port);
    if (!isReady) {
      throw new Error(
        `Server failed to start and respond on port ${port} within bounded timeout.`,
      );
    }

    const targets = [
      {
        url: "/projects/ledgerpilot-ai",
        expected: 404,
        desc: "Excluded project page",
      },
      {
        url: "/projects/khlim-assist",
        expected: 404,
        desc: "Excluded project page",
      },
      {
        url: "/projects/ledgerpilot/human-review-pipeline.svg",
        expected: 404,
        desc: "Excluded SVG asset",
      },
      {
        url: "/projects/khlim/policy-decision-engine.svg",
        expected: 404,
        desc: "Excluded SVG asset",
      },
      {
        url: "/portraits/richie-professional.jpg",
        expected: 404,
        desc: "Legacy JPEG portrait",
      },
      {
        url: "/projects/spy-market/architecture-diagram.svg",
        expected: 200,
        desc: "Valid SVG asset",
      },
      {
        url: "/projects/personal-project-operator/operator-architecture.svg",
        expected: 200,
        desc: "Valid SVG asset",
      },
      {
        url: "/images/portfolio/monash-campus.webp",
        expected: 200,
        desc: "Valid WebP photo",
      },
    ];

    let allPassed = true;
    for (const t of targets) {
      const res = await fetch(`http://127.0.0.1:${port}${t.url}`);
      const pass = res.status === t.expected;
      console.log(
        `  [${pass ? "PASS" : "FAIL"}] ${t.url.padEnd(60)} -> Status: ${res.status} (Expected: ${t.expected}) [${t.desc}]`,
      );
      if (!pass) allPassed = false;
    }

    if (!allPassed) {
      throw new Error("One or more excluded asset/page assertions failed.");
    }

    console.log("\n🎉 ALL EXCLUDED ASSET & PAGE 404 TESTS PASSED!");
  } finally {
    server.kill("SIGTERM");
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
