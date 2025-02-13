"use client"
import { Stack, Typography } from "@mui/joy";
import ColoredTypography from "@/components/ColoredTypography";
import Tile from "@/components/Tile";
import GridBackground from "@/components/GridBackground";
export default function FeaturedProjects({ repos }: { repos: { repo: [] } }) {
	return (
		<Stack id="featured-projects" component={'section'} direction={"column"} sx={{ width: "100%", p: 0, position: "relative", mt: 15 }}>
			<Typography level="h1" mb={{ xs: 3, md: 3 }} textAlign={{ xs: "center", md: "end" }}>
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
					gap: { xs: 2, md: 5 },
					rowGap: 0,
					justifyContent: "center",
					alignItems: "center",
					p: 0,
					gridTemplateColumns: { md: "repeat(3, 1fr)" },
					flexDirection: { xs: "column" },
				}}>
				<GridBackground gridSize={40} height={900} width={900} style="circle" sx={{opacity: 0.4}} />
				{repos.repo.map((x: { name: string; fullname: string; description: string; stargazers_count: number; url: string }) => {
					return <Tile color="primary" title={x.name} description={x.description} isRepo={true} url={x.url} stars={x.stargazers_count} key={x.name}></Tile>;
				})}
			</Stack>
		</Stack>
	);
}
