import Page from "@/pages/home/Page";

async function fetchRepoData() {
	const res = await fetch(`${process.env.HOST}/api/github/repos`, { cache: "force-cache" });
	const data = await res.json();
	return data.repos;
}

async function getGithubUser() {
	const res = await fetch(`${process.env.HOST}/api/github/user`, { cache: "force-cache" });
	const data = await res.json();
	return data;
}

export default async function Home() {
	const repos = await fetchRepoData();
	const user = await getGithubUser();

	return <Page repos={repos} user={user} />;
}
