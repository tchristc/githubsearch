export interface PullRequestResult{
    data: PullRequest[];
    total: number;
}
export interface PullRequest {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: OwnerOrUser;
  body: string;
  created_at: string;
  updated_at: string;
  closed_at: string;
  merged_at: string;
  merge_commit_sha: string;
  assignee?: null;
  assignees?: null[] | null;
  requested_reviewers?: null[] | null;
  requested_teams?: null[] | null;
  labels?: null[] | null;
  milestone?: null;
  draft: boolean;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: Head;
  base: Base;
  _links: Links;
  author_association: string;
  auto_merge?: null;
  active_lock_reason?: null;
}
export interface OwnerOrUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}
export interface Head {
  label: string;
  ref: string;
  sha: string;
  user: OwnerOrUser;
  repo: Repo;
}
export interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: OwnerOrUser;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url?: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics?: null[] | null;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url?: null;
  node_id: string;
}
export interface Base {
  label: string;
  ref: string;
  sha: string;
  user: OwnerOrUser;
  repo: Repo1;
}
export interface Repo1 {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: OwnerOrUser;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url?: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics?: string[] | null;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
export interface Links {
  self: SelfOrHtmlOrIssueOrCommentsOrReviewCommentsOrReviewCommentOrCommitsOrStatuses;
  html: SelfOrHtmlOrIssueOrCommentsOrReviewCommentsOrReviewCommentOrCommitsOrStatuses;
  issue: SelfOrHtmlOrIssueOrCommentsOrReviewCommentsOrReviewCommentOrCommitsOrStatuses;
  comments: SelfOrHtmlOrIssueOrCommentsOrReviewCommentsOrReviewCommentOrCommitsOrStatuses;
  review_comments: SelfOrHtmlOrIssueOrCommentsOrReviewCommentsOrReviewCommentOrCommitsOrStatuses;
  review_comment: SelfOrHtmlOrIssueOrCommentsOrReviewCommentsOrReviewCommentOrCommitsOrStatuses;
  commits: SelfOrHtmlOrIssueOrCommentsOrReviewCommentsOrReviewCommentOrCommitsOrStatuses;
  statuses: SelfOrHtmlOrIssueOrCommentsOrReviewCommentsOrReviewCommentOrCommitsOrStatuses;
}
export interface SelfOrHtmlOrIssueOrCommentsOrReviewCommentsOrReviewCommentOrCommitsOrStatuses {
  href: string;
}

export async function GitHubRepoSearch(
  owner: string,
  repo: string,
  resource: string,
  pageSize: string,
  page: string
): Promise<PullRequestResult> {


  const url = `https://api.github.com/repos/${owner}/${repo}/${resource}?state=all&per_page=${pageSize}&page=${page}`;
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

    const urlPageSize1 = `https://api.github.com/repos/${owner}/${repo}/${resource}?state=all&per_page=${1}`;
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
    const result: PullRequestResult = {data: data, total: total}
    return result;
  } catch (error) {
    console.error("Error fetching pull request count:", error);
  }
  return {data: [], total:0} as PullRequestResult;
}
