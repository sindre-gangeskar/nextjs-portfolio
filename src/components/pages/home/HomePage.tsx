"use client";
import ThemeToggler from "../../global/ThemeToggler";
import { Box, Stack, Container } from "@mui/joy";
import Header from "@/components/global/Header";
import Tile from "@/components/global/Tile";
import ProfileAvatar from "@/components/global/ProfileAvatar";
import GridBackground from "@/components/global/GridBackground";

interface HomePageProps {
	repos: { repo: [] };
	user: { avatar_url: string };
}

export default function HomePage({ repos, user }: HomePageProps) {
	return (
		<>
			<ThemeToggler />
			{user?.avatar_url ? <ProfileAvatar src={user.avatar_url}></ProfileAvatar> : ""}
			<Stack direction="column" sx={{ maxWidth: 900, width: "100%", height: "100vh", margin: "auto", textAlign: "end", overflow: "visible" }}>
				<Box component={"section"} mt={2} sx={{ width: "100%", minHeight: "600px", padding: 2, position: "relative" }}>
					<GridBackground gridSize={50} height={800} width={2500} />
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
