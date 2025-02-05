"use client";
import { CssVarsProvider, useColorScheme, useTheme } from "@mui/joy";
import { extendTheme } from "@mui/joy/styles";

import { useEffect } from "react";

function BackgroundTheme() {
	const theme = useTheme();
	const { mode } = useColorScheme();

	useEffect(() => {
		document.body.style.backgroundColor = mode === 'dark' ? theme.vars.palette.neutral[900] : theme.vars.palette.neutral[100]
	}, [mode, theme]);
	return null;
}

const theme = extendTheme({
	fontFamily: {
		body: "Public Sans, sans-serif",
		display: "Quicksand, sans-serif",
	},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<CssVarsProvider defaultMode="system" theme={theme} modeStorageKey="dark">
			<BackgroundTheme/>
			{children}
		</CssVarsProvider>
	);
}
