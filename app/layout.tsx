import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { CssVarsProvider } from "@mui/joy";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Sindre Gangeskar",
	description: "Sindre Gangeskar | Developer Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head>
				<noscript>Javascript must be enabled in order to visit this site</noscript>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<InitColorSchemeScript defaultMode="dark" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
				<CssVarsProvider defaultMode="dark" colorSchemeStorageKey="joy-mode">
					<ThemeProvider>
						<Navbar />
						{children}
					</ThemeProvider>
				</CssVarsProvider>
			</body>
		</html>
	);
}
