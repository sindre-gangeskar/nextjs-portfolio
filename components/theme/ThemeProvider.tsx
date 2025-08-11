"use client";
import { CssVarsProvider } from "@mui/joy";
import { extendTheme } from "@mui/joy/styles";
import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const theme = extendTheme({
		components: {
			JoyButton: { styleOverrides: { root: { fontFamily: "var(--font-roboto)", transition: "background-color 250ms ease" } } },
			JoyAccordion: { styleOverrides: { root: { transition: "color 250ms ease, background-color 250ms ease" } } },
			JoyCard: { styleOverrides: { root: { transition: "background-color 250ms ease" } } },
			JoyTypography: { styleOverrides: { root: { fontFamily: "var(--font-roboto)" } } },
		}
	});
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) return null;
	return (
		<CssVarsProvider theme={theme} colorSchemeStorageKey="joy-mode">
			{children}
		</CssVarsProvider>
	);
}
