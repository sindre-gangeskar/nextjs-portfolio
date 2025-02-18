"use client";
import { Container, Stack, Typography } from "@mui/joy";
import Project from "@/components/Project";
import ColoredTypography from "@/components/ColoredTypography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import Loader from "../Loader";
interface RepoType {
	name: string;
	description: string | null;
	url: string;
}

export default function Projects() {
	const [repos, setRepos] = useState([] as RepoType[]);
	const [loading, setLoading] = useState(true);

	useGSAP(() => {
		if (repos.length > 0) {
			const tl = gsap.timeline();
			gsap.set(".project", { transform: "translateX(15px)", opacity: 0 });

			tl.to(".project", { transform: "translateX(0)", duration: 1.25, stagger: 0.08, opacity: 1, ease: "elastic.out" });
		}
	}, [repos]);

	useEffect(() => {
		async function fetchProjects() {
			try {
				setLoading(true);
				const response = await fetch(`/api/github/repos/all`, { cache: "force-cache", headers: { "Content-Type": "application/json", accept: "application/json" } });
				const { data } = await response.json();
				setRepos(data);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		}
		fetchProjects();
	}, []);

	return (
		<Container component={"main"}>
			<Stack mt={10}>
				<Typography level="h1">
					Explore <ColoredTypography level="h1">Projects</ColoredTypography>
				</Typography>
			</Stack>
			<Stack gap={2} mt={5}>
				{!loading && repos.length > 0 ? (
					repos.map((repo: RepoType) => {
						return <Project className="project" key={repo.name} repo={repo}></Project>;
					})
				) : (
					<Loader></Loader>
				)}
			</Stack>
		</Container>
	);
}
