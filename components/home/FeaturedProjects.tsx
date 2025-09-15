"use client";
import { Button, Box } from "@mui/joy";
import ProjectCard from "@/components/home/ProjectCard";
import Link from "next/link";
import { ArrowForwardRounded } from "@mui/icons-material";
import { useState } from "react";
import useFeaturedProjects from "@/hooks/useFeaturedProjects";
import FeaturedProjectsSkeleton from "./skeletons/FeaturedProjectsSkeleton";

export default function FeaturedProjects() {
	const [hovering, setHovering] = useState(false);
	const { data, isLoading } = useFeaturedProjects();
	return (
		<Box id={"featured-projects"} sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(350px, 0fr))", justifyContent: "center", width: "100%" }}>
			{isLoading && <FeaturedProjectsSkeleton />}
			{!isLoading &&
				data?.map(x => {
					return <ProjectCard homepage={x.homepage ?? ""} color="primary" title={x.name} description={x.description ?? ""} isRepo={true} url={x.html_url} stars={x.stargazers_count} key={x.name}></ProjectCard>;
				})}

			{!isLoading && (
				<Button
					onMouseEnter={() => {
						setHovering(true);
					}}
					onMouseLeave={() => {
						setHovering(false);
					}}
					sx={theme => ({
						py: 5,
						overflow: "hidden",
						width: "100%",
						my: "auto",
						mx: "auto",
						zIndex: 0,
						"&:hover": {
							color: hovering && theme.palette.mode == "dark" ? "black" : "white",
							background: "none",
						},
						"&:after": {
							content: "''",
							display: "block",
							position: "absolute",
							inset: 0,
							transition: "250ms ease",
							transform: "translateX(-100%)",
							zIndex: -1,
							WebkitMaskImage: "linear-gradient(to right, black, black)",
							background: theme.palette.mode == "dark" ? "white" : "black",
						},
						"&:hover:after": {
							transform: "translateX(0)",
						},
					})}
					endDecorator={<ArrowForwardRounded />}
					component={Link}
					href="/projects"
					variant={"plain"}
					color={"neutral"}>
					Explore more projects
				</Button>
			)}
		</Box>
	);
}
