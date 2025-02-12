"use client";
import { Stack, Container } from "@mui/joy";
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
			<Hero src={user.avatar_url}></Hero>
			<Summary />
			<FeaturedProjects repos={repos} />
		</Container>
	);
}
