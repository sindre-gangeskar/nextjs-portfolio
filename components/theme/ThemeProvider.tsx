"use client";
import { CssVarsProvider } from "@mui/joy";
import { extendTheme } from "@mui/joy/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const theme = extendTheme({
		components: {
			JoyButton: { styleOverrides: { root: { fontFamily: "var(--font-roboto)", transition: "background-color 250ms ease" } } },
			JoyAccordion: { styleOverrides: { root: { transition: "color 250ms ease, background-color 250ms ease" } } },
			JoyCard: { styleOverrides: { root: { transition: "background-color 250ms ease" } } },
			JoyTypography: { styleOverrides: { root: { fontFamily: "var(--font-roboto)" } } },
		},
	});

	return (
		<AppRouterCacheProvider options={{key: 'mui'}}>
			<CssVarsProvider defaultMode="dark" theme={theme} colorSchemeStorageKey="joy-mode">
				{children}
			</CssVarsProvider>
		</AppRouterCacheProvider>
	);
}
