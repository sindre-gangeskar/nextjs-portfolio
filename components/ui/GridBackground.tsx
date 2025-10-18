"use client";
import { Stack } from "@mui/joy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default function GridBackground({ gridSize = 25, thickness = 1, style = "circle" }: { gridSize: number; thickness?: number; style?: "circle" | "ellipse" }) {
	useGSAP(() => {
		if(typeof window !== "undefined") gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
		gsap.set("#profile-grid", { opacity: 0, y: -300 });
		gsap.to("#profile-grid", { duration: 1.5, delay: 0.2, ease: "power3.out", opacity: 0.4 });
		gsap.to("#profile-grid", { y: 0, scrollTrigger: { trigger: "#profile-grid", start: "top bottom", end: "bottom top", scrub: true } });
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
				filter: 'blur(0.8px)',
				zIndex: -1,
				background: `linear-gradient(to right, ${theme.vars.palette.neutral.outlinedColor}, transparent ${thickness}px), linear-gradient(to top, ${theme.vars.palette.neutral.outlinedColor}, transparent ${thickness}px)`,
				backgroundSize: `${gridSize}px ${gridSize}px`,
				backgroundRepeat: "repeat",
				maskImage: `radial-gradient(${style}, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)`,
				WebkitMaskImage: `radial-gradient(${style}, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)`,
			})}></Stack>
	);
}
