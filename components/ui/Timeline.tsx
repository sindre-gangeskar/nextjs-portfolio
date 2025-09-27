"use client";
import { Box } from "@mui/joy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Timeline({ children }: { children: React.ReactNode }) {
	useGSAP(() => {
		const timeline = gsap.timeline();
		timeline.set("#timeline > li", { opacity: 0, y: 50, filter: "blur(16px)" });
		timeline.to("#timeline > li", { opacity: 1, y: 0, ease: "power4.out", duration: 0.8, stagger: 0.125, filter: "blur(0px)" });
	}, []);

	return (
	<Box
		component={"ul"}
		id="timeline"
		sx={theme => ({
			position: "relative",
			display: "grid",
			gridTemplateColumns: "1fr 6px 1fr",
			gridColumn: "1 / -1",
			height: "100%",
			width: "100%",
			my: 10,
			px: { xs: 0, lg: 10 },
			gap: { xs: 10, lg: 5 },
			py: 0,
			mx: "auto",
			"&::before": {
				content: '""',
				display: "block",
				inset: 0,
				position: "absolute",
				width: "6px",
				mx: "auto",
				borderRadius: "1.5rem",
				backgroundColor: theme.palette.primary.softBg,
				border: `2px solid ${theme.palette.primary.softHoverBg}`,
			},
		})}>
		{children}
	</Box>
);
}
