type RepositoryActivity = {
  name: string;
  url: string;
  pushedAt: string;
};

// Only the owner's public repositories are eligible for server-side refreshes.
const repositoryPattern =
  /^https:\/\/github\.com\/(Linardi1328\/[A-Za-z0-9_.-]+)\/?$/;

export async function getRepositoryActivity(
  repositoryUrl: string,
): Promise<RepositoryActivity | null> {
  const match = repositoryUrl.match(repositoryPattern);
  if (!match) return null;

  try {
    const response = await fetch(`https://api.github.com/repos/${match[1]}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return null;

    const data: unknown = await response.json();
    if (!data || typeof data !== "object") return null;
    const record = data as Record<string, unknown>;
    if (
      record.private !== false ||
      typeof record.name !== "string" ||
      typeof record.html_url !== "string" ||
      !repositoryPattern.test(record.html_url) ||
      typeof record.pushed_at !== "string" ||
      !Number.isFinite(Date.parse(record.pushed_at))
    ) {
      return null;
    }

    return {
      name: record.name,
      url: record.html_url,
      pushedAt: record.pushed_at,
    };
  } catch {
    // An unavailable or rate-limited source must not become a fresh claim.
    return null;
  }
}
