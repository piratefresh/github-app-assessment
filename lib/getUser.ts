import "server-only";

import { GetUserResponse } from "@/types/GithubTypes";
import { Octokit } from "@octokit/rest";
import { cache } from "react";

export const getUser = cache(
  async ({
    username,
  }: {
    username: string;
  }): Promise<GetUserResponse["data"] | null> => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    try {
      const req = await octokit.request("GET /users/{username}", {
        username: username,
      });

      return req.data;
    } catch (error) {
      return null;
    }
  }
);
