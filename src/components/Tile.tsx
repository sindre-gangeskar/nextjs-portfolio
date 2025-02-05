import { Card, Typography, Stack, Button, Link } from "@mui/joy";
import { StarOutline, Code } from "@mui/icons-material";
export default function Tile({
	title = "Placeholder title",
	description = "Placeholder description",
	footer = "Placeholder footer",
	stars,
	url,
	color = "neutral",
	isRepo = false,
}: {
	title?: string;
	description?: string;
	footer?: string;
	url?: string;
	isRepo?: boolean;
	stars?: number;
	color: "primary" | "danger" | "warning" | "neutral";
}) {
	return (
		<Card
			variant="outlined"
			color="neutral"
			sx={{
				position: "relative",
				textAlign: "start",
				width: 350,
				height: 200,
				transition: "250ms ease",
				borderRadius: "0.25rem",
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
			<Stack direction={"column"} sx={{ height: "100%", position: "relative" }}>
				<Typography level="h4" sx={{ textTransform: "capitalize" }}>
					{title}
				</Typography>
				<Typography>{description}</Typography>
				{isRepo ? (
					<Stack direction={"row"} position={"absolute"} bottom={0} sx={{ width: "100%" }}>
						<Typography display={"inline-flex"} sx={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
							<Typography level="body-sm" sx={{ display: "inline-flex", flexDirection: "row" }}>
								<StarOutline /> {stars}
							</Typography>
							<Typography level="body-sm" px={1} gap={1} sx={{ display: "inline-flex", flexDirection: "row", alignItems: "center" }}>
								Repository{" "}
								<Link p={1} px={2} variant="soft" borderRadius={"0.5rem"} href={url} target="_blank">
									<Code />
								</Link>
							</Typography>
						</Typography>
					</Stack>
				) : (
					""
				)}
			</Stack>
		</Card>
	);
}
