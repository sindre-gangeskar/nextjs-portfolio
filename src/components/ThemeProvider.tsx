"use client";
import { CssVarsProvider } from "@mui/joy";
import { extendTheme } from "@mui/joy/styles";
const theme = extendTheme({
	fontFamily: {
		body: "Public Sans, sans-serif",
		display: "Quicksand, sans-serif",
	},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<CssVarsProvider defaultMode="system" theme={theme} modeStorageKey="dark">
			{children}
		</CssVarsProvider>
	);
}
