import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { Container, CssVarsProvider } from "@mui/joy";
import GridBackground from "@/components/ui/GridBackground";
import BackToTopButton from "@/components/ui/BackToTopButton";
const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://sindregangeskar.dev"),
	title: { default: "Sindre Gangeskar", template: "Sindre Gangeskar | %s" },
	description: "I am Sindre Gangeskar, A passionate backend developer from Norway with fullstack capabilities, building fast and reliable web apps. Visit my portfolio and learn more about me!",
	openGraph: {
		type: "website",
		url: "/",
		title: "Sindre Gangeskar",
		description: `I am Sindre Gangeskar, A passionate backend developer from Norway with fullstack capabilities, building fast and reliable web apps. Visit my portfolio and learn more about me!`,
		images: [
			{
				url: "/images/og-default.jpg",
				width: 1200,
				height: 630,
				alt: "Social Preview",
			},
		],
	},
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
			<body className={`${roboto.className}`}>
				<CssVarsProvider defaultColorScheme="dark" colorSchemeStorageKey="joy-mode">
					<ThemeProvider>
						<Navbar />
						<Container maxWidth={"lg"}>
							{children}
							<BackToTopButton />
						</Container>
						<GridBackground gridSize={25}></GridBackground>
					</ThemeProvider>
				</CssVarsProvider>
			</body>
		</html>
	);
}
