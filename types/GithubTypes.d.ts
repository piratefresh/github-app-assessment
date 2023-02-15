import { Endpoints } from "@octokit/types";

type ReposContributorsResponse =
  Endpoints["GET /repos/{owner}/{repo}/contributors"]["response"];
type GetUserResponse = Endpoints["GET /users/{username}"]["response"];
type GetUserReposResponse =
  Endpoints["GET /users/{username}/repos"]["response"];
type SearchReposResponse = Endpoints["GET /search/repositories"]["response"];

type Contributor = ReposContributorsResponse["data"][0];
type Contributors = ReposContributorsResponse["data"];
