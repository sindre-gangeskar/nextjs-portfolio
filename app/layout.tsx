import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Public_Sans, Quicksand, Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy";
import ThemeProvider from "@/components/ThemeProvider";
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

const publicSans = Public_Sans({
	variable: "--font-public-sans",
	subsets: ["latin"],
	display: "swap",
});

const quicksand = Quicksand({
	variable: "--font-quicksand",
	subsets: ["latin"],
	display: "swap",
});

const firaCode = Fira_Code({
	variable: "--font-fira-code",
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
				<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "d0053e884cb9447f9867c0123fa2f45e"}'></script>

				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${publicSans.variable}${quicksand.variable} ${firaCode.variable}`}>
				<InitColorSchemeScript />
				<CssVarsProvider defaultMode="dark">
					<ThemeProvider>
						<Navbar />
						{children}
					</ThemeProvider>
				</CssVarsProvider>
			</body>
		</html>
	);
}
