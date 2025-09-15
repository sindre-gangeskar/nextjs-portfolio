import { Metadata } from "next";
import ProjectsPage from "@/components/projects/ProjectsPage";

export const metadata: Metadata = {
	title: "Projects",
	description: "Explore my projects",
};

export default async function Page() {
	return <ProjectsPage />;
}
