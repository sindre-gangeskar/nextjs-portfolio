import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		interface Repo {
			name: string;
			fullname: string;
			stargazers_count: number;
			watchers_count: number;
			forks_count: number;
			url: string;
			description: string | null;
		}
		const repos: string[] = ["shadps4-alchemist", "steam-backlogify", "candy-log", "database-authentication-jwt"];

		const reposData: Repo[] = [];
		const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

		for (const repo of repos) {
			const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo, headers: { "X-Github-API-Version": "2022-11-28" } });
      if (!data) continue;
      if (data.name.includes("-")) data.name = data.name.replace("-", " ");

      console.log(data);
			reposData.push({
				name: data.name,
				fullname: data.full_name,
				stargazers_count: data.stargazers_count,
				watchers_count: data.watchers_count,
				forks_count: data.forks_count,
				url: data.html_url,
				description: data.description,
			});
		}

		return res.status(200).json({ repo: reposData });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "An internal server error has occurred while trying to fetch repo data" });
	}
}
