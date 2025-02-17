import { Metadata } from "next";
import Page from "@/pages/projects/Page";

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Explore my projects'
}

async function fetchProjects() {
	const response = await fetch(`${process.env.HOST}/api/github/repos/all`, {cache: 'force-cache'});
  const data = await response.json();
  
	return data;
}

export default async function Projects() {
	const repos = await fetchProjects();
	return <Page repos={repos}></Page>;
}
