export type TGitHubUser = {
  id: number,
  url: string,
}

export type TGitHubItem = {
  title: string,
  state: string,
  url: string,
  user: TGitHubUser,
  id: number,
};

export type TGitHubApiResponse = {
  items: Array<TGitHubItem>,
  total_count: number,
  message?: string,
};

