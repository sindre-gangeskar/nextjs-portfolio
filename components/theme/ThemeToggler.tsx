"use client";
import { Typography, useColorScheme } from "@mui/joy";
import { Button } from "@mui/joy";
import { Brightness3, Brightness7 } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function ThemeToggler() {
	const { mode, setMode } = useColorScheme();
	const [icon, setIcon] = useState(<Brightness3></Brightness3>);

	useEffect(() => {
		if (mode === "dark") {
			setIcon(<Brightness7 />);
		} else {
			setIcon(<Brightness3 />);
		}
	}, [mode]);

	return (
		<Button
			size="sm"
			color="neutral"
			variant="soft"
			sx={{ gap: 2, aspectRatio: { xs: 1 / 1, md: "initial" }, padding: { xs: 1.5, md: 1 }, px: { xs: 1.5, md: 2 }, mr: { xs: 3, md: "initial" } }}
			onClick={() => {
				if (mode === "dark") setMode("light");
				else setMode("dark");
			}}>
			<Typography sx={{ display: { xs: "none", md: "inherit" } }} className={"mode-name"}>
				{mode == "dark" ? "Light" : "Dark"}
			</Typography>
			{icon}
		</Button>
	);
}
