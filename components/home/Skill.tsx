"use client"
import React, { useState } from "react";
import { Card, Tooltip, Box, Typography, Stack, ColorPaletteProp } from "@mui/joy";
import { IconType } from "react-icons";

type TooltipPlacementType = React.ComponentProps<typeof Tooltip>["placement"];
export default function Skill({
	color = "neutral",
	icon,
	id,
	title = "Placeholder title",
	description = "Placeholder description",
	url,
	placement = "bottom",
	className,
}: {
	color: ColorPaletteProp;
	icon: IconType;
	id?: string;
	title?: string;
	url?: string;
	description?: string;
	placement?: TooltipPlacementType;
	className?: string;
}) {
	const [hovered, setIsHovered] = useState(false);

	return (
		<Tooltip
			className={className}
			title={
				<Stack component={"div"} direction={"column"} p={1} gap={2} sx={{ maxWidth: "200px", textAlign: "center" }}>
					<Stack component={"span"}>
						<Typography color={color} level="body-md" fontWeight={"bold"} sx={{ display: "flex", justifyContent: "center", flexDirection: "row", width: "100%", px: 1, alignItems: "center" }}>
							{title}
						</Typography>
						<Box sx={{ width: "50%", height: "4rem", m: "auto" }} component={icon}></Box>
					</Stack>
					<Stack>{description}</Stack>
				</Stack>
			}
			arrow={true}
			placement={placement}
			variant="outlined"
			sx={{ pointerEvents: "none" }}
			color={color}>
			<Card
				onMouseEnter={() => {
					setIsHovered(true);
				}}
				onMouseLeave={() => {
					setIsHovered(false);
				}}
				id={id}
				component={"a"}
				href={url}
				target="_blank"
				sx={{ p: 1.2, minHeight: { xs: "50px", md: "75px" }, height: "fit-content", aspectRatio: 1 / 1, transition: "250ms ease" }}
				color={color}
				variant={hovered ? "solid" : "outlined"}>
				<Box sx={{ fontSize: "100%", width: "100%", height: "100%" }} component={icon}></Box>
			</Card>
		</Tooltip>
	);
}
