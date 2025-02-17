import Page from "@/components/home/Page";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : `http://localhost:3000`;

async function fetchRepoData() {
	const res = await fetch(`${baseUrl}/api/github/repos`, { cache: "force-cache" });
	const data = await res.json();
	return data.repos;
}

async function getGithubUser() {
	const res = await fetch(`${baseUrl}/api/github/user`, { cache: "force-cache" });
	const data = await res.json();
	return data;
}

export default async function Home() {
	const repos = await fetchRepoData();
	const user = await getGithubUser();

	return <Page repos={repos} user={user} />;
}
