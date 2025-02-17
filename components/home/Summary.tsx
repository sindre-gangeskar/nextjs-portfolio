import { Stack, Typography, ListItem, AccordionGroup, Chip, Card, List, StackProps } from "@mui/joy";
import ColoredTypography from "@/components/ColoredTypography";
import CustomAccordion from "@/components/CustomAccordion";
export default function Education() {
	const chipStackStyle: StackProps = {
		sx: {
			direction: "column",
			mb: "15px",
			width: "60%",
			mx: "auto",
			display: "grid",
			justifyContent: "center",
			justifyItems: "center",
			gridTemplateColumns: "repeat(auto-fit, minmax(100px, 0fr))",
			py: 1,
			gap: 1.5,
		},
	};

	return (
		<Stack id="summary" component={"section"} sx={{ width: "100%", p: 2, position: "relative" }} my={15}>
			<Typography component={"span"} mb={3} level="h1" textAlign={{ xs: "center", md: "end" }}>
				Profile
				<ColoredTypography level="h1" color="primary">
					{" "}
					Summary
				</ColoredTypography>
			</Typography>
			<Stack component={"div"} sx={{ textAlign: "end" }} width={"100%"} marginLeft={"auto"}>
				<Card variant="outlined" sx={{ width: "100%" }}>
					<List component={"ol"} orientation="vertical">
						<Typography level="h2" component={"span"} textAlign={"start"} p={2}>
							Formal
							<ColoredTypography color="danger" level="h2">
								{" "}
								Education
							</ColoredTypography>
						</Typography>

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

						<ListItem component={"li"} sx={{ mt: 3 }}>
							<Typography level="h2">
								Work
								<ColoredTypography color="danger" level="h2">
									{" "}
									Experience
								</ColoredTypography>
							</Typography>
						</ListItem>
						<ListItem sx={{ width: "100%" }}>
							<AccordionGroup variant="plain" transition={"250ms"} sx={{ width: "100%" }}>
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
						<ListItem component={"li"} sx={{ mt: 3 }}>
							<Typography level="h2">
								Personal
								<ColoredTypography color="danger" level="h2">
									{" "}
									Projects
								</ColoredTypography>
							</Typography>
						</ListItem>
						<ListItem>
							<AccordionGroup variant="plain" transition={"250ms"} sx={{ width: "100%" }}>
								<CustomAccordion
									color="danger"
									avatarSrc="https://github.com/sindre-gangeskar/shadps4-alchemist/blob/main/public/assets/images/shadps4-alchemist-icon.png?raw=true"
									headerTitle="shadPS4 "
									title="Alchemist"
									subtitle="Full-stack Application (in development)">
									<Stack {...chipStackStyle}>
										<Chip variant="outlined" color="primary">
											JavaScript
										</Chip>
										<Chip variant="outlined" color="primary">
											Electron
										</Chip>
										<Chip variant="outlined" color="primary">
											React
										</Chip>
									</Stack>
									<Stack direction={"column"} textAlign={"start"} width={"80%"} mx={"40px"} margin={"start"} display={"grid"} gap={0}>
										<Typography level="body-sm">
											An application still in development that utilizes{" "}
											<ColoredTypography bold={true} level="body-sm">
												Electron
											</ColoredTypography>{" "}
											with{" "}
											<ColoredTypography bold={true} level="body-sm">
												React
											</ColoredTypography>{" "}
											to create an elegant desktop application. A games launcher and a mod manager for the{" "}
											<ColoredTypography level="body-sm" isLink={true} bold={true} href="https://github.com/shadps4-emu/shadPS4">
												shadPS4
											</ColoredTypography>{" "}
											emulator, utilizing hardlinks to modify game files in a non-destructive way.
										</Typography>
									</Stack>
								</CustomAccordion>
							</AccordionGroup>
						</ListItem>
						<ListItem>
							<AccordionGroup variant="plain" transition={"250ms"} sx={{ width: "100%" }}>
								<CustomAccordion color="danger" headerTitle="Steam  " title="Backlogify" subtitle="Full-stack Application">
									<Stack {...chipStackStyle}>
										<Chip variant="outlined" color="primary">
											Express.js
										</Chip>
										<Chip variant="outlined" color="primary">
											Vite
										</Chip>
										<Chip variant="outlined" color="primary">
											React
										</Chip>
										<Chip variant="outlined" color="primary">
											MongoDB
										</Chip>
										<Chip variant="outlined" color="primary">
											SteamAPI
										</Chip>
									</Stack>
									<Stack direction={"column"} textAlign={"start"} width={"80%"} mx={"40px"} margin={"start"} display={"grid"} gap={0}>
										<Typography level="body-sm">
											A full-stack application that utilizes{" "}
											<ColoredTypography bold={true} level="body-sm">
												Express.js
											</ColoredTypography>{" "}
											with{" "}
											<ColoredTypography bold={true} level="body-sm">
												Vite + React
											</ColoredTypography>{" "}
											to create an elegant games library front-end with{" "}
											<ColoredTypography level="body-sm" bold={true}>
												MongoDB
											</ColoredTypography>{" "}
											{`to store games to the current user's backlog.`}
										</Typography>
									</Stack>
								</CustomAccordion>
							</AccordionGroup>
						</ListItem>
					</List>
				</Card>
			</Stack>
		</Stack>
	);
}
