"use client";
import { Box, Stack, Typography, Container } from "@mui/joy";
import ColoredTypography from "@/components/global/ColoredTypography";
import Tile from "@/components/global/Tile";
import GridBackground from "@/components/global/GridBackground";
import Navbar from "@/components/global/Navbar";
import About from "./About";
import Summary from "./Summary";

interface HomePageProps {
	repos: { repo: [] };
	user: { avatar_url: string };
}

export default function HomePage({ repos, user }: HomePageProps) {
	return (
		<>
			<Navbar />
			<Container>
				<Stack component={"main"} sx={{ width: "100%", maxWidth: 1200 }}>
					<About user={user} />
					<Summary></Summary>
					<Stack direction={"column"} sx={{ width: "100%", px: 2, position: "relative" }}>
						<Typography level="h1" mb={{ xs: 3, md: 0 }} textAlign={{ xs: "center", md: "end" }}>
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
								m: 0,
								mt: 2,
								flex: 0,
								gridTemplateColumns: { md: "repeat(3, 1fr)" },
								flexDirection: { xs: "column" },
							}}>
							<GridBackground gridSize={50} height={800} width={1500} />
							{repos.repo.map((x: { name: string; fullname: string; description: string; stargazers_count: number; url: string }) => {
								return <Tile color="primary" title={x.name} description={x.description} isRepo={true} url={x.url} stars={x.stargazers_count} key={x.name}></Tile>;
							})}
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</>
	);
}
