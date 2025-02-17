import { Metadata } from "next";
import Page from "@/pages/projects/Page";

export const metadata: Metadata = {
	title: "Projects",
	description: "Explore my projects",
};

async function fetchProjects() {
	try {
		const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:3000`;
		const response = await fetch(`${baseUrl}/api/github/repos/all`, { cache: "force-cache", headers: { "Content-Type": "application/json", accept: "application/json" } });
		console.log(response.status, response.statusText);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export default async function Projects() {
	const repos = await fetchProjects();
	return <Page repos={repos}></Page>;
}
