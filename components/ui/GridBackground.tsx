"use client";
import { Stack } from "@mui/joy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
export default function GridBackground({ gridSize = 25, thickness = 1, style = "circle" }: { gridSize: number; thickness?: number; style?: "circle" | "ellipse" }) {
	useGSAP(() => {
		gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
		gsap.set("#profile-grid", { opacity: 0.3 });
		gsap.to("#profile-grid", { y: -600, scrollTrigger: { trigger: document.documentElement, start: "0 0", end: "+=2000%", scrub: 2 }});
	}, []);

	return (
		<Stack
			id={"profile-grid"}
			sx={theme => ({
				width: `1500px`,
				height: `1500px`,
				m: 0,
				left: "50%",
				top: "50%",
				transform: "translate(-50%, -50%)",
				position: "fixed",
				overflow: "hidden",
				zIndex: -1,
				background: `linear-gradient(to right, ${theme.vars.palette.neutral.outlinedColor}, transparent ${thickness}px), linear-gradient(to top, ${theme.vars.palette.neutral.outlinedColor}, transparent ${thickness}px)`,
				backgroundSize: `${gridSize}px ${gridSize}px`,
				backgroundRepeat: "repeat",
				maskImage: `radial-gradient(${style}, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)`,
				WebkitMaskImage: `radial-gradient(${style}, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)`,
			})}></Stack>
	);
}
