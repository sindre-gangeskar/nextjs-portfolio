"use client";
import { Container, Stack, Typography } from "@mui/joy";
import Project from "@/components/Project";
import ColoredTypography from "@/components/ColoredTypography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface RepoType {
	name: string;
	description: string | null;
	url: string;
}


export default function Projects({ repos }: { repos: { data: [] } }) {
	useGSAP(() => {
		const tl = gsap.timeline();
		gsap.set(".project", { transform: "translateX(15px)", opacity: 0 });

		tl.to(".project", { transform: "translateX(0)", duration: 1.25, stagger: 0.08, opacity: 1, ease: "elastic.out" });
	}, []);
	return (
		<Container component={"main"}>
			<Stack mt={10}>
				<Typography level="h1">
					Explore <ColoredTypography level="h1">Projects</ColoredTypography>
				</Typography>
			</Stack>
			<Stack gap={2} mt={5}>
				{repos?.data?.map((repo: RepoType) => {
					return <Project className={"project"} key={repo.name} repo={repo}></Project>;
				})}
			</Stack>
		</Container>
	);
}
