"use client";
import { Container } from "@mui/joy";
import FeaturedProjects from "./FeaturedProjects";
import ContactForm from "./Contact";
import Hero from "./Hero";
import TechStack from "./TechStack";
import { useEffect, useState } from "react";
import Loader from "../Loader";
interface UserType {
	avatar_url: string;
}

export default function HomePage() {
	const [user, setUser] = useState<UserType | null>(null);
	const [repos, setRepos] = useState<[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		async function fetchRepoData() {
			const res = await fetch(`/api/github/repos`, { cache: "force-cache" });
			const { repositories } = await res.json();
			setRepos(repositories);
		}

		async function getGithubUser() {
			const res = await fetch(`/api/github/user`, { cache: "force-cache" });
			const data = await res.json();
			setUser(data);
		}

		async function fetchData() {
			await getGithubUser();
			await fetchRepoData();
			setLoading(false);
		}
		fetchData();
	}, []);

	return (
		<Container>
			{loading && repos.length == 0 ? (
				<Loader />
			) : (
				<>
					<Hero src={user?.avatar_url}></Hero>
					<TechStack />
					<FeaturedProjects repos={repos} />
					<ContactForm></ContactForm>
				</>
			)}
		</Container>
	);
}
