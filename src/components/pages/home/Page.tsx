"use client";
import { Stack, Container } from "@mui/joy";
import Navbar from "@/components/global/Navbar";
import About from "./About";
import Summary from "./Summary";
import FeaturedProjects from "./FeaturedProjects";
import Hero from "./Hero";

interface HomePageProps {
	repos: { repo: [] };
	user: { avatar_url: string };
}

export default function HomePage({ repos, user }: HomePageProps) {
	return (
		<Container>
			<Navbar />
			<Hero></Hero>
			<Stack component={"section"} sx={{ width: "100%", maxWidth: "100%", height: "100vh" }}>
				<About user={user} />
				<Summary />
				<FeaturedProjects repos={repos} />
			</Stack>
		</Container>
	);
}
