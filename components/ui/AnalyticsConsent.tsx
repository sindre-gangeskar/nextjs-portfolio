"use client";

import { Button, Card, CardActions, CardContent, Divider, Stack, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useAnalytics from "@/hooks/useAnalytics";
import { getConsentCookie, setAnalyticsCookie } from "@/lib/utils";

export default function AnalyticsConsent() {
	const [mounted, setIsMounted] = useState<boolean>(false);
	const [hasCookie, setHasCookie] = useState<boolean>(false);
	const { setAllowAnalytics } = useAnalytics();

	const allowAnalytics = () => {
		setAllowAnalytics("true");
		setAnalyticsCookie("true");
		setHasCookie(true);
		console.log(window.gtag);
		window.gtag("consent", "update", {
			analytics_storage: "granted",
		});
	};

	const disallowAnalytics = () => {
		setAllowAnalytics("false");
		setAnalyticsCookie("false");
		setHasCookie(true);

		console.log(window.gtag);
		window.gtag("consent", "update", {
			analytics_storage: "denied",
		});
		console.log(window.gtag);
	};

	useEffect(() => {
		setIsMounted(true);
		const cookie = getConsentCookie();
		if (!cookie) return;
		setHasCookie(true);
	}, []);

	useGSAP(() => {
		if (!mounted) return;
		requestAnimationFrame(() => {
			gsap.to("#consent-card", { opacity: 1, duration: 0.3, ease: "power3.out", pointerEvents: "auto", filter: "blur(0px)" });
		});
	}, [mounted]);
	return !mounted || hasCookie ? null : (
			<Card
				id={"consent-card"}
				variant="outlined"
				color="neutral"
				sx={theme => ({
					boxShadow: `0 0 25px ${theme.vars.palette.neutral.solidActiveBg}`,
					width: "100%",
					background: "none",
					maxWidth: { xs: "90%", md: "600px" },
					height: "max-content",
					position: "fixed",
					zIndex: 10,
					bottom: 0,
					my: 3,
					left: "50%",
					transform: "translateX(-50%)",
					opacity: 0,
					pointerEvents: "none",
					backdropFilter: "blur(18px)",
					filter: "blur(18px)",
					willChange: "opacity, filter",
					"&::before": {
						content: '""',
						display: "block",
						inset: 0,
						position: "absolute",
						left: 0,
						top: 0,
						width: "100%",
						height: "100%",
						backgroundColor: theme.vars.palette.background.body,
						opacity: 0.8,
						borderRadius: "inherit",
						zIndex: 0,
					},
				})}>
				<CardContent sx={{ "& > p": { lineHeight: "1.5rem" }, p: 1 }}>
					<Typography level="title-lg" zIndex={0}>
						Analytics Consent
					</Typography>
					<Typography level="body-md">To understand how many people visit my portfolio, I'd like to use basic analytics.</Typography>
					<Typography level="title-sm" color="warning">
						No personal data is tracked or stored.
					</Typography>
				</CardContent>
				<Divider />
				<CardActions sx={{ p: 0 }}>
					<Stack gap={1} direction={"row"}>
						<Button color="primary" onClick={allowAnalytics}>
							Allow analytics
						</Button>
						<Button color="danger" onClick={disallowAnalytics}>
							No analytics
						</Button>
					</Stack>
				</CardActions>
			</Card>
		);
}
