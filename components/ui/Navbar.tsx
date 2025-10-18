"use client";
import { Stack, Button } from "@mui/joy";
import { usePathname } from "next/navigation";
import { HouseRounded, Person2Rounded, Folder, ArticleRounded } from "@mui/icons-material";
import NextLink from "next/link";
import ThemeToggler from "../theme/ThemeToggler";
import { AiFillExperiment } from "react-icons/ai";

import { NavigationProps } from "@/lib/definitions";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
	const locations: NavigationProps[] = [
		{ href: "/", name: "Home", icon: <HouseRounded /> },
		{ href: "/resume", name: "Resumé", icon: <ArticleRounded /> },
		{ href: "/my-story", name: "My Story", icon: <Person2Rounded /> },
		{ href: "/projects", name: "Projects", icon: <Folder /> },
		{ href: "/experiments", name: "Experiments", icon: <AiFillExperiment /> },
	];
	const currentPath = usePathname();
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
					top: 10,
					overflow: "hidden",
					mb: 2,
					mx: "auto",
					backdropFilter: "blur(6px)",
					zIndex: 1500,
					justifyContent: "space-between",
					borderRadius: "1.5rem",
					display: { xs: "none", md: "flex" },
					"&::before": {
						content: '""',
						display: "block",
						position: "absolute",
						inset: 0,
						width: "100%",
						zIndex: 1,
						opacity: 0.6,
						outline: `1px solid ${theme.palette.neutral[200]}`,
						pointerEvents: "none",
					},
					"&::after": {
						content: '""',
						position: "absolute",
						inset: 0,
						opacity: 0.4, 
						zIndex: -1,
						backgroundColor: theme.palette.neutral.softBg,
					},
				})}>
				<Stack direction={"row"} gap={1}>
					{locations.map(item => (
						<Button
							color={currentPath === item.href ? "primary" : "neutral"}
							variant={currentPath === item.href ? "solid" : "plain"}
							key={item.name}
							startDecorator={item.icon}
							component={NextLink}
							href={item.href}
							sx={{ textOverflow: "ellipsis", overflow: "hidden", borderRadius: "1.5rem" }}>
							{item.name}
						</Button>
					))}
				</Stack>
				<ThemeToggler />
			</Stack>
			<MobileNavbar locations={locations} currentPath={currentPath} />
		</>
	);
}
