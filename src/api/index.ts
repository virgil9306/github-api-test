// Types
import {
  TGitHubUser,
  TGitHubItem,
  TGitHubApiResponse,
} from '../types';
// Constants
import { PER_PAGE } from '../config/constants';

const URL_ROOT = 'https://api.github.com/search/issues'
const OPTIONS = `&sort=created&order=asc&per_page=${PER_PAGE}`;

const buildUrl = (query: string, page: number) =>
  `${URL_ROOT}?q=${encodeURIComponent(query)}${OPTIONS}&page=${page}`

const search = (
  query = 'GitHub Octocat in:readme user:defunkt', // default example
  page: number,
):Promise<TGitHubApiResponse> =>
  fetch(buildUrl(query, page))
    .then(res => res.json())
    .then((data: TGitHubApiResponse) => {
      console.log("GH API Data:", data);
      // if error throw it
      if (data.hasOwnProperty('message')) {
        throw(new Error(data.message));
      }
      // else
      return data;
    });

export {
  search,
};
