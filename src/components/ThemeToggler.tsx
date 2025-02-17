"use client";
import { CssVarsProvider, extendTheme, Typography, useColorScheme } from "@mui/joy";
import { Button, Box } from "@mui/joy";
import { Brightness3, Brightness7 } from "@mui/icons-material";
import { useState, useEffect } from "react";

import * as React from "react";
function ModeSwitcher() {
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
			variant="plain"
			color="neutral"
			sx={{ height: "fit-content", aspectRatio: {xs: 1 / 1, md: 'initial'}, padding: {xs: 1.5, md: 1}, px: {xs: 1.5, md: 2}, mr: { xs: 3, md: "initial" } }}
			onClick={() => {
				if (mode === "dark") setMode("light");
				else setMode("dark");
			}}>
			<Box component={"span"} sx={{ display: "flex", alignItems: "center", gap: 1, "& > .mode-name": {display: {xs: 'none', md: 'block'}} }}>
				<Typography className={"mode-name"}>{mode == "dark" ? "Light" : "Dark"}</Typography>
				{icon}
			</Box>
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
