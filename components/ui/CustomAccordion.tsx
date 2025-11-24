import { Accordion, AccordionSummary, AccordionDetails, Avatar, ListDivider, Stack, Typography, Chip } from "@mui/joy";
import ColoredTypography from "./ColoredTypography";
import { AccordionProps } from "@/lib/definitions";

export default function CustomAccordion({ children, avatarSrc, headerTitle, title, subtitle, color, grade }: AccordionProps) {
	return (
		<Accordion variant="soft" sx={theme => ({ width: "100%", position: "relative", borderRadius: "0.50rem", overflow: "hidden", p: 0, boxShadow: `0px 0px 7px ${theme.palette.neutral.softBg}` })}>
			<AccordionSummary sx={{ display: "flex", mx: "auto", width: "100%", justifyContent: "space-between" }}>
				<Stack direction={{ xs: "column", md: "row" }} sx={{ alignItems: "center", alignContent: "center", width: "100%", textAlign: { xs: "start", md: "initial" }, gap: { xs: 0, md: 2 } }}>
					<Avatar src={avatarSrc} sx={{ opacity: avatarSrc ? 1 : 0, display: { xs: "none", md: "block" } }}></Avatar>
					<ListDivider orientation="vertical" />
					<Typography level="title-md" sx={{ alignContent: "center", textAlign: "start", marginRight: "auto" }}>
						{headerTitle}
						<ColoredTypography color={color} level="body-md">
							{title}
						</ColoredTypography>
					</Typography>
					<Typography level="body-sm" sx={{ width: { xs: "100%", md: "initial" }, textAlign: { xs: "start" } }}>
						{subtitle}
					</Typography>
					<Stack>
						{grade && (
							<Chip variant="outlined" color="primary" sx={{ my: { xs: 1, md: 0 } }}>
								<Typography level="title-sm" sx={{ mx: "auto", color: "inherit" }}>
									Grade: {grade}
								</Typography>
							</Chip>
						)}
					</Stack>
				</Stack>
			</AccordionSummary>
			<AccordionDetails>
				<Stack direction={"column"} width={"100%"} sx={{ p: 3 }}>
					{children}
				</Stack>
			</AccordionDetails>
		</Accordion>
	);
}
