"use client";
import { Card, Typography, Button, Box, CardActions, CardContent, CardOverflow, Stack, AspectRatio, Chip } from "@mui/joy";
import { GitHub, StarRounded } from "@mui/icons-material";
import { FaGlobe } from "react-icons/fa6";
import { ProjectCardProps } from "@/lib/definitions";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import Image from "next/image";
import gsap from "gsap";
export default function ProjectCard({ title = "Placeholder title", description = "Placeholder description", stars, url, color = "neutral", isRepo = false, homepage, img, topics }: ProjectCardProps) {
	const [thumbnailVisible, setThumbnailVisible] = useState(false);
	const thumbnailId = title.replaceAll(" ", "-") + "-preview";
	useGSAP(() => {
		if (!img) return;
		if (thumbnailVisible) {
			gsap.to(`#${thumbnailId}`, { opacity: 0.7, ease: "power5.out", duration: 0.4, filter: "blur(0px)" });
			gsap.to(`#${thumbnailId}`, { display: "" });
		} else gsap.to(`#${thumbnailId}`, { opacity: 0.4, ease: "power5.out", duration: 0.4, filter: "" });
	}, [thumbnailVisible]);

	const toggleThumbnailVisibility = () => {
		setThumbnailVisible(prev => !prev);
	};
	return (
		<Stack direction={"column"} sx={{ height: "fit-content", position: "relative" }}>
			<Card
				variant="outlined"
				color={color}
				onMouseEnter={toggleThumbnailVisibility}
				onMouseLeave={toggleThumbnailVisibility}
				sx={{
					position: "relative",
					textAlign: "start",
					width: 350,
					height: 425,
					transition: "250ms ease",
					zIndex: 1,
					"&:hover": {
						backgroundColor: `${color}.softBg`,
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
				{img && (
					<CardOverflow sx={{ top: 0, left: 0, p: 0, overflow: "hidden", pointerEvents: "none" }}>
						<AspectRatio ratio={1.8}>
							<Image id={`${thumbnailId}`} loading="lazy" src={img} width={250} height={250} alt={title}></Image>
						</AspectRatio>
					</CardOverflow>
				)}
				<CardContent sx={{ height: "100%", position: "relative", display: "flex", justifyContent: "space-between" }}>
					<Box component={"span"} sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography startDecorator={<GitHub />} level="title-sm" sx={{ textTransform: "capitalize" }}>
							{title}
						</Typography>
						<Typography color={stars && stars > 0 ? "warning" : "neutral"} level="title-sm" py={1} sx={{ display: "inline-flex", flexDirection: "row", gap: 0, p: 0 }} startDecorator={<StarRounded />}>
							{stars}
						</Typography>
					</Box>
					<Typography level="body-sm" sx={{ textOverflow: "ellipsis", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", p: 0 }}>
						{description}
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "row", gap: 0.3, flexFlow: "row", flexWrap: "wrap" }}>
						{topics &&
							topics.map(t => (
								<Chip size="sm" key={t} slotProps={{ label: { id: t } }}>
									{t}
								</Chip>
							))}
					</Box>
					<CardActions>
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
					</CardActions>
				</CardContent>
			</Card>
		</Stack>
	);
}
