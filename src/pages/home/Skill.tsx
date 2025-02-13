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
}: {
	color: ColorPaletteProp;
	icon: IconType;
	id?: string;
	title?: string;
	url?: string;
	description?: string;
	placement?: TooltipPlacementType;
}) {
	const [hovered, setIsHovered] = useState(false);

	return (
		<Tooltip
			title={
				<Box sx={{ p: 1, maxWidth: '200px' }}>
					<Stack direction={"row"} p={1} gap={2}>
						<Typography component={url ? "a" : "p"} href={url} target="_blank" level="body-md" fontWeight={'bold'} mr="auto" sx={{textDecorationLine: url ? 'underline' : 'none'}}>
							{title}
						</Typography>
						<Box component={icon} size={25}></Box>
					</Stack>
					<Stack>{description}</Stack>
				</Box>
			}
			arrow={true}
			placement={placement}
			variant="outlined"
			color={color}
			sx={{ transition: "opacity 250ms ease" }}>
			<Card
				onMouseEnter={() => {
					setIsHovered(true);
				}}
				onMouseLeave={() => {
					setIsHovered(false);
				}}
				id={id}
				component={icon}
				sx={{ p: 1.2, minHeight: { xs: "50px", md: "100px" }, width: "fit-content", aspectRatio: 1 / 1, transition: "color, background-color 250ms ease" }}
				color={color}
				variant={hovered ? "solid" : "outlined"}></Card>
		</Tooltip>
	);
}
