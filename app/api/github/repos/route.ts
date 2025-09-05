import { NextResponse } from "next/server";
import { Octokit } from "octokit";
import { RepoType } from "@/lib/definitions";
export async function GET() {
	try {
		const repoNames: string[] = ["shadps4-alchemist", "ludonium", "nuxtjs-database", "steam-backlogify", "exam-project"];

		const repos: RepoType[] = [];
		const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

		for (const repo of repoNames) {
			try {
				const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo });
				data.name = data.name.replace(/\-/g, " ");

				repos.push({
					name: data.name,
					fullname: data.full_name,
					stargazers_count: data.stargazers_count,
					watchers_count: data.watchers_count,
					forks_count: data.forks_count,
					url: data.html_url,
					description: data.description,
					ownerImgURL: data.owner.avatar_url,
				});
			} catch (error) {
				console.error(error);
				continue;
			}
		}
		return NextResponse.json({ repositories: repos }, { status: 200, headers: { "Cache-Control": "public, max-age=10800, stale-while-revalidate=300" } });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: "An internal server error has occurred while trying to fetch repo data" }, { status: 500 });
	}
}
