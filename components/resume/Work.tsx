import { Stack, Typography, List, ListItem, AccordionGroup, Chip, ChipProps } from "@mui/joy";
import ColoredTypography from "@/components/ui/ColoredTypography";
import CustomAccordion from "@/components/ui/CustomAccordion";

export default function Work({ style, chipVariants }: { [key: string]: {}; chipVariants: ChipProps }) {
	return (
	<Stack sx={{ mt: 5 }}>
		<Typography level="h1">
			Work
			<ColoredTypography color="danger" level="h1">
				{" "}
				Experience
			</ColoredTypography>
		</Typography>
		<List>
			<ListItem component={"li"} sx={{ width: "100%" }}>
				<AccordionGroup transition={"300ms"}>
					<CustomAccordion
						color="danger"
						headerTitle="Noroff - "
						title=" School of Technology & Digital Media"
						subtitle="Vocational Instructor (Temporary, Feb - Mar 2026)"
						avatarSrc="https://support.noroff.no/hc/theming_assets/01HZPPTZGC4N8F8NSPBQHJT16E">
						<Stack {...style}>
							<Chip {...chipVariants}>JavaScript</Chip>
							<Chip {...chipVariants}>Node.js</Chip>
							<Chip {...chipVariants}>Express.js</Chip>
							<Chip {...chipVariants}>MySQL</Chip>
							<Chip {...chipVariants}>Bootstrap</Chip>
							<Chip {...chipVariants}>EJS</Chip>
						</Stack>
						<Stack direction={"column"} textAlign={"start"} width={"80%"} mx={"40px"} margin={"start"} display={"grid"} gap={0}>
							<Typography level="body-sm" sx={{ lineHeight: "1.5rem" }}>
								Graded first-year course assignments for the{" "}
								<ColoredTypography level="body-sm" bold>
									Back-end Development programme
								</ColoredTypography>{" "}
								and produced{" "}
								<ColoredTypography level="body-sm" bold>
									instructional videos
								</ColoredTypography>{" "}
								to support the curriculum.
							</Typography>
							<br />
							<Typography level="body-sm">Assignments involved the use of Node.js, JavaScript, front-end technologies, and MySQL, including database relationships and third normal form (3NF).</Typography>
						</Stack>
					</CustomAccordion>
				</AccordionGroup>
			</ListItem>
			<ListItem component={"li"} sx={{ width: "100%" }}>
				<AccordionGroup transition={"300ms"}>
					<CustomAccordion color="danger" headerTitle="Hugo." title="Tech AS" subtitle="Full-stack Application (Freelance, January 2025)">
						<Stack {...style}>
							<Chip {...chipVariants}>JavaScript</Chip>
							<Chip {...chipVariants}>Node.js</Chip>
							<Chip {...chipVariants}>Express.js</Chip>
							<Chip {...chipVariants}>MySQL</Chip>
							<Chip {...chipVariants}>MongoDB</Chip>
							<Chip {...chipVariants}>Bootstrap</Chip>
							<Chip {...chipVariants}>EJS</Chip>
						</Stack>
						<Stack direction={"column"} textAlign={"start"} width={"80%"} mx={"40px"} margin={"start"} display={"grid"} gap={0}>
							<Typography level="body-sm" sx={{ lineHeight: "1.5rem" }}>
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
