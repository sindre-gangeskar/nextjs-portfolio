"use client";

import { useGSAP } from "@gsap/react";
import { Box, Button } from "@mui/joy";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { TiArrowUp } from "react-icons/ti";

export default function BackToTopButton() {
	const [ visible, setVisible ] = useState(false);
	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const onScroll = async () => {
			const scrollPercent = Math.min(
				(window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
				100,
				100,
			);
			if (scrollPercent > 30) {
				requestAnimationFrame(() => {
					setVisible(true);
				});
			} else
				requestAnimationFrame(() => {
					setVisible(false);
				});
		};

		window.addEventListener("scroll", onScroll);
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useGSAP(() => {
		if (visible)
			gsap.to("#scrollTopBtn", {
				scale: 1,
				opacity: 1,
				ease: "elastic.inOut",
				duration: 1.2,
				pointerEvents: "auto",
			});
		else
			gsap.to("#scrollTopBtn", {
				scale: 0,
				opacity: 0,
				ease: "elastic.inOut",
				duration: 1.2,
				pointerEvents: "none",
			});
	}, [ visible ]);

	return (
		<Box
			sx={{
				position: "fixed",
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 10,
				pointerEvents: "none",
				containerType: "inline-size",
			}}
		>
			<Box sx={{ position: "relative", maxWidth: "lg", mx: "auto" }}>
				<Button
					id={"scrollTopBtn"}
					onClick={handleScrollToTop}
					sx={{
						m: 2,
						scale: 0,
						opacity: 0,
						pointerEvents: "none",
						position: "absolute",
						bottom: 0,
						right: { xs: 0, lg: "-2%" },
						translate: (theme) =>
							`max(0px, min(calc(100% + ${theme.spacing(2)}), calc((100cqw - ${theme.breakpoints.values.lg}px) / 2))) 0`,
					}}
				>
					<TiArrowUp size={25} />
				</Button>
			</Box>
		</Box>
	);
}
