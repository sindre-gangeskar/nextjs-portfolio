import { Octokit } from "octokit";

export default class GithubService {
	static async getFeaturedRepos() {
		try {
			const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
			const repoNames: string[] = ["ludonium", "exam-project", "nuxtjs-database", "steam-backlogify", "shadps4-alchemist"];
			const accumulatedRepos = [];

			for (const repo of repoNames) {
				const { data } = await octokit.request("GET /repos/{owner}/{repo}", { owner: "sindre-gangeskar", repo: repo });
				accumulatedRepos.push(data);
			}
			const formattedRepos = accumulatedRepos.map(x => ({
				name: x.name.replace("-", " "),
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
	}

	static async getUserProfile() {
		try {
			const octoKit = new Octokit({ auth: process.env.GITHUB_TOKEN });
			const { data } = await octoKit.request("GET /users/{username}", { username: "sindre-gangeskar" });
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
