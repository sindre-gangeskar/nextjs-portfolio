"use client";
import { Button, Box, Typography, Stack } from "@mui/joy";
import ProjectCard from "@/components/home/ProjectCard";
import Link from "next/link";
import { ArrowForwardRounded } from "@mui/icons-material";
import { useState } from "react";
import useFeaturedProjects from "@/hooks/useFeaturedProjects";
import FeaturedProjectsSkeleton from "./skeletons/FeaturedProjectsSkeleton";
import ColoredTypography from "../ui/ColoredTypography";

export default function FeaturedProjects() {
	const [hovering, setHovering] = useState(false);
	const { data, isLoading } = useFeaturedProjects();
	return (
		<Stack component={'section'} mt={15}>
			<Typography level="h1" mb={{ xs: 3, md: 3 }} mx={5} textAlign={{ xs: "center", md: "end" }}>
				Featured
				<ColoredTypography color="primary" level="h1">
					{" "}
					Projects
				</ColoredTypography>
			</Typography>
			<Box id={"featured-projects"} sx={{ display: "grid", gap: 1, gridTemplateColumns: "repeat(auto-fit, minmax(350px, 0fr))", justifyContent: "center", width: "100%" }}>
				{isLoading && <FeaturedProjectsSkeleton />}
				{!isLoading &&
					data &&
					data?.map(x => (
						<ProjectCard img={x.img ?? null} homepage={x.homepage ?? ""} color="primary" title={x.name} description={x.description ?? ""} isRepo={true} url={x.html_url} stars={x.stargazers_count} key={x.name}></ProjectCard>
					))}
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
							width: "100%",
							my: "auto",
							mx: "auto",
							overflow: "hidden",
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
								width: "0%",
								zIndex: -1,
								WebkitMaskImage: "linear-gradient(to right, black, black)",
								background: theme.palette.mode == "dark" ? "white" : "black",
							},
							"&:hover:after": {
								width: "100%",
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

				{!isLoading && !data && <Typography>No data available.</Typography>}
			</Box>
		</Stack>
	);
}
