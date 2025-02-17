import { DataUsageSharp } from "@mui/icons-material";
import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
	const repoNames: string[] = ["shadps4-alchemist", "steam-backlogify", "candy-log", "exam-project", "srv-ca"];
	const repos: RepoType[] = [];

	interface RepoType {
		name: string;
		description?: string | null;
		url: string;
	}
	try {
		if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });
		for (const repo of repoNames) {
			try {
				const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo });

				data.name = data.name.replace(/\-/g, " ");
				repos.push({ name: data.name, description: data.description, url: data.html_url });
			} catch (error) {
				continue;
			}
		}

		res.setHeader("Cache-Control", "public, max-age=10800, stale-while-revalidate=300");
		return res.status(200).json({ data: repos });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ messagE: "Failed to fetch repos" });
	}
}
