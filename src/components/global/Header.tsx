import { Box, Typography } from "@mui/joy";

export default function Header({
	preColorText,
	coloredText,
	color = "primary",
	level = "h1",
}: {
	preColorText?: string;
	coloredText: string;
	color: "primary" | "danger" | "success" | "neutral";
	level: "h1" | "h2" | "h3" | "h4" | "body-sm" | "body-md" | "body-lg";
}) {
	return (
		<Box component="span" sx={{ alignItems: "center", position: "relative" }}>
			<Typography level={level} component="span" sx={{ display: "inline" }}>
				{preColorText}
			</Typography>
			<Typography level={level} component="span" sx={{ display: "inline" }}>
				{" "}
			</Typography>
			<Typography
				level={level}
				component="span"
				sx={{
					backgroundColor: `${color}.solidBg`,
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					display: "inline",
				}}>
				{coloredText}
			</Typography>
		</Box>
	);
}
