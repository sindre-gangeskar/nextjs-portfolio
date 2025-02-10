import GridBackground from "@/components/global/GridBackground";
import { Stack, Typography, Card, Box } from "@mui/joy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
export default function Hero() {
	useGSAP(() => {
		gsap.registerPlugin(TextPlugin, ScrollToPlugin);
		const lines = gsap.utils.toArray(".line") as Element[];

		const texts: string[] = [
			"> Booting up system... ✅",
			"> Initiating introduction protocol... <br></br> > Hi! Welcome to Sindre Gangeskar's portfolio, visitor! 🙋🏼‍♂️",
			"> Click here to proceed to the portfolio (Or manually scroll down)",
		];
		const tl = gsap.timeline();
		tl.to("#terminal", { transform: "rotateX(0deg)", delay: 1.5, opacity: 1, duration: 1.5, ease: "power3.inOut" });

		lines.forEach((line, index) => {
			tl.to(line, {
				text: texts[index],
				duration: (texts[index].length * 1.5) / 60,
				stagger: 1.5,
				ease: "none",
				onStart: () => {
					if (index === 2) {
						(line as HTMLElement).style.background = "solid";
					}
				},
			});
		});

		gsap.to("#grid", {
			repeat: -1,
			transform: "translateX(100vw) rotateX(60deg)",
			duration: 30,
			ease: "none",
			repeatRefresh: false,
			opacity: 1,
		});
	});

	const scrollToElement = (id: string) => {
		gsap.to(window, {
			scrollTo: { y: id },
			ease: "power2.inOut",
			duration: 2,
		});
	};

	return (
		<Stack sx={{ position: "relative", height: "100vh", display: "grid", alignItems: "center", justifyContent: "center", perspective: "1500px" }}>
			<Box component={"div"} sx={{ height: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
				<Card
					id="terminal"
					variant="solid"
					color="neutral"
					sx={theme => ({
						position: "absolute",
						overflow: "hidden",
						padding: { xs: 3, md: 12 },
						color: theme.vars.palette.success.solidBg,
						boxShadow: `0px 0px 15px ${theme.vars.palette.primary.solidBg}`,
						height: "100%",
						width: "100%",
						opacity: 1,
						maxHeight: "600px",
						maxWidth: "1200px",
						transform: "rotateX(90deg) rotateY(45deg)",
						backdropFilter: "blur(8px)",
						background: "transparent",
						transformOrigin: "bottom",
					})}>
					<Typography className="line" sx={{ fontFamily: "Fira Code", opacity: 1 }}></Typography>
					<Typography className="line" sx={{ fontFamily: "Fira Code", opacity: 1 }}></Typography>
					<Typography
						variant="soft"
						color="primary"
						className="line"
						onClick={() => {
							scrollToElement("#about");
						}}
						sx={theme => ({
							transition: "250ms ease",
							fontFamily: "Fira Code",
							cursor: "pointer",
							p: 0,
							"&:hover": {
								backgroundColor: theme.vars.palette.primary.softHoverBg,
								p: 2,
							},
						})}></Typography>
				</Card>
			</Box>
			<GridBackground id="grid" width={3500} height={600} thickness={10} gridSize={60} sx={{ transform: "translateX(-100vw) rotateX(60deg)", opacity: 0 }} />
		</Stack>
	);
}
