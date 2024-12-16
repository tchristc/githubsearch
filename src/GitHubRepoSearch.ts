import { PullRequest, PullRequestResult } from "./GitHubResources";

function GitHubApiUrl(
  owner: string,
  repo: string,
  resource: string,
  pageSize: string,
  page: string | null = null
): string {
  const pageParam = page === null ? null : `&page=${page}`;
  return `https://api.github.com/repos/${owner}/${repo}/${resource}?state=all&per_page=${pageSize}${pageParam}`;
}

export async function GitHubRepoSearch(
  owner: string,
  repo: string,
  resource: string,
  pageSize: string,
  page: string
): Promise<PullRequestResult> {
  const url = GitHubApiUrl(owner, repo, resource, pageSize, page);
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  if (import.meta.env.VITE_REACT_APP_API_KEY) {
    headers.Authorization = `token ${import.meta.env.VITE_REACT_APP_API_KEY}`;
  }

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const urlPageSize1 = GitHubApiUrl(owner, repo, resource, pageSize, "1");
    const responseForPageSize1 = await fetch(urlPageSize1, { headers });

    if (!responseForPageSize1.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const linkHeader = responseForPageSize1.headers.get("Link");
    let total = 0;

    if (linkHeader) {
      const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
      if (lastPageMatch) {
        total = parseInt(lastPageMatch[1], 10);
      }
    }

    const data: PullRequest[] = await response.json();
    const result: PullRequestResult = { data: data, total: total };
    return result;
  } catch (error) {
    console.error("Error fetching pull request count:", error);
  }
  return { data: [], total: 0 } as PullRequestResult;
}

export async function GetAllGithubPulls(
  owner: string,
  repo: string,
  resource: string,
  pageSize: string
): Promise<PullRequestResult> {
  
  let url,
    page = 0,
    results: PullRequest[] = [];

  do {
    url = GitHubApiUrl(owner, repo, resource, pageSize, `${page++}`);

    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };

    if (import.meta.env.VITE_REACT_APP_API_KEY) {
      headers.Authorization = `token ${import.meta.env.VITE_REACT_APP_API_KEY}`;
    }

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        break;
      }

      const data: PullRequest[] = await response.json();

      if (data.length === 0) {
        break;
      }

      results = results.concat(data);
    } catch (error) {
      console.error("Error fetching pull request count:", error);
      break;
    }
  } while (true);
  const result: PullRequestResult = { data: results, total: results.length };
  return result;
}
