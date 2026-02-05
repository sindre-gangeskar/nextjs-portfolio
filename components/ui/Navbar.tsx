"use client";
import { Stack, Button, Box, useTheme } from "@mui/joy";
import { usePathname } from "next/navigation";

import { HouseRounded, Person2Rounded, Folder, ArticleRounded } from "@mui/icons-material";
import { AiFillExperiment } from "react-icons/ai";
import { useMediaQuery } from "@mui/material";
import { NavigationProps } from "@/lib/definitions";

import ThemeToggler from "../theme/ThemeToggler";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { createRef, useMemo, useRef } from "react";
import { getColor } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

export default function Navbar() {
	const theme = useTheme();
	const locations: NavigationProps[] = useMemo(
		() => [
			{ href: "/", name: "Home", icon: <HouseRounded />, ref: createRef() },
			{ href: "/resume", name: "Resumé", icon: <ArticleRounded />, ref: createRef() },
			{ href: "/my-story", name: "My Story", icon: <Person2Rounded />, ref: createRef() },
			{ href: "/projects", name: "Projects", icon: <Folder />, ref: createRef() },
			{ href: "/experiments", name: "Experiments", icon: <AiFillExperiment />, ref: createRef() },
		],
		[]
	);
	const underlineRef = useRef(null);
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
	const pathname = usePathname();

	useGSAP(() => {
		if (!isDesktop) return;

		const activeItem = locations.find(item => item.href === pathname);
		if (activeItem?.ref?.current) {
			const refWidth = activeItem.ref.current.offsetWidth / 2 + "px";
			const refLeft = activeItem.ref.current.offsetLeft + activeItem.ref.current.offsetWidth / 4 + "px";
			gsap.to("#underline", { width: refWidth, ease: "power4.inOut", duration: 1.1, left: refLeft });
		}
	}, [pathname, isDesktop]);

	return (
		<>
			<Stack
				component={"nav"}
				direction={"row"}
				sx={theme => ({
					width: "100%",
					p: 0,
					maxWidth: "md",
					position: "sticky",
					borderRadius: "1.5rem",
					top: 10,
					mb: 2,
					mx: "auto",
					backdropFilter: "blur(6px)",
					zIndex: 1500,
					justifyContent: "space-between",
					display: { xs: "none", md: "flex" },
					"&::after": {
						content: '""',
						position: "absolute",
						inset: 0,
						opacity: 0.4,
						zIndex: -1,
						backgroundColor: theme.vars.palette.neutral.softBg,
						borderRadius: "inherit",
					},
				})}>
				<Stack direction={"row"} gap={1}>
					{locations.map(item => (
						<Button
							key={item.name}
							ref={item.ref}
							color="neutral"
							variant="plain"
							startDecorator={item.icon}
							component={Link}
							href={item.href}
							sx={{ textOverflow: "ellipsis", overflow: "hidden", borderRadius: "1.5rem" }}>
							{item.name}
						</Button>
					))}
				</Stack>
				<ThemeToggler />
				<Box
					ref={underlineRef}
					id="underline"
					sx={theme => ({
						position: "absolute",
						height: "4px",
						transition: "background-color 250ms ease, outline 250ms ease",
						borderRadius: "1.5rem",
						backgroundColor: getColor(pathname, theme).solidBg,
						boxShadow: `0px 0px 8px ${getColor(pathname, theme).solidActiveBg}`,
						outline: `2px solid ${getColor(pathname, theme).softHoverBg}`,
						bottom: -6,
					})}></Box>
			</Stack>
			<MobileNavbar locations={locations} currentPath={pathname} />
		</>
	);
}
