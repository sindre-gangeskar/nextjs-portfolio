"use client";
import { Container } from "@mui/joy";
import Summary from "./Summary";
import FeaturedProjects from "./FeaturedProjects";
import Hero from "./Hero";
import TechStack from "./TechStack";
interface HomePageProps {
	repos: { repo: [] };
	user: { avatar_url: string };
}

export default function HomePage({ repos, user }: HomePageProps) {
	return (
	<Container>
		<Hero src={user.avatar_url}></Hero>
		<TechStack />
		<FeaturedProjects repos={repos} />
	</Container>
);
}
