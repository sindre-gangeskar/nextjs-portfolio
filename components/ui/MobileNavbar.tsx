import type { NavigationProps } from "@/lib/definitions";
import { Menu } from "@mui/icons-material";
import {
	Button,
	DialogContent,
	Drawer,
	IconButton,
	ModalClose,
	Stack,
} from "@mui/joy";
import type { SxProps } from "@mui/joy/styles/types";
import Link from "next/link";
import { useState } from "react";
import ThemeToggler from "../theme/ThemeToggler";
export default function MobileNavbar({
	locations,
	currentPath,
}: {
	locations: NavigationProps[];
	currentPath: string;
}) {
	const [open, setOpen] = useState(false);
	const sx: SxProps = { display: { xs: "initial", md: "none" } };
	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<Stack
			direction={"row"}
			component={"nav"}
			sx={{
				...sx,
				WebkitBackdropFilter: "blur(6px)",
				backdropFilter: "blur(6px)",
				width: "100%",
				justifyContent: "space-between",
				p: 1.5,
				zIndex: 1200,
				position: "sticky",
				top: 0,
				display: { xs: "flex", md: "none" },
			}}
		>
			<IconButton onClick={toggleOpen}>
				<Menu />
			</IconButton>
			<ThemeToggler />
			<Drawer onClose={toggleOpen} open={open} anchor="left" size="lg" sx={sx}>
				<DialogContent>
					<Stack sx={{ mt: 8 }}>
						{locations.map((item) => (
							<Button
								color={currentPath === item.href ? "primary" : "neutral"}
								variant="plain"
								key={item.name}
								startDecorator={item.icon}
								component={Link}
								href={item.href}
								onClick={toggleOpen}
								sx={{
									textOverflow: "ellipsis",
									overflow: "hidden",
									fontSize: "1.2rem",
								}}
							>
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
