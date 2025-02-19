"use client";
import { Stack, List, Button, Box } from "@mui/joy";
import { usePathname } from "next/navigation";
import { HouseRounded, Person2Rounded, Folder } from "@mui/icons-material";
import NextLink from "next/link";
import ThemeToggler from "./ThemeToggler";
export default function Navbar() {
	const currentPath = usePathname();
	return (
	<Stack component={"nav"} direction={"row"} sx={{ width: "100%", position: "sticky", top: 0, py: 2, backdropFilter: "blur(4px)", zIndex: 1500 }}>
		<List orientation="horizontal" sx={{ maxWidth: "900px", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
			<Stack component={"span"} direction={"row"} gap={3}>
				<Button sx={{ fontSize: { xs: "sm", md: "md" } }} variant={currentPath == "/" ? "soft" : "plain"} color="neutral" href="/" component={NextLink}>
					<Box fontSize={"inherit"} component={"span"} sx={{ display: "flex", alignItems: "center", gap: { xs: 0.1, md: 1 }, justifyContent: "center", flexDirection: { xs: "column", md: "row" } }}>
						<HouseRounded />
						Home
					</Box>
				</Button>
				<Button
					sx={{ fontSize: { xs: "sm", md: "md" }, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", textAlign: "center" }}
					variant={currentPath == "/resume" ? "soft" : "plain"}
					color="neutral"
					component={NextLink}
					href="/resume"
					role="menuitem">
					<Box fontSize={"inherit"} component={"span"} sx={{ display: "flex", alignItems: "center", gap: { xs: 0.1, md: 1 }, justifyContent: "center", flexDirection: { xs: "column", md: "row" } }}>
						<Person2Rounded />
						Resumé
					</Box>
				</Button>
				<Button
					sx={{ fontSize: { xs: "sm", md: "md" }, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", textAlign: "center" }}
					variant={currentPath === "/projects" ? "soft" : "plain"}
					color="neutral"
					component={NextLink}
					href="/projects"
					role="menuitem">
					<Box fontSize={"inherit"} component={"span"} sx={{ display: "flex", alignItems: "center", gap: { xs: 0.1, md: 1 }, justifyContent: "center", flexDirection: { xs: "column", md: "row" } }}>
						<Folder />
						Projects
					</Box>
				</Button>
			</Stack>
			<ThemeToggler />

		</List>
	</Stack>
);
}
