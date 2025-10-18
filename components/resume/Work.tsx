import { Stack, Typography, List, ListItem, AccordionGroup, Chip } from "@mui/joy";
import ColoredTypography from "@/components/ui/ColoredTypography";
import CustomAccordion from "@/components/ui/CustomAccordion";

export default function Work({ style }: { [key: string]: {} }) {
	return (
		<Stack sx={{mt: 5}}>
			<Typography level="h1">
				Work
				<ColoredTypography color="danger" level="h1">
					{" "}
					Experience
				</ColoredTypography>
			</Typography>
			<List>
				<ListItem component={"li"} sx={{ width: "100%" }}>
					<AccordionGroup variant="soft" transition={"300ms"}>
						<CustomAccordion color="danger" headerTitle="Hugo." title="Tech AS" subtitle="Full-stack Application (Freelance, January 2025)">
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
	);
}
