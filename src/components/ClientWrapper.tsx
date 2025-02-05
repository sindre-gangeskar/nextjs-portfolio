"use client";
import ThemeToggler from "./ThemeToggler";
import { Box, Stack, Container } from "@mui/joy";
import Header from "@/components/Header";
import Tile from "@/components/Tile";

interface ClientWrapperPropers {
	repos: { repo: [] };
}

export default function ClientWrapper({ repos }: ClientWrapperPropers) {
	return (
		<>
			<ThemeToggler />;
			<Container
				sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", maxWidth: "800px", width: "100%", height: "fit-content", margin: "auto", justifyContent: "center" }}>
				<Stack
					sx={theme => ({
						height: "800px",
						width: "100%",
						maxWidth: "800px",
						margin: "auto",
						position: "relative",
						background: `linear-gradient(to right, ${theme.vars.palette.neutral.outlinedColor}, transparent 1px, transparent 1px), linear-gradient(to top, ${theme.vars.palette.neutral.outlinedColor}, transparent 1px, transparent 1px)`,
						backgroundSize: "50px 50px",
						backgroundRepeat: "repeat",
						opacity: 0.4,
						"&::after": {
							content: '""',
							position: "absolute",
							inset: 0,
							maskImage: "",
						},
					})}></Stack>
			</Container>
			<Stack direction="column" sx={{ maxWidth: 900, width: "100%", height: "100vh", margin: "auto", textAlign: "end" }}>
				<Box component={"section"} mt={2} sx={{ width: "100%", minHeight: "600px", padding: 2, position: "relative" }}>
					<Header color="primary" preColorText="Profile" level="h1" coloredText="Summary"></Header>
					<Box component={"div"} mt={2} sx={{ width: "100%", height: "100%", display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
						{repos.repo.map((x: { name: string; fullname: string; description: string; stargazers_count: number; url: string }) => {
							return <Tile color="primary" title={x.name} description={x.description} isRepo={true} url={x.url} stars={x.stargazers_count} key={x.name}></Tile>;
						})}
					</Box>
				</Box>
			</Stack>
		</>
	);
}
