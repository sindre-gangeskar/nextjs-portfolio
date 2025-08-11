"use client";
import { Stack, Button, useColorScheme } from "@mui/joy";
import { usePathname } from "next/navigation";
import { HouseRounded, Person2Rounded, Folder } from "@mui/icons-material";

import NextLink from "next/link";
import ThemeToggler from "../theme/ThemeToggler";
export default function Navbar() {
	const { mode } = useColorScheme();
	const locations: { href: string; name: string; icon?: React.ReactNode }[] = [
		{ href: "/", name: "Home", icon: <HouseRounded /> },
		{ href: "/resume", name: "Resumé", icon: <Person2Rounded /> },
		{ href: "/projects", name: "Projects", icon: <Folder /> },
	];
	const currentPath = usePathname();
	return (
		<Stack
			component={"nav"}
			direction={"row"}
			sx={{ width: "100%", maxWidth: "lg", mx: "auto", position: "sticky", top: 0, py: 2, backdropFilter: "blur(4px)", zIndex: 1500, justifyContent: "space-between", px: 3 }}>
			<Stack
				component={"span"}
				direction={"row"}
				sx={theme => ({ backgroundColor: mode === "dark" ? theme.palette.neutral[800] : theme.palette.neutral[100], borderRadius: "1.5rem", overflow: "hidden", display: "flex", justifyContent: "center" })}>
				{locations.map(item => (
					<Button sx={{ borderRadius: 0 }} color={currentPath === item.href ? "primary" : "neutral"} variant="soft" key={item.name} startDecorator={item.icon} component={NextLink} href={item.href}>
						{item.name}
					</Button>
				))}
			</Stack>
			<ThemeToggler />
		</Stack>
	);
}
