import { useState } from "react";
import { Stack, Button, Drawer, ModalClose, DialogTitle } from "@mui/joy";
import { IconButton } from "@mui/joy";
import { Menu } from "@mui/icons-material";
import ThemeToggler from "../theme/ThemeToggler";
import Link from "next/link";
import { NavigationProps } from "@/lib/definitions";
import { DialogContent, SxProps } from "@mui/material";
export default function MobileNavbar({ locations, currentPath }: { locations: NavigationProps[]; currentPath: string }) {
	const [open, setOpen] = useState(false);
	const sx: SxProps = { display: { xs: "initial", md: "none" } };
	const toggleOpen = () => {
		setOpen(prev => !prev);
	};

	return (
		<Stack
			direction={"row"}
			component={"nav"}
			sx={{ ...sx, backdropFilter: "blur(6px)", width: "100%", justifyContent: "space-between", p: 1.5, zIndex: 1200, position: "sticky", top: 0, display: { xs: "flex", md: "none" } }}>
			<IconButton onClick={toggleOpen}>
				<Menu />
			</IconButton>
			<ThemeToggler />
			<Drawer onClose={toggleOpen} open={open} anchor="left" size="lg" sx={sx}>
				<DialogContent>
					<DialogTitle>Navigation</DialogTitle>
					<Stack>
						{locations.map(item => (
							<Button
								color={currentPath === item.href ? "primary" : "neutral"}
								variant="plain"
								key={item.name}
								startDecorator={item.icon}
								component={Link}
								href={item.href}
								onClick={toggleOpen}
								sx={{ textOverflow: "ellipsis", overflow: "hidden" }}>
								{item.name}
							</Button>
						))}
					</Stack>
				</DialogContent>
				<ModalClose />
			</Drawer>
		</Stack>
	);
}
