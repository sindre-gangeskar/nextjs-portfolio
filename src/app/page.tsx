import ClientWrapper from "@/components/ClientWrapper";

async function fetchRepoData() {
	const res = await fetch("http://localhost:3000/api/github", { cache: "no-store" });
	const data = await res.json();
	return data;
}

export default async function Home() {
	const repos = await fetchRepoData();
	return (
		<>
			<ClientWrapper repos={repos} />
		</>
	);
}
