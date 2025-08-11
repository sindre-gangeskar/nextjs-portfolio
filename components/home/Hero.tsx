"use client";
import GridBackground from "@/components/ui/GridBackground";
import { Stack, Typography, Card, Chip, Box, Button } from "@mui/joy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProfileAvatar from "@/components/home/ProfileAvatar";
import ColoredTypography from "@/components/ui/ColoredTypography";
import { EmailRounded, GitHub, LinkedIn } from "@mui/icons-material";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

export default function Hero({ src = "" }: { src?: string }) {
	useGSAP(() => {
		if (typeof window !== "undefined") gsap.registerPlugin(TextPlugin, ScrollToPlugin, ScrollTrigger); 

		const traitsTl = gsap.timeline();
		const descriptionTl = gsap.timeline();
		const profileTl = gsap.timeline();

		gsap.set("#profile-grid", { opacity: 0 });
		gsap.to("#profile-grid", { duration: 1.5, delay: 0.2, ease: "power3.out", opacity: 0.3 });
		gsap.to("#profile-grid", { y: "-500px", scrollTrigger: { trigger: "#profile-grid", start: "top bottom", end: "bottom top", scrub: 1 } });

		profileTl.set("#profile > *", { opacity: 0, transform: "translateX(-200px)" });
		profileTl.to("#profile > *", { opacity: 1, transform: "translateX(0)", duration: 1.2, stagger: 0.5, ease: "power3.out" });
		profileTl.to("#profile", { y: 0, scrollTrigger: { trigger: "#profile", scrub: 1, start: "top bottom", end: "+=100%" } });

		descriptionTl.set("#description > *", { transform: "translateX(150px)", opacity: 0 });
		descriptionTl.to("#description > *", {
			delay: 0,
			transform: "translateX(0)",
			duration: 0.6,
			opacity: 1,
			stagger: 0.08,
			ease: "power3.out",
		});

		traitsTl.set("#traits .trait", { opacity: 0, transform: "translateY(-50px)", zIndex: -1 });
		traitsTl.set("#traits", { opacity: 0 });
		traitsTl.to("#traits", {
			delay: 0.5,
			opacity: 1,
			duration: 0.5,
		});
		traitsTl.to("#traits .trait", {
			transform: "translateY(0)",
			ease: "elastic.out",
			duration: 1.2,
			stagger: 0.2,
			opacity: 1,
			zIndex: 1,
		});
	}, []);
	const scrollToContactForm = () => {
		gsap.to(window, { scrollTo: "#contact-form", duration: 1.5, ease: "power1.inOut" });
	};
	return (
		<>
			<GridBackground id="profile-grid" width={2500} height={1500} gridSize={40} sx={{ opacity: 0, top: 50 }}></GridBackground>
			<Stack component={"section"} direction={"column"} sx={{ position: "relative", p: 3 }}>
				<Stack direction={"row"} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
					<Stack id="profile" component={"div"} sx={{ width: "100%", minWidth: "50%", flex: 1, justifyContent: "space-evenly", textAlign: { xs: "center", md: "start" } }}>
						<ProfileAvatar id="avatar" size={350} src={src} sx={{ display: { xs: "none", md: "block" } }} />
						<Typography level="h1">
							I am <ColoredTypography level="h1">Sindre Gangeskar</ColoredTypography>
						</Typography>
						<Typography>A passionate back-end and full-stack developer from Norway</Typography>
					</Stack>
					<Stack component={"div"} sx={{ justifyContent: "center", display: "flex", flexDirection: "column", height: "100%" }}>
						<Card
							id="traits"
							variant="plain"
							color="neutral"
							sx={{ background: "transparent", borderRadius: 0, display: "flex", flexWrap: "wrap", flexDirection: "row", width: "100%", flexShrink: 1, px: 5, justifyContent: "center", opacity: 0 }}>
							<Chip variant="soft" className="trait" color="primary" component={"span"} sx={{ height: "fit-content" }}>
								Team Player
							</Chip>
							<Chip variant="soft" className="trait" color="neutral" component={"span"} sx={{ height: "fit-content" }}>
								Adaptable
							</Chip>
							<Chip variant="soft" className="trait" color="danger" component={"span"} sx={{ height: "fit-content" }}>
								Critical Thinker
							</Chip>
							<Chip variant="soft" className="trait" color="warning" component={"span"} sx={{ height: "fit-content" }}>
								Proactive
							</Chip>
							<Chip variant="soft" className="trait" color="primary" component={"span"} sx={{ height: "fit-content" }}>
								Detail-Oriented
							</Chip>
							<Chip variant="soft" className="trait" color="success" component={"span"} sx={{ height: "fit-content" }}>
								Enthusiastic
							</Chip>
							<Chip variant="soft" className="trait" color="danger" component={"span"} sx={{ height: "fit-content" }}>
								Passionate
							</Chip>
						</Card>
						<Box id="description" component={"div"}>
							<Typography component={"p"} pt={1} level="body-lg">
								About me
							</Typography>
							<Typography component={"p"} level="body-sm">
								{`
								I'm a backend developer with full-stack capabilities skilled in building robust, and scalable RESTful applications with modern front-end frameworks. I specialize in developing efficient APIs, managing
								databases and implementing robust authentication methods. I prioritize clean and maintainable code and thorough API documentation.
								`}
							</Typography>
							<Stack component={"div"} direction={"row"} gap={3} sx={{ alignItems: "center" }}>
								<Button component={"a"} target="_blank" href="https://github.com/sindre-gangeskar" startDecorator={<GitHub />} variant="soft" color="neutral" sx={{ my: 2 }}>
									Github
								</Button>
								<Button component={"a"} target="_blank" href="https://linkedin.com/in/sindre-gangeskar" startDecorator={<LinkedIn />} variant="soft" color="primary" sx={{ my: 2 }}>
									LinkedIn
								</Button>
								<Button variant="soft" color="danger" onClick={scrollToContactForm}>
									<EmailRounded />
								</Button>
							</Stack>
						</Box>
					</Stack>
				</Stack>
			</Stack>
		</>
	);
}
