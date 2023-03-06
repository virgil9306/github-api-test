import {
  TGitHubUser,
  TGitHubItem,
  TGitHubApiResponse,
} from '../types';

const URL_ROOT = 'https://api.github.com/search/issues'
const OPTIONS = '&sort=created&order=asc';

const buildUrl = (query: string, page: number) =>
  `${URL_ROOT}?q=${encodeURIComponent(query)}${OPTIONS}`

// TODO:
// - Throw errors (e.g. length limits, throttling) for UI to handle
// - build URL: 'q=' + encodeURIComponent(query);
// - give example query above search bar
const search = (
  // query: string,
  query = 'GitHub Octocat in:readme user:defunkt',
  page = 0
):Promise<void | Array<TGitHubItem>> =>
  fetch(buildUrl(query, page))
    .then(res => res.json())
    .then((data: TGitHubApiResponse) => data.items)
    .then((items: Array<TGitHubItem>) => {
      console.log(items);
      return items;
    });

export {
  search,
};
