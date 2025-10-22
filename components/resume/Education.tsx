import { Stack, Typography, List, ListItem, AccordionGroup, Chip } from "@mui/joy";
import ColoredTypography from "@/components/ui/ColoredTypography";
import CustomAccordion from "@/components/ui/CustomAccordion";


export default function Education({style}: {[key: string]: {}}) {
  return 	<Stack sx={{ mt: 5 }}>
					<Typography level="h1">
						Formal&nbsp;
						<ColoredTypography level="h1" color="danger">
							Education
						</ColoredTypography>
					</Typography>
					<List>
						<ListItem component={"li"}>
							<AccordionGroup transition={"300ms"}>
								<CustomAccordion
									color="danger"
									headerTitle="Noroff - "
									title="School of Technology & Digital Media"
						subtitle="Back-end Development 1 [2023-2025]"
						grade="A"
									avatarSrc="https://support.noroff.no/hc/theming_assets/01HZPPTZGC4N8F8NSPBQHJT16E">
									<Stack direction={"column"} textAlign={"start"} width={"80%"} mx={"40px"} margin={"start"} display={"grid"} gap={0}>
										<Stack {...style}>
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
					</List>
				</Stack>
}