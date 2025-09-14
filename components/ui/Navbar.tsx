"use client";
import { Stack, Button } from "@mui/joy";
import { usePathname } from "next/navigation";
import { HouseRounded, Person2Rounded, Folder } from "@mui/icons-material";
import NextLink from "next/link";
import ThemeToggler from "../theme/ThemeToggler";
export default function Navbar() {
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
				"&::after": {
					content: '""',
					display: "block",
					position: "absolute",
					minWidth: "100%",
					width: "100%",
					inset: 0,
					zIndex: -1,
					backgroundColor: theme.palette.neutral.softBg,
					opacity: 0.4,
				},
			})}>
			<Stack direction={"row"}>
				{locations.map(item => (
					<Button color={currentPath === item.href ? "primary" : "neutral"} variant="plain" key={item.name} startDecorator={item.icon} component={NextLink} href={item.href}>
						{item.name}
					</Button>
				))}
			</Stack>
			<ThemeToggler />
		</Stack>
	);
}
