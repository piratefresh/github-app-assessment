import "server-only";
import { SearchReposResponse } from "@/types/GithubTypes";
import { Octokit } from "@octokit/rest";
import { cache } from "react";

export const searchRepos = cache(
  async ({
    query,
  }: {
    query: string;
  }): Promise<SearchReposResponse["data"]> => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const req = await octokit.request("GET /search/repositories", {
      q: `${query}&sort=stars&order=desc`,
    });

    return req.data;
  }
);
