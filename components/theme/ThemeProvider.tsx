"use client";
import { CssVarsProvider } from "@mui/joy";
import { extendTheme } from "@mui/joy/styles";
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const theme = extendTheme({
		colorSchemes: {
			dark: { palette: { background: { body: "var(--joy-palette-neutral-900)" } } },
			light: { palette: { background: { body: "var(--joy-palette-neutral-100)" } } },
		},

		components: {
			JoyButton: { styleOverrides: { root: { fontFamily: "var(--font-nunito)", transition: "background-color 250ms ease" } } },
			JoyAccordion: { styleOverrides: { root: { transition: "color 250ms ease, background-color 250ms ease" } } },
			JoyCard: { styleOverrides: { root: { transition: "background-color 250ms ease" } } },
			JoyTypography: { styleOverrides: { root: { fontFamily: "var(--font-nunito)" } } },
			JoyChip: { styleOverrides: { root: { fontFamily: "var(--font-nunito)" } } },
		},
	});

	return (
		<CssVarsProvider disableNestedContext defaultMode="dark" theme={theme} colorSchemeStorageKey="joy-mode">
			{children}
		</CssVarsProvider>
	);
}
