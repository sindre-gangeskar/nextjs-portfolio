import { Metadata } from "next";
import Projects from "@/components/projects/Projects";

export const metadata: Metadata = {
	title: "Projects",
	description: "Explore my projects",
};

export default async function Page() {
	return <Projects />;
}
