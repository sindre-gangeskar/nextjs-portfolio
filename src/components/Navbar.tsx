"use client";
import { Stack, List, Button, Box } from "@mui/joy";
import { usePathname } from "next/navigation";
import { HouseRounded, Person2Rounded, BookOnlineRounded } from "@mui/icons-material";
import NextLink from "next/link";
import ThemeToggler from "./ThemeToggler";
export default function Navbar() {
	const currentPath = usePathname();
	return (
		<Stack component={"nav"} direction={"row"} sx={{ width: "100%", position: "sticky", top: 0, py: 2, backdropFilter: "blur(4px)", zIndex: 1500 }}>
			<List orientation="horizontal" sx={{maxWidth: "900px",  margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
				<Stack component={'span'} direction={"row"} gap={3}>
					<Button variant={currentPath == "/" ? "soft" : "plain"} color="neutral" href="/" component={NextLink}>
						Home
						<HouseRounded />
					</Button>
					<Button size="md" variant={currentPath == "/resume" ? "soft" : "plain"} color="neutral" component={NextLink} href="/resume" role="menuitem">
						Resumé
						<Person2Rounded />
					</Button>
					<Button size="md" variant={currentPath === "/projects" ? "soft" : "plain"} color="neutral" component={NextLink} href="/projects" role="menuitem">
						Projects
						<BookOnlineRounded />
					</Button>
				</Stack>
				<ThemeToggler></ThemeToggler>
			</List>
		</Stack>
	);
}
