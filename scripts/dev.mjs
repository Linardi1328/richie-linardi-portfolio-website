import { spawn } from "node:child_process";
import { resolve } from "node:path";

// Accept the preview supervisor's common dev-server flags as well as Next's.
const args = process.argv
  .slice(2)
  .filter((arg) => arg !== "--strictPort")
  .map((arg) => (arg === "--host" ? "--hostname" : arg));
if (
  !args.some((arg) => arg === "--hostname" || arg.startsWith("--hostname="))
) {
  args.push("--hostname", "127.0.0.1");
}
const child = spawn(
  process.execPath,
  [resolve("node_modules/next/dist/bin/next"), "dev", "--webpack", ...args],
  { stdio: "inherit" },
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => child.kill(signal));
child.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
