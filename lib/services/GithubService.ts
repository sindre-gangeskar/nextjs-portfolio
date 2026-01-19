import { Octokit } from "octokit";
import { unstable_cache } from 'next/cache';
import { RepoType } from "../definitions";

const revalidateAfter = Number(process.env.REVALIDATE_AFTER) || 60 * 60 * 3;
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default class GithubService {
	static getRepos = unstable_cache(async () => {
		const featuredRepos: string[] = [
			"ludonium",
			"nextjs-portfolio",
			"extractqr",
			"shadps4-alchemist",
			"exam-project",
			"express-ts-generate",
		];
		const allRepos: string[] = [
			"ludonium",
			"express-ts-generate",
			"shadps4-alchemist",
			"docker-simple-app",
			"extractqr",
			"flask-api",
			"python-flask-basic",
			"steam-backlogify",
			"nuxtjs-database",
			"nextjs-portfolio",
			"exam-project",
			"semester-ca",
			"candy-log" ];

		const combined = Array.from(new Set([ ...featuredRepos, ...allRepos ]))
		const repos = await Promise.all(combined.map(repo => octokit.request('GET /repos/{owner}/{repo}', { owner: 'sindre-gangeskar', repo }).then(repo => repo.data))).catch((err) => {
			console.error(err);
			return []
		});

		const featured = formatRepos(repos)?.filter(repo => featuredRepos.includes(repo.original_name));
		const all = formatRepos(repos)?.filter(repo => allRepos.includes(repo.original_name));
		return { featured, all };
	}, [ "repositories" ], { revalidate: revalidateAfter, tags: [ "github-repositories" ] })

	static getUserProfile = unstable_cache(async () => {
		try {
			const { data } = await octokit.request("GET /users/{username}", { username: "sindre-gangeskar" });
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}, [ 'user-profile' ], { revalidate: revalidateAfter, tags: [ 'user-profile' ] })
}

function formatRepos(arr: RepoType[]) {

	if (Array.isArray(arr)) {
		const formattedRepos = arr.map(x => ({
			img: `/previews/${x.name}.jpg` || null,
			...(x.name === "nextjs-portfolio" ? { img: '/images/og-default.jpg' } : null),
			name: x.name.replace(/\-/g, " "),
			original_name: x.name,
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