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
      ownerImgURL: string;
		}
		const repoNames: string[] = ["shadps4-alchemist", "steam-backlogify", "candy-log", 'nextjs-portfolio', 'exam-project'];

		const repos: Repo[] = [];
		const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

		for (const repo of repoNames) {
			const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo, headers: { "X-Github-API-Version": "2022-11-28" } });
			
			data.name = data.name.replace(/\-/g, ' ');

			repos.push({
				name: data.name,
				fullname: data.full_name,
				stargazers_count: data.stargazers_count,
				watchers_count: data.watchers_count,
				forks_count: data.forks_count,
				url: data.html_url,
        description: data.description,
        ownerImgURL: data.owner.avatar_url
			});
		}
		res.setHeader('Cache-Control', 'public, max-age=10800, stale-while-revalidate=300')
		return res.status(200).json({ repo: repos });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "An internal server error has occurred while trying to fetch repo data" });
	}
}
