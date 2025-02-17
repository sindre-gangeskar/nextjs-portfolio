"use client"
import { Stack, Container, Typography, StackProps, List, ListItem } from "@mui/joy";
import Work from "./Work";
import Education from "./Education";
import { EmailRounded, LinkedIn } from "@mui/icons-material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Resume() {

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.set('section > *', { opacity: 0, transform: 'translateY(-15px)' });
		tl.to('section > *', {opacity: 1, transform: 'translateY(0)', duration: 1.3, stagger: 0.08, ease: 'elastic.out'})
	}, [])


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
				<Stack direction={"column"}>
					<Typography level="h1">Sindre Gangeskar</Typography>
					<Typography level="body-lg">Backend & Full-Stack Developer</Typography>
				</Stack>

				<Stack sx={{ mt: 1 }}>
					<Typography level="body-sm">
						Passionate backend developer with <strong>full-stack</strong> capabilities, and expertise in building <strong>robust, scalable RESTful</strong> applications with modern front-end frameworks. I
						specialize in developing <strong>efficient</strong> APIs, managing databases and implementing robust authentication methods. I prioritize clean, <strong>maintainable code</strong> and comprehensive{" "}
						<strong>API documentation</strong>. Eager to apply my skills in challenging and dynamic environments.
					</Typography>
				</Stack>
				<Stack mt={2}>
					<Typography>Contact Info</Typography>
					<List sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: 'space-between' }}>
						<Stack direction={'row'}>
							<ListItem>
								<Typography
									sx={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
									target="_blank"
									component={"a"}
									startDecorator={<EmailRounded />}
									level={"body-sm"}
									href="mailto:Sindre Gangeskar<contact@sindregangeskar.dev>">
									contact@sindregangeskar.dev
								</Typography>
							</ListItem>
							<ListItem>
								<Typography
									sx={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
									target="_blank"
									color="primary"
									component={"a"}
									href="https://linkedin.com/in/sindre-gangeskar"
									startDecorator={<LinkedIn />}
									level={"body-sm"}>
									LinkedIn: sindre-gangeskar
								</Typography>
							</ListItem>
						</Stack>
						<ListItem>
							<Typography color="neutral" component={"p"} startDecorator={<LocationCityIcon />} level={"body-sm"}>
								Nannestad, Norway
							</Typography>
						</ListItem>
					</List>
				</Stack>
				<Education style={chipStackStyle} />
				<Work style={chipStackStyle} />
			</Stack>
		</Container>
	);
}
