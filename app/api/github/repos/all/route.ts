import { NextResponse } from "next/server";
import { Octokit } from "octokit";
export async function GET() {
	const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
	const repoNames: string[] = ["shadps4-alchemist", "steam-backlogify", "candy-log", "exam-project", "srv-ca"];
	const repos: RepoType[] = [];

	interface RepoType {
		name: string;
		description?: string | null;
		url: string;
	}
	try {
		for (const repo of repoNames) {
			try {
				const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo });

				data.name = data.name.replace(/\-/g, " ");
				repos.push({ name: data.name, description: data.description, url: data.html_url });
			} catch (error) {
				console.error(error);
				continue;
			}
		}

		return NextResponse.json({ data: repos }, { status: 200, headers: { "Cache-Control": "public, max-age=10800, stale-while-revalidate=300" } });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: 'Failed to fetch repos' }, { status: 200 });
	}
}
