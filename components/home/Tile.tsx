import { Card, Typography, Stack, Button, Box } from "@mui/joy";
import { GitHub, StarRounded } from "@mui/icons-material";
import { FaGlobe } from "react-icons/fa6";
export default function Tile({
	title = "Placeholder title",
	description = "Placeholder description",
	stars,
	url,
	color = "neutral",
	isRepo = false,
	homepage,
}: {
	title?: string;
	description?: string;
	footer?: string;
	url?: string;
	isRepo?: boolean;
	stars?: number;
	homepage?: string;
	color: "primary" | "danger" | "warning" | "neutral";
}) {
	return (
		<Card
			variant="outlined"
			color={color}
			sx={{
				position: "relative",
				textAlign: "start",
				width: { xs: "100%", md: 350 },
				height: { xs: "100%", md: 175 },
				minHeight: { xs: "fit-content" },
				transition: "250ms ease",
				borderRadius: "1.25rem",
				zIndex: 1,
				"&:hover": {
					backgroundColor: `${color}.softBg`,
					borderColor: `${color}.solidBg`,
					transform: "translateY(-6px)",
					transition: "150ms ease",
				},
				"&::after": {
					content: '""',
					inset: 0,
					position: "absolute",
					transition: "125ms linear",
					borderRadius: "inherit",
					zIndex: -1,
					borderBottom: 0,
					borderColor: `${color}.solidBg`,
				},

				"&:hover::after": {
					transform: "translateY(6px)",
					transition: "125ms linear",
					borderBottom: 10,
					borderColor: `${color}.solidBg`,
				},
			}}>
			<Stack direction={"column"} sx={{ height: "100%", position: "relative", display: "flex", justifyContent: "space-between" }}>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography startDecorator={<GitHub />} level="title-lg" sx={{ textTransform: "capitalize" }}>
						{title}
					</Typography>
					<Typography color={stars && stars > 0 ? 'warning' : 'neutral'} level="title-sm" py={1} sx={{ display: "inline-flex", flexDirection: "row", gap: 0, p: 0 }} startDecorator={<StarRounded />}>
						{stars}
					</Typography>
				</Box>
				<Typography level="body-sm">{description}</Typography>
				<Stack direction={"row"}>
					{homepage && (
						<Button variant="solid" color="primary" component="a" href={homepage} target="_blank" endDecorator={<FaGlobe />}>
							Visit Homepage
						</Button>
					)}
					{isRepo && (
						<Button variant="soft" color="neutral" component={"a"} href={url} target={"_blank"} sx={{ maxWidth: "max-content", ml: "auto" }} endDecorator={<GitHub />}>
							Repository
						</Button>
					)}
				</Stack>
			</Stack>
		</Card>
	);
}
