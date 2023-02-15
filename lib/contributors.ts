import { Octokit } from "@octokit/rest";
import { cache } from "react";
import { ReposContributorsResponse } from "@/types/GithubTypes";

interface GetContributorsProps {
  owner: string;
  repo: string;
  page?: number;
}

const PER_PAGE = 10;

export const getContributors = cache(
  async ({
    owner,
    repo,
    page = 0,
  }: GetContributorsProps): Promise<ReposContributorsResponse["data"]> => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const req = await octokit.request(
      "GET /repos/{owner}/{repo}/contributors",
      {
        owner,
        repo,
        page,
        per_page: PER_PAGE,
      }
    );

    return req.data;
  }
);

export const getContributorsTotalPages = cache(
  async ({ owner, repo }: GetContributorsProps): Promise<number> => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const { data, headers } = await octokit.repos.listContributors({
      owner,
      repo,
      per_page: PER_PAGE,
    });

    if (headers.link) {
      const lastPageUrl = headers.link.match(/<([^>]+)>;\s*rel="last"/)![1];
      const queryParams = new URLSearchParams(lastPageUrl.split("?")[1]);
      const totalPages = Number(queryParams.get("page"));

      return totalPages;
    } else {
      // If the "Link" header is not present, assume only one page of results
      return 1;
    }
  }
);
