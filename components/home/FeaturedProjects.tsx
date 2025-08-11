"use client";
import { Stack, Typography, Button } from "@mui/joy";
import ColoredTypography from "@/components/ui/ColoredTypography";
import Tile from "@/components/home/Tile";
import Link from "next/link";
import { ArrowForwardRounded } from "@mui/icons-material";
import { useState } from "react";

export default function FeaturedProjects({ repos }: { repos: [] }) {
	const [hovering, setHovering] = useState(false);
	return (
		<Stack id="featured-projects" component={"section"} direction={"column"} sx={{ width: "100%", p: 0, position: "relative", mt: 15 }}>
			<Typography level="h1" mb={{ xs: 3, md: 3 }} mx={5} textAlign={{ xs: "center", md: "end" }}>
				Featured
				<ColoredTypography color="primary" level="h1">
					{" "}
					Projects
				</ColoredTypography>
			</Typography>
			<Stack
				component={"section"}
				sx={{
					width: "100%",
					height: "100%",
					display: { xs: "flex", md: "grid" },
					gap: { xs: 2, md: 2 },
					rowGap: 0,
					justifyContent: "center",
					alignItems: "center",
					p: 0,
					gridTemplateColumns: { md: "repeat(auto-fit, minmax(350px, 0fr))" },
					flexDirection: { xs: "column" },
				}}>
				{repos?.map((x: { name: string; fullname: string; description: string; stargazers_count: number; url: string }) => {
					return <Tile color="primary" title={x.name} description={x.description} isRepo={true} url={x.url} stars={x.stargazers_count} key={x.name}></Tile>;
				})}

				<Button
					onMouseEnter={() => {
						setHovering(true);
					}}
					onMouseLeave={() => {
						setHovering(false);
					}}
					sx={theme => ({
						py: 5,
						fontSize: { sm: "1rem", md: "1.2rem" },
						overflow: "hidden",
						position: "relative",
						width: { xs: "90%", md: "initial" },
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
			</Stack>
		</Stack>
	);
}
