import ColoredTypography from "@/components/ColoredTypography";
import { Stack, Container, Typography, List, Chip, ListItem, AccordionGroup, StackProps } from "@mui/joy";
import CustomAccordion from "@/components/CustomAccordion";
export default function Resume() {
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
					<Typography level="body-lg">Backend Developer</Typography>
				</Stack>
				<Stack sx={{ mt: 1 }}>
					<Typography level="body-sm">
						{`
						I'm a backend developer with full-stack capabilities skilled in building robust, and scalable RESTful applications with modern front-end frameworks. I specialize in developing efficient APIs, managing
						databases and implementing robust authentication methods. I prioritize clean and maintainable code and thorough API documentation.
						`}
					</Typography>
				</Stack>
				<Stack sx={{ mt: 5 }}>
					<Typography level="h1">
						Formal&nbsp;
						<ColoredTypography level="h1" color="danger">
							Education
						</ColoredTypography>
					</Typography>
					<Stack sx={{ mt: 2 }}>
						<List>
							<ListItem component={"li"}>
								<AccordionGroup variant="plain" transition={"250ms"}>
									<CustomAccordion
										color="danger"
										headerTitle="Noroff - "
										title="School of Technology & Digital Media"
										subtitle="Back-end Development 1 [2023-2025]"
										avatarSrc="https://support.noroff.no/hc/theming_assets/01HZPPTZGC4N8F8NSPBQHJT16E">
										<Stack direction={"column"} textAlign={"start"} width={"80%"} mx={"40px"} margin={"start"} display={"grid"} gap={0}>
											<Stack {...chipStackStyle}>
												<Chip variant="outlined" color="primary">
													JavaScript
												</Chip>
												<Chip variant="outlined" color="primary">
													Node.js
												</Chip>
												<Chip variant="outlined" color="primary">
													Express.js
												</Chip>
												<Chip variant="outlined" color="primary">
													REST API
												</Chip>
												<Chip variant="outlined" color="primary">
													Jest
												</Chip>
												<Chip variant="outlined" color="primary">
													Supertest
												</Chip>
												<Chip variant="outlined" color="primary">
													Postman
												</Chip>
												<Chip variant="outlined" color="primary">
													GDPR
												</Chip>
												<Chip variant="outlined" color="primary">
													Agile
												</Chip>
												<Chip variant="outlined" color="primary">
													Scrum
												</Chip>
												<Chip variant="outlined" color="primary">
													Jira
												</Chip>
											</Stack>
											<Typography level="body-sm">
												Solid understanding of object-oriented programming with hands-on experience in{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													JavaScript
												</ColoredTypography>
												.<br />
												<br></br>Skilled in designing and implementing{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													MySQL
												</ColoredTypography>{" "}
												databases adhering to the <strong>third normalization form</strong> for optimal data structure, and the use of{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													Sequelize
												</ColoredTypography>{" "}
												as the ORM.<br></br>
												<br></br> Proficient in creating{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													REST APIs
												</ColoredTypography>{" "}
												and modern applications utilizing CRUD operations. Procifient in performing manual and automatic testing during development with{" "}
												<ColoredTypography level="body-sm" bold={true}>
													Jest
												</ColoredTypography>{" "}
												and{" "}
												<ColoredTypography level="body-sm" bold={true}>
													Supertest
												</ColoredTypography>
												. Manual API testing is performed using tools like{" "}
												<ColoredTypography level="body-sm" bold={true}>
													Postman
												</ColoredTypography>{" "}
												or equivalent.
												<br></br> <br></br>Familiar with programming methodologies, including the{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													Agile
												</ColoredTypography>{" "}
												mindset and the{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													Scrum&nbsp;
												</ColoredTypography>
												framework. <br></br>
												<br></br>Hands-on experience with implementing authentication via{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													JSON Web Token
												</ColoredTypography>{" "}
												and{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													OAuth
												</ColoredTypography>
												, with the use of middleware to verify credentials and privileges.
												<br></br>
												<br></br>
												Competent in creating documentation for applications with hands-on experience in{" "}
												<ColoredTypography bold={true} level="body-sm">
													Swagger
												</ColoredTypography>
												.<br></br>
												<br></br>Solid understanding of the importance of following{" "}
												<ColoredTypography bold={true} level="body-sm">
													GDPR
												</ColoredTypography>{" "}
												guidelines.
											</Typography>
										</Stack>
									</CustomAccordion>
								</AccordionGroup>
							</ListItem>

							<ListItem sx={{ width: "100%" }}>
								<AccordionGroup variant="plain" transition={"250ms"} sx={{ width: "100%", mt: 5 }}>
									<Typography level="h1">
										Work
										<ColoredTypography color="danger" level="h1">
											{" "}
											Experience
										</ColoredTypography>
									</Typography>
									<CustomAccordion color="danger" headerTitle="Hugo." title="Tech AS" subtitle="Full-stack Application (Freelance, January 2025)">
										<Stack {...chipStackStyle}>
											<Chip variant="outlined" color="primary">
												JavaScript
											</Chip>
											<Chip variant="outlined" color="primary">
												Node.js
											</Chip>
											<Chip variant="outlined" color="primary">
												Express.js
											</Chip>
											<Chip variant="outlined" color="primary">
												MySQL
											</Chip>
											<Chip variant="outlined" color="primary">
												MongoDB
											</Chip>
											<Chip variant="outlined" color="primary">
												Bootstrap
											</Chip>
											<Chip variant="outlined" color="primary">
												EJS
											</Chip>
										</Stack>
										<Stack direction={"column"} textAlign={"start"} width={"80%"} mx={"40px"} margin={"start"} display={"grid"} gap={0}>
											<Typography level="body-sm">
												Developed a full-stack application utilizing{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													Express.js
												</ColoredTypography>
												, integrating secure JWT-based authentication for user role permissions and leveraging databases including{" "}
												<ColoredTypography color="primary" level="body-sm" bold={true}>
													MySQL
												</ColoredTypography>{" "}
												and{" "}
												<ColoredTypography level="body-sm" color="primary" bold={true}>
													MongoDB
												</ColoredTypography>
												.<br></br>Built an efficient, elegant and mobile friendly front-end utilizing{" "}
												<ColoredTypography level="body-sm" bold={true}>
													Bootstrap
												</ColoredTypography>
												.
											</Typography>
										</Stack>
									</CustomAccordion>
								</AccordionGroup>
							</ListItem>
						</List>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
}
