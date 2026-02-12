"use client";
import { Box } from "@mui/joy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { getBackgroundColor } from "@/lib/utils";

export default function GridBackground({ gridSize = 25, thickness = 1, style = "circle" }: { gridSize: number; thickness?: number; style?: "circle" | "ellipse" }) {
	const pathname = usePathname();
	useGSAP(() => {
		let cancelled = false;
		(async () => {
			const [{ default: ScrollTrigger }, { default: ScrollToPlugin }] = await Promise.all([import("gsap/ScrollTrigger"), import("gsap/ScrollToPlugin")]);
			if (cancelled) return;

			gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
			requestAnimationFrame(() => {
				gsap.to("#grid", { y: -600, scrollTrigger: { trigger: document.documentElement, start: "0 0", end: "+=2000%", scrub: 2 } });
			});
		})();

		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<Box
			id={"grid"}
			sx={theme => ({
				width: `1500px`,
				height: `100vh`,
				transform: "translate(-50%, -50%)",
				left: "50%",
				top: "50%",
				position: "fixed",
				zIndex: 0,
				overflow: "hidden",
				pointerEvents: "none",
				background: `linear-gradient(to right, ${theme.vars.palette.neutral.outlinedColor}, transparent ${thickness}px), linear-gradient(to top, ${theme.vars.palette.neutral.outlinedColor}, transparent ${thickness}px)`,
				backgroundSize: `${gridSize}px ${gridSize}px`,
				backgroundRepeat: "repeat",
				maskImage: `radial-gradient(${style}, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)`,
				WebkitMaskImage: `radial-gradient(${style}, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)`,
				"&::before": {
					content: '""',
					display: "block",
					inset: 0,
					overflow: "hidden",
					width: "100%",
					height: "100%",
					position: "absolute",
					transition: "850ms ease",
					zIndex: -1,
					maskRepeat: "repeat",
					maskSize: `${gridSize}px ${gridSize}px`,
					maskImage: `
						linear-gradient(to right, white, transparent ${thickness}px), 
						linear-gradient(to top, white transparent ${thickness}px)`,
					WebkitMaskImage: `
						linear-gradient(to right, white, transparent ${thickness}px), 
						linear-gradient(to top, white, transparent ${thickness}px)`,
					background: getBackgroundColor(pathname, theme).solidBg,
					mixBlendMode: "saturate",
				},
			})}></Box>
	);
}
