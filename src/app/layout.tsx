import type { Metadata } from "next";
import { Geist, Geist_Mono, Public_Sans, Quicksand, Fira_Code, Nabla } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/global/ThemeProvider";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const publicSans = Public_Sans({
	variable: "--font-public-sans",
	subsets: ["latin"],
});

const quicksand = Quicksand({
	variable: "--font-quicksand",
	subsets: ["latin"],
});

const firaCode = Fira_Code({
	variable: "--font-fira-code",
	subsets: ["latin"],
});
const nabla = Nabla({
	variable: "--font-nabla",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Portfolio - Sindre Gangeskar",
	description: "Portfolio for Sindre Gangeskar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
	<ThemeProvider>
		<html lang="en">
			<head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${publicSans.variable}${quicksand.variable} ${firaCode.variable} ${nabla.variable}`}>{children}</body>
		</html>
	</ThemeProvider>
);
}
