
import { Metadata } from "next";
import Page from "@/pages/projects/Page";

export const metadata: Metadata = {
	title: "Projects",
	description: "Explore my projects",
};

async function fetchProjects() {
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:3000`;
	const response = await fetch(`${baseUrl}/api/github/repos/all`, { cache: "force-cache" });
	const data = await response.json();

	return data;
}

export default async function Projects() {
	const repos = await fetchProjects();
	return <Page repos={repos}></Page>;
}
