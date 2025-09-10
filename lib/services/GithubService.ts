import { Octokit } from "octokit";
import { unstable_cache } from 'next/cache';
export default class GithubService {
	static getFeaturedRepos = unstable_cache(async () => {
		try {
			console.log("🔄 FETCHING FROM GITHUB API - This should only appear once per hour!");
			const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
			const repoNames: string[] = [ "ludonium", "exam-project", "nuxtjs-database", "steam-backlogify", "shadps4-alchemist" ];
			const accumulatedRepos = [];

			for (const repo of repoNames) {
				const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo });
				accumulatedRepos.push(data);
			}
			const formattedRepos = accumulatedRepos.map(x => ({
				name: x.name.replace(/\-/g, " "),
				description: x.description ?? "",
				url: x.html_url,
				stargazers_count: x.stargazers_count,
				fullname: x.full_name,
				forks_count: x.forks_count,
				ownerImgURL: x.owner.avatar_url,
				watchers_count: x.watchers_count,
			}));

			return formattedRepos;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}, [ 'featured-repos' ], { revalidate: 3600, tags: [ 'github-repos' ] });

	static getAllRepos = unstable_cache(async () => {
		try {
			const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
			const repoNames: string[] = [ "ludonium", "shadps4-alchemist", "steam-backlogify", "nuxtjs-database", "nextjs-portfolio", "exam-project", "candy-log" ];
			const accumulatedRepos = [];

			for (const repo of repoNames) {
				const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo });
				if (!data) continue;
				accumulatedRepos.push(data);
			}

			const formattedRepos = accumulatedRepos.map(x => ({ name: x.name.replace(/\-/g, " "), description: x.description, url: x.html_url }));
			return formattedRepos;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}, [ 'all-projects' ], { revalidate: 3600, tags: [ 'github-repos' ] })

	static getUserProfile = unstable_cache(async () => {
		try {
			const octoKit = new Octokit({ auth: process.env.GITHUB_TOKEN });
			const { data } = await octoKit.request("GET /users/{username}", { username: "sindre-gangeskar" });
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}, [ 'user-profile' ], { revalidate: 3600, tags: [ 'user-profile' ] })
}
