"use client";
import { Stack, Button } from "@mui/joy";
import { usePathname } from "next/navigation";
import { HouseRounded, Person2Rounded, Folder, ArticleRounded,  } from "@mui/icons-material";
import NextLink from "next/link";
import ThemeToggler from "../theme/ThemeToggler";
import { AiFillExperiment } from "react-icons/ai";

import { NavigationProps } from "@/lib/definitions";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
	const locations: NavigationProps[] = [
		{ href: "/", name: "Home", icon: <HouseRounded /> },
		{ href: "/resume", name: "Resumé", icon: <ArticleRounded/>},
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
					width: "90%",
					p: 0,
					mx: "auto",
					maxWidth: "lg",
					position: "sticky",
					top: 0,
					backdropFilter: "blur(6px)",
					zIndex: 1500,
					justifyContent: "space-between",
					borderRadius: "1.5rem",
					overflow: "hidden",
					mt: 2,
					display: { xs: "none", md: "flex" },
					"&::after": {
						content: '""',
						display: "block",
						position: "absolute",
						minWidth: "100%",
						width: "100%",
						borderRadius: "inherit",
						inset: 0,
						zIndex: -1,
						backgroundColor: theme.palette.neutral.softBg,
						opacity: 0.4,
					},
				})}>
				<Stack direction={"row"}>
					{locations.map(item => (
						<Button
							color={currentPath === item.href ? "primary" : "neutral"}
							variant="plain"
							key={item.name}
							startDecorator={item.icon}
							component={NextLink}
							href={item.href}
							sx={{ textOverflow: "ellipsis", overflow: "hidden" }}>
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
