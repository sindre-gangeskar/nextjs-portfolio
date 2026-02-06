"use client";
import { Button, Box, Typography, Stack } from "@mui/joy";
import ProjectCard from "@/components/home/ProjectCard";
import Link from "next/link";
import { ArrowForwardRounded } from "@mui/icons-material";
import useFeaturedProjects from "@/hooks/useFeaturedProjects";
import FeaturedProjectsSkeleton from "./skeletons/FeaturedProjectsSkeleton";
import ColoredTypography from "../ui/ColoredTypography";
import { useEffect } from "react";

export default function FeaturedProjects() {
	const { data, isLoading } = useFeaturedProjects();
	useEffect(() => {
		if (data) console.log(data[1]);
	}, [data]);
	return (
		<Stack component={"section"} mt={15}>
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
						<ProjectCard
							img={x.img ?? null}
							topics={x.topics}
							homepage={x.homepage ?? ""}
							color="primary"
							title={x.name}
							description={x.description ?? ""}
							isRepo={true}
							url={x.html_url}
							stars={x.stargazers_count}
							key={x.name}></ProjectCard>
					))}
				{!isLoading && (
					<Button
						sx={{
							py: 5,
							width: "100%",
							my: "auto",
							mx: "auto",
							zIndex: 1,
							overflow: "hidden",
						}}
						endDecorator={<ArrowForwardRounded />}
						component={Link}
						href="/projects"
						variant={"solid"}
						color={"primary"}>
						Explore more projects
					</Button>
				)}

				{!isLoading && !data && <Typography>No data available.</Typography>}
			</Box>
		</Stack>
	);
}
