"use client";
import {
	Box,
	Card,
	Stack,
	Tooltip,
	Typography,
	type ColorPaletteProp,
} from "@mui/joy";
import type React from "react";
import { useState } from "react";
import type { IconType } from "react-icons";

export type SkillProps = {
	color?: ColorPaletteProp;
	icon: IconType;
	id?: string;
	title?: string;
	url?: string;
	description?: string;
	placement?: TooltipPlacementType;
	className?: string;
}

type TooltipPlacementType = React.ComponentProps<typeof Tooltip>[ "placement" ];
export default function Skill({
	color = "neutral",
	icon,
	id,
	title = "Placeholder title",
	description = "Placeholder description",
	url,
	placement = "bottom",
	className,
}: SkillProps
) {
	const [ hovered, setIsHovered ] = useState(false);
	return (
		<Stack
			sx={{
				maxWidth: 'min-content', textAlign: "center", overflow: 'hidden'
			}}
		>
			<Tooltip
				className={className}
				title={
					<Stack
						component={"div"}
						direction={"column"}
						p={1}
						gap={2}
						sx={{ maxWidth: "200px", textAlign: "center" }}
					>
						<Stack component={"span"}>
							<Typography
								color={color}
								level="title-md"
								sx={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "row",
									width: "100%",
									px: 1,
									alignItems: "center",
								}}
							>
								{title}
							</Typography>
							<Box
								sx={{ width: "50%", height: "4rem", m: "auto" }}
								component={icon}
							></Box>
						</Stack>
						<Stack sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
							<Typography color={color} level="body-md">
								{description}
							</Typography>
							<Typography
								color={color}
								level="body-xs"
								sx={{ fontWeight: "bold" }}
							>
								{url}
							</Typography>
						</Stack>
					</Stack>
				}
				arrow={true}
				disablePortal
				placement={placement}
				variant="outlined"
				sx={{ pointerEvents: "none" }}
				color={color}
			>
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
					sx={{
						p: 1,
						gap: 0.75,
						width: { xs: "76px", md: "92px" },
						transition: "250ms ease",
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						wordBreak: 'break-word',
						aspectRatio: 1,
						'&:hover': { cursor: "pointer" }
					}}
					color={color}
					variant={hovered ? "solid" : "soft"}
				>
					<Box
						sx={{ width: { xs: "28px", md: "2.8rem" }, height: { xs: "28px", md: "2.8rem" }, alignSelf: 'center' }}
						component={icon}
					></Box>
				</Card>
			</Tooltip>
			<Typography level="title-sm" color={color} sx={{ my: 2, textAlign: 'center', fontWeight: 'bold', textWrap: 'wrap', lineHeight: 1, wordBreak: 'break-word', textOverflow: 'ellipsis' }}>{title}</Typography>
			|		</Stack>
	);
}
