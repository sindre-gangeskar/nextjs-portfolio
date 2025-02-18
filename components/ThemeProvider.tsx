"use client";
import { CssVarsProvider } from "@mui/joy";
import { extendTheme } from "@mui/joy/styles";
import { useEffect, useState } from "react";

const theme = extendTheme({
	fontFamily: {
		body: "Public Sans, sans-serif",
		display: "Quicksand, sans-serif",
	},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) return null;
	return (
		<CssVarsProvider theme={theme} modeStorageKey="joy-mode">
			{children}
		</CssVarsProvider>
	);
}
