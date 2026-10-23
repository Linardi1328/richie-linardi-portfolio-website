import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { getRepositoryActivity } from "../src/lib/repository-activity.ts";

const originalFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("rejects arbitrary hosts and repositories without fetching", async () => {
  globalThis.fetch = () => {
    throw new Error("Unexpected external request");
  };
  assert.equal(await getRepositoryActivity("http://localhost/admin"), null);
  assert.equal(
    await getRepositoryActivity("https://github.com/another-owner/repo"),
    null,
  );
});

test("returns public repository activity with hourly revalidation", async () => {
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "https://api.github.com/repos/Linardi1328/example");
    assert.equal(options.next.revalidate, 3600);
    return Response.json({
      private: false,
      name: "example",
      html_url: "https://github.com/Linardi1328/example",
      pushed_at: "2026-10-22T10:00:00Z",
    });
  };
  assert.equal(
    (await getRepositoryActivity("https://github.com/Linardi1328/example"))
      .pushedAt,
    "2026-10-22T10:00:00Z",
  );
});

test("does not turn source failures or malformed data into fresh activity", async () => {
  globalThis.fetch = async () => new Response("Rate limited", { status: 403 });
  assert.equal(
    await getRepositoryActivity("https://github.com/Linardi1328/example"),
    null,
  );
  globalThis.fetch = async () =>
    Response.json({ private: false, pushed_at: "bad" });
  assert.equal(
    await getRepositoryActivity("https://github.com/Linardi1328/example"),
    null,
  );
  globalThis.fetch = async () => {
    throw new Error("Network unavailable");
  };
  assert.equal(
    await getRepositoryActivity("https://github.com/Linardi1328/example"),
    null,
  );
});
