import { Metadata } from "next";
import Page from "@/components/projects/Page";

export const metadata: Metadata = {
	title: "Projects",
	description: "Explore my projects",
};

export default async function Projects() {
	return <Page></Page>;
}
