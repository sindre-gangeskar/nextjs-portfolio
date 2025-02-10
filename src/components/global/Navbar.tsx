import { Container, Box, Link, Stack, List, ListItemButton } from "@mui/joy";
import ThemeToggler from "./ThemeToggler";
export default function Navbar() {
	return (
		<Container component={"nav"} sx={{ width: "100%", position: "sticky", top: 0, zIndex: 1500 }}>
			<Stack direction={"row"} gap={2} sx={{ borderRadius: "1.5rem", py: 1.5, display: "flex", justifyContent: "space-between", backdropFilter: "blur(4px)" }}>
				<List orientation="horizontal">
					<ListItemButton variant="plain" component="a" href="/" role="menuitem">
						Home
					</ListItemButton>
				</List>
				<ThemeToggler></ThemeToggler>
			</Stack>
		</Container>
	);
}
