import { Accordion, AccordionSummary, AccordionDetails, Avatar, ListDivider, Stack, Typography, Chip } from "@mui/joy";
import ColoredTypography from "./ColoredTypography";
interface AccordionProps {
	children?: React.ReactNode;
	headerTitle: string | "";
	title: string | "";
	subtitle: string | "";
	avatarSrc?: string | "";
	grade?: string;
	color: "primary" | "danger" | "success" | "neutral";
}

export default function CustomAccordion({ children, avatarSrc, headerTitle, title, subtitle, color, grade }: AccordionProps) {
	return (
		<Accordion variant="soft" sx={{width: "100%", position: "relative", backdropFilter: 'blur(3px)', borderRadius: "0.50rem", p: 0, overflow: 'hidden' }}>
			<AccordionSummary sx={{ display: "flex", margin: "auto", width: "100%", justifyContent: "space-between" }}>
				<Stack direction={{ xs: "column", md: "row" }} sx={{ alignItems: "center", alignContent: "center", width: "100%", textAlign: { xs: "start", md: "initial" }, gap: { xs: 0, md: 2 } }}>
					<Avatar src={avatarSrc} sx={{ background: "transparent", opacity: avatarSrc ? 1 : 0, display: { xs: "none", md: "block" } }}></Avatar>
					<ListDivider orientation="vertical"></ListDivider>
					<Typography level="body-md" sx={{ alignContent: "center", textAlign: "start", marginRight: "auto" }}>
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
							<Chip variant="outlined" color="neutral" sx={{my: {xs: 2}}}>
								<Typography level="title-sm" sx={{ ml: "auto", color: 'inherit' }}>
									Grade: {grade}
								</Typography>
							</Chip>
						)}
					</Stack>
				</Stack>
			</AccordionSummary>
			<AccordionDetails>
				<Stack direction={"column"} textAlign={"start"} width={"100%"} mx={"0px"} margin={"start"} display={"grid"} gap={0}>
					{children}
				</Stack>
			</AccordionDetails>
		</Accordion>
	);
}
