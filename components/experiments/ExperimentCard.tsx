"use client";
import { Card, CardContent, CardCover, Typography } from "@mui/joy";
import { ColorPaletteProp, SxProps } from "@mui/joy/styles/types";
import Link from "next/link";
import { AiFillExperiment } from "react-icons/ai";
export default function ExperimentCard({ title, description, href, color = "neutral" }: { title: string; description?: string; href: string; color?: ColorPaletteProp }) {
	const sx: SxProps = theme => ({
		position: "relative",
		height: { xs: "100px", md: "175px" },
		width: { xs: "100%", md: "350px" },
		borderRadius: "1.25rem",
		transition: "250ms ease",
		zIndex: 1,
		"&:hover": {
			transform: "translateY(-6px)",
			backgroundColor: `${theme.palette[color].softBg}`,
		},
		"&::after": {
			content: '""',
			inset: 0,
			position: "absolute",
			borderRadius: "inherit",
			border: 0,
			zIndex: 2,
			transition: "125ms linear",
			borderColor: `${theme.palette[color].solidBg} !important`,
		},
		"&:hover::after": {
			transform: "translateY(6px)",
			borderBottom: 10,
		},
	});

	return (
		<Card variant="outlined" color={color} component={Link} href={href} sx={sx}>
			<CardCover sx={{ opacity: 0.1 }}>
				<AiFillExperiment />
			</CardCover>
			<CardContent>
				<Typography level="title-lg">{title}</Typography>
				<Typography level="title-sm">{description}</Typography>
			</CardContent>
		</Card>
	);
}
