"use client"
import ThemeProvider from "@/components/theme/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import { Container } from "@mui/joy";
import BackToTopButton from "@/components/ui/BackToTopButton";
import GridBackground from "@/components/ui/GridBackground";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

export default function App({ children }: { children: React.ReactNode }) {
	return (
		<AppRouterCacheProvider options={{key: 'mui'}}>
			<ThemeProvider>
				<Navbar />
				<Container maxWidth={"lg"} sx={{ zIndex: 1, position: "relative", overflowX: "hidden" }}>
					{children}
					<BackToTopButton />
				</Container>
				<GridBackground gridSize={25} />
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
