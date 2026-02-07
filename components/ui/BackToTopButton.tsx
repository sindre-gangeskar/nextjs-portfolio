"use client";

import { Button, Container } from "@mui/joy";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TiArrowUp } from "react-icons/ti";

export default function BackToTopButton() {
	const [visible, setVisible] = useState(false);
	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const onScroll = async () => {
			const scrollPercent = Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100);
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
		if (visible) gsap.to("#scrollTopBtn", { scale: 1, opacity: 1, ease: "elastic.inOut", duration: 1.2, pointerEvents: "auto" });
		else gsap.to("#scrollTopBtn", { scale: 0, opacity: 0, ease: "elastic.inOut", duration: 1.2, pointerEvents: "none" });
	}, [visible]);

	return (
		<Button id={"scrollTopBtn"} onClick={handleScrollToTop} sx={{ m: 2, scale: 0, opacity: 0, pointerEvents: "none", position: 'fixed', bottom: 0, zIndex: 10, right: 0 }}>
			<TiArrowUp size={25} />
		</Button>
);
}
