"use client";
import { Box, Stack, Typography, Card, List, ListItem, ListDivider, ListItemDecorator } from "@mui/joy";
import { StarHalfTwoTone } from "@mui/icons-material";
import Header from "@/components/global/Header";
import Tile from "@/components/global/Tile";
import GridBackground from "@/components/global/GridBackground";
import Navbar from "@/components/global/Navbar";
import ProfileSummary from "./ProfileSummary";

interface HomePageProps {
	repos: { repo: [] };
	user: { avatar_url: string };
}

export default function HomePage({ repos, user }: HomePageProps) {
	return (
	<>
		<Navbar />
		<Stack direction="column" sx={{ maxWidth: 900, width: "100%", height: "100vh", margin: "auto", textAlign: "end" }}>
			<ProfileSummary user={user} />

			<Stack component={"section"} sx={{ width: "100%", p: 2, position: "relative" }} my={5}>
				<Header level="h1" color="primary" preColorText="Profile" coloredText="Summary"></Header>
				<Box component={"div"} sx={{ textAlign: "end" }} width={"100%"} marginLeft={"auto"}>
					<Card variant="outlined" sx={{ width: "100%" }}>
						<List component={"ol"} orientation="vertical">
							<ListItem component={"li"}>
								<Header color="danger" level="h2" preColorText="Formal" coloredText="Education"></Header>
							</ListItem>
							<ListItem component={"li"} sx={{placeItems: 'baseline'}}>
								<Header color="danger" level="h3" preColorText="Noroff - " coloredText="School of Technology & Digital Media"></Header><Typography level="body-sm">Back-end Development 1 [2023-2025]</Typography>
							</ListItem>
							<ListItem component={"li"}>
								<Stack direction={"column"} textAlign={"start"} width={'80%'} mx={'20px'} margin={'start'} display={'grid'} gap={1}>
									<Typography>
										Design and implement
										<strong>
											<Header color="primary" level="body-md" preColorText="" coloredText="MySQL"></Header>
										</strong>{" "}
										databases following the <strong>third normalization form</strong> (3NF).
										</Typography>
									<Typography>Create <strong><Header color="primary" coloredText="REST APIs" level="body-md"/></strong> and modern applications that utilize CRUD operations.</Typography>
									<Typography>Knowledge within programming methodology and an understanding of the <strong><Header color="primary" coloredText="Agile" level="body-md"/></strong> mindset and the <strong><Header color="primary" level="body-md" coloredText="Scrum"/></strong> framework.</Typography>
									<Typography>Server Deployment</Typography>
									<Typography>Authentication</Typography>
								</Stack>
							</ListItem>

								<ListItem component={"li"} sx={{ mt: 3 }}>
								<Header color="danger" level="h2" preColorText="Hobby " coloredText="Projects"></Header>
							</ListItem>
						</List>
					</Card>
				</Box>
			</Stack>

			<Box component={"section"} sx={{ width: "100%", minHeight: "600px", padding: 2, position: "relative" }}>
				<Header color="primary" preColorText="Featured" level="h1" coloredText="Projects"></Header>
				<Box
					component={"div"}
					sx={{
						width: "100%",
						height: "100%",
						display: "grid",
						gap: 10,
						rowGap: 0,
						justifyContent: "center",
						alignItems: "center",
						p: 0,
						m: 0,

						gridTemplateColumns: "repeat(auto-fit, minmax(280px, 0fr))",
					}}>
					<GridBackground gridSize={50} height={800} width={1500} />
					{repos.repo.map((x: { name: string; fullname: string; description: string; stargazers_count: number; url: string }) => {
						return <Tile color="primary" title={x.name} description={x.description} isRepo={true} url={x.url} stars={x.stargazers_count} key={x.name}></Tile>;
					})}
				</Box>
			</Box>
		</Stack>
	</>
);
}
