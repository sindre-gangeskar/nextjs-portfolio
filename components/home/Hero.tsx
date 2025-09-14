"use client";
import GridBackground from "@/components/ui/GridBackground";
import { Stack, Typography, Card, Chip, Box, Button } from "@mui/joy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProfileAvatar from "@/components/home/ProfileAvatar";
import ColoredTypography from "@/components/ui/ColoredTypography";
import { EmailRounded, GitHub } from "@mui/icons-material";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ProfileAvatarSkeleton from "./skeletons/ProfileAvatarSkeleton";
import useUserProfile from "@/hooks/useUserProfile";
import LinkedInButton from "../ui/LinkedInButton";

export default function Hero() {
	const { data, isLoading } = useUserProfile();

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

		descriptionTl.set("#description-stack > *", { transform: "translateX(150px)", opacity: 0, filter: "blur(16px)" });
		descriptionTl.to("#description-stack > *", {
			delay: 0,
			transform: "translateX(0)",
			duration: 0.8,
			opacity: 1,
			stagger: 0.12,
			filter: "blur(0px)",
			ease: "power2.out",
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

	useGSAP(() => {
		const profileImageTl = gsap.timeline();

		if (data && !isLoading) {
			profileImageTl.set("#profile-image", { opacity: 0 });
			profileImageTl.to("#profile-image", { opacity: 1, duration: 1.2, ease: "power1.out" });
		}
	}, [isLoading]);

	const scrollToContactForm = () => {
		gsap.to(window, { scrollTo: "#contact-form", duration: 1.5, ease: "power1.inOut" });
	};

	return (
		<>
			<GridBackground id="profile-grid" width={2500} height={1500} gridSize={30} sx={{ opacity: 0, top: 200 }}></GridBackground>
			<Stack component={"section"} direction={"column"} sx={{ position: "relative", p: 3 }}>
				<Stack direction={"row"} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
					<Stack id="profile" sx={{ width: "100%", minWidth: "50%", flex: 1, justifyContent: "space-evenly", textAlign: { xs: "center", md: "start" } }}>
						<Box id="avatar">{isLoading ? <ProfileAvatarSkeleton /> : <ProfileAvatar id="profile-image" size={350} src={data?.avatar_url ?? ""} sx={{ display: { xs: "none", md: "block" } }} />}</Box>
						<Typography level="h1">
							I am <ColoredTypography level="h1">Sindre Gangeskar</ColoredTypography>
						</Typography>
						<Typography>A passionate back-end and full-stack developer from Norway</Typography>
					</Stack>
					<Stack sx={{ justifyContent: "center", display: "flex", flexDirection: "column", height: "100%" }}>
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
							<Stack id="description-stack" gap={2}>
								<Typography level="title-sm">
									I am a back-end developer with full-stack capabilities skilled in building robust and scalable RESTful applications with modern front-end frameworks. <br />
								</Typography>
								<Typography level="title-sm">
									I specialize in developing efficient APIs, managing databases and implementing robust authentication methods. I prioritize clean and maintainable code and thorough API documentation.
								</Typography>
								<Typography level="title-sm">I am curious and eager to learn technologies for both front-end and back-end to apply in a professional setting.</Typography>
							</Stack>
							<Stack component={"div"} direction={"row"} gap={3} sx={{ alignItems: "center" }}>
								<Button component={"a"} target="_blank" href="https://github.com/sindre-gangeskar" startDecorator={<GitHub />} variant="soft" color="neutral" sx={{ my: 2 }}>
									Github
								</Button>
								<LinkedInButton />
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
