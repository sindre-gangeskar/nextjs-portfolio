"use client";
import { useColorScheme } from "@mui/joy";
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
			sx={{ borderRadius: "50%", aspectRatio: 1, p: 1.5, width: 'fit-content', height: 'fit-content' }}
			onClick={() => {
				if (mode === "dark") setMode("light");
				else setMode("dark");
			}}>
			{icon}
		</Button>
	);
}
