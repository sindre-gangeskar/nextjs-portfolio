import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import App from "./app";

const nunito = Nunito_Sans({
	variable: "--font-nunito",
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
				<InitColorSchemeScript defaultMode="dark" colorSchemeStorageKey="joy-mode" />
			</head>
			<body className={`${nunito.className}`}>
					<App children={children} />
			</body>
		</html>
	);
}
