"use client";
import { Container } from "@mui/joy";
import FeaturedProjects from "./FeaturedProjects";
import ContactForm from "./Contact";
import Hero from "./Hero";
import TechStack from "./TechStack";
interface HomePageProps {
	repos: [];
	user: { avatar_url: string };
}

export default function HomePage({ repos, user }: HomePageProps) {
	return (
	<Container>
		<Hero src={user?.avatar_url}></Hero>
		<TechStack />
			<FeaturedProjects repos={repos} />
			<ContactForm></ContactForm>
	</Container>
);
}
