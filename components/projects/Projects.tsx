"use client";
import { Container, Stack, Typography } from "@mui/joy";
import Project from "@/components/projects/Project";
import ColoredTypography from "@/components/ui/ColoredTypography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAllProjects } from "@/hooks/useAllProjects";
import { SxProps } from "@mui/material";
import ProjectSkeleton from "./skeletons/ProjectSkeleton";

export default function Projects() {
	const { data, isLoading } = useAllProjects();
	const baseSx: SxProps = {
		height: { xs: "150px", md: "125px" },
	};

	useGSAP(() => {
		if (data && data.length > 0) {
			const tl = gsap.timeline();
			gsap.set(".project", { transform: "translateX(150px)", opacity: 0, filter: "blur(16px)" });
			tl.to(".project", { transform: "translateX(0)", duration: 0.8, stagger: 0.08, opacity: 1, ease: "power3.out", filter: "blur(0px)" });
		}
	}, [data]);

	return (
		<Container component={"main"}>
			<Stack mt={10}>
				<Typography level="h1">
					Explore <ColoredTypography level="h1">Projects</ColoredTypography>
				</Typography>
			</Stack>
			<Stack gap={2} my={5}>
				{isLoading && Array.from({ length: 4 }).map((_, index) => <ProjectSkeleton key={index} sx={baseSx} />)}
				{!isLoading &&
					data &&
					data.length > 0 &&
					data.map(repo => {
						return <Project className="project" key={repo.name} repo={repo} sx={baseSx} color="neutral" variant={"outlined"}></Project>;
					})}
			</Stack>
		</Container>
	);
}
