"use client";
import { CssVarsProvider, extendTheme, useColorScheme } from "@mui/joy";
import Button from "@mui/joy/Button";
import { Brightness3, Brightness5 } from "@mui/icons-material";
import { useState, useEffect } from "react";

import * as React from "react";
function ModeSwitcher() {
	const { mode, setMode } = useColorScheme();
	const [icon, setIcon] = useState(<Brightness3></Brightness3>);

	useEffect(() => {
		if (mode === "dark") {
			setIcon(<Brightness5 />);
		} else {
			setIcon(<Brightness3 />);
		}
	}, [mode]);

	return (
		<Button
			variant="plain"
			color="neutral"
			sx={{ aspectRatio: 1 / 1, padding: 1 }}
			onClick={() => {
				if (mode === "dark") setMode("light");
				else setMode("dark");
			}}>
			{icon}
		</Button>
	);
}

const theme = extendTheme({
	cssVarPrefix: "mode-toggle",
});

export default function ThemeToggler() {
	return (
		<CssVarsProvider theme={theme}>
			<ModeSwitcher />
		</CssVarsProvider>
	);
}
