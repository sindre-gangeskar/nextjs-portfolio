import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { Container, CssVarsProvider } from "@mui/joy";

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
				<InitColorSchemeScript defaultMode="dark"/>
			</head>
			<body className={`${roboto.className}`}>
				<CssVarsProvider defaultMode="dark" colorSchemeStorageKey="joy-mode">
					<ThemeProvider>
						<Navbar />
						<Container maxWidth={"lg"}>{children}</Container>
					</ThemeProvider>
				</CssVarsProvider>
			</body>
		</html>
	);
}
