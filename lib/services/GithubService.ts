import { Octokit } from "octokit";
import { unstable_cache } from 'next/cache';
import { RepoType } from "../definitions";
const revalidationTimeInHours = 60 * 60 * 3;

export default class GithubService {
	static getFeaturedRepos = unstable_cache(async () => {
		try {
			const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
			const repoNames: string[] = [ "ludonium",
				"nextjs-portfolio",
				"nuxtjs-database",
				"shadps4-alchemist",
				"exam-project",
				"express-ts-generate",
			];
			const accumulatedRepos = [];

			for (const repo of repoNames) {
				const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo });
				if (!data) continue;
				accumulatedRepos.push(data);
			}
			const formattedRepos = formatRepos(accumulatedRepos);

			return formattedRepos;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}, [ 'featured-repos' ], { revalidate: revalidationTimeInHours, tags: [ 'github-repos' ] });

	static getAllRepos = unstable_cache(async () => {
		try {
			const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
			const repoNames: string[] = [ "ludonium", "express-ts-generate", "shadps4-alchemist", "docker-simple-app", "steam-backlogify", "nuxtjs-database", "nextjs-portfolio", "exam-project", "semester-ca", "candy-log" ];
			const accumulatedRepos = [];

			for (const repo of repoNames) {
				const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo });
				if (!data) continue;
				accumulatedRepos.push(data);
			}

			const formattedRepos = formatRepos(accumulatedRepos);
			return formattedRepos;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}, [ 'all-projects' ], { revalidate: revalidationTimeInHours, tags: [ 'github-all-repos' ] })

	static getUserProfile = unstable_cache(async () => {
		try {
			const octoKit = new Octokit({ auth: process.env.GITHUB_TOKEN });
			const { data } = await octoKit.request("GET /users/{username}", { username: "sindre-gangeskar" });
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}, [ 'user-profile' ], { revalidate: revalidationTimeInHours, tags: [ 'user-profile' ] })
}

function formatRepos(arr: RepoType[]) {
	if (Array.isArray(arr)) {
		const formattedRepos = arr.map(x => ({
			name: x.name.replace(/\-/g, " "),
			description: x.description,
			html_url: x.html_url,
			stargazers_count: x.stargazers_count,
			fullname: x.full_name,
			forks_count: x.forks_count,
			ownerImgURL: x.owner?.avatar_url,
			watchers_count: x.watchers_count,
			...(x?.homepage ? { homepage: x.homepage } : null)
		}))

		return formattedRepos;
	}
	return null;
}