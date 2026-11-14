import { spawn } from "node:child_process";
import http from "node:http";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  const port = 3760;
  console.log(`Starting Next.js server on port ${port}...`);
  const server = spawn("npx", ["next", "start", "-p", String(port)], {
    cwd: "/Users/richie/richie-linardi-portfolio-website",
    env: { ...process.env, PORT: String(port) },
  });

  await delay(1500);

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
    // Also verify valid assets still return 200
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
    await new Promise((resolve) => {
      http.get(`http://localhost:${port}${t.url}`, (res) => {
        const pass = res.statusCode === t.expected;
        console.log(
          `  [${pass ? "PASS" : "FAIL"}] ${t.url.padEnd(60)} -> Status: ${res.statusCode} (Expected: ${t.expected}) [${t.desc}]`,
        );
        if (!pass) allPassed = false;
        resolve();
      });
    });
  }

  server.kill();

  if (!allPassed) {
    console.error("Some asset checks failed!");
    process.exit(1);
  }

  console.log("\n🎉 ALL EXCLUDED ASSET & PAGE 404 TESTS PASSED!");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
