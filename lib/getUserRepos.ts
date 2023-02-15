import "server-only";
import { GetUserReposResponse } from "@/types/GithubTypes";
import { Octokit } from "@octokit/rest";
import { cache } from "react";

export const getUserRepos = cache(
  async ({
    username,
  }: {
    username: string;
  }): Promise<GetUserReposResponse["data"]> => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const req = await octokit.request("GET /users/{username}/repos", {
      username: username,
      sort: "pushed",
      per_page: 5,
    });

    return req.data;
  }
);
