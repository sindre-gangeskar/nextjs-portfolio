import { Container, Box, Link, Stack, List, ListItemButton } from "@mui/joy";
import ThemeToggler from "./ThemeToggler";
export default function Navbar() {
	return (
		<Container sx={{ width: "100%", margin: "0px auto", backdropFilter: "blur(8px)" }}>
			<Box component={"nav"} sx={{ borderRadius: "1.5rem", py: 1.5, display: "flex", justifyContent: "space-between" }}>
				<Stack direction={"row"} gap={2}>
					<List orientation="horizontal">
					<ListItemButton component="a" href="/" role="menuitem">
						Home
					</ListItemButton>
					</List>
			
				</Stack>
				<Stack direction={"row"} gap={2}>
					<ThemeToggler></ThemeToggler>
				</Stack>
			</Box>
		</Container>
	);
}
