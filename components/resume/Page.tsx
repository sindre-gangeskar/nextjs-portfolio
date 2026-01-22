"use client";
import { Stack, Container, Typography, StackProps, List, ListItem, Button, ChipProps, Card, CardContent, CardActions } from "@mui/joy";
import Work from "./Work";
import Education from "./Education";
import { EmailRounded, DownloadRounded, LocationCityRounded } from "@mui/icons-material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LinkedInButton from "../ui/LinkedInButton";
export default function Resume() {
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.set("section > *", { opacity: 0, transform: "translateY(-15px)" });
		tl.to("section > *", { opacity: 1, transform: "translateY(0)", duration: 1.3, stagger: 0.08, ease: "elastic.out" });
	}, []);
	const chipVariants: ChipProps = { variant: "soft", color: "primary" };
	const chipStackStyle: StackProps = {
		sx: {
			direction: "column",
			mb: "15px",
			width: "100%",
			mx: "auto",
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "center",
			justifyItems: "center",
			py: 1,
			gap: 1.5,
		},
	};

	return (
		<Container component={"main"} sx={{ p: { xs: 2, sm: 5 } }}>
			<Stack component={"section"} sx={{ mx: 0 }}>
				<Card sx={{ mt: 1 }}  variant="soft" color="neutral">
					<Stack direction={"column"}>
						<Typography level="h1">Sindre Gangeskar</Typography>
						<Typography level="title-md">Backend & Full-Stack Developer</Typography>
					</Stack>
					<CardContent>
						<Typography level="body-sm" lineHeight={"1.5rem"}>
							Passionate backend developer with <strong>full-stack</strong> capabilities, and expertise in building <strong>robust, scalable RESTful</strong> applications with modern front-end frameworks. I
							specialize in developing <strong>efficient</strong> APIs, managing databases and implementing robust authentication methods. I prioritize clean, <strong>maintainable code</strong> and comprehensive{" "}
							<strong>API documentation</strong>. Eager to apply my skills in challenging and dynamic environments.
						</Typography>
					</CardContent>
					<CardActions>
						<List sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between" }}>
							<ListItem>
								<Stack gap={1} direction={{ xs: "column", md: "row" }}>
									<Button
										sx={{ textUnderlineOffset: "5px" }}
										variant="plain"
										color="neutral"
										component={"a"}
										target="_blank"
										startDecorator={<EmailRounded />}
										href="mailto:Sindre Gangeskar<contact@sindregangeskar.dev>">
										contact@sindregangeskar.dev
									</Button>
									<LinkedInButton />
									<Button size="sm" variant="soft" color="danger" href="/assets/Sindre Gangeskar - Resumé.pdf" download={"Sindre Gangeskar - Resumé"} component={"a"} startDecorator={<DownloadRounded />}>
										<Typography>Download Resumé</Typography>
									</Button>
								</Stack>
							</ListItem>
							<ListItem>
								<Typography color="neutral" component={"p"} startDecorator={<LocationCityRounded />} level={"title-sm"}>
									Nannestad, Norway
								</Typography>
							</ListItem>
						</List>
					</CardActions>
				</Card>
				<Stack mt={2}></Stack>
				<Education style={chipStackStyle} chipVariants={chipVariants} />
				<Work style={chipStackStyle} chipVariants={chipVariants} />
			</Stack>
		</Container>
	);
}
