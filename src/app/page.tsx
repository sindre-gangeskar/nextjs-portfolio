import HomePage from "@/components/pages/home/Page";

async function fetchRepoData() {
	const res = await fetch("http://localhost:3000/api/github/repos", { cache: "no-store" });
	const data = await res.json();
	return data;
}

async function getGithubUser() {
	const res = await fetch('http://localhost:3000/api/github/user', { cache: 'default' });
	const data = await res.json();
	
	return data;
}

export default async function Home() {
	const repos = await fetchRepoData();
	const user = await getGithubUser();
	return (
		<>
			<HomePage repos={repos} user={user} />
		</>
	);
}
