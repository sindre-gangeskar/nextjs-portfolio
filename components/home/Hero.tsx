"use client";
import { Stack, Typography, Chip, Box, Divider, Link, type ColorPaletteProp } from "@mui/joy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProfileAvatar from "@/components/home/ProfileAvatar";
import ColoredTypography from "@/components/ui/ColoredTypography";
import TextPlugin from "gsap/dist/TextPlugin";
import ProfileAvatarSkeleton from "./skeletons/ProfileAvatarSkeleton";
import useUserProfile from "@/hooks/useUserProfile";
import Links from "./Links";

// Grouped by color: working with others (blue), how I think (green), drive (amber)
const traits: { label: string; color: ColorPaletteProp }[] = [
	{ label: "Team Player", color: "primary" },
	{ label: "Adaptable", color: "primary" },
	{ label: "Critical Thinker", color: "success" },
	{ label: "Detail-Oriented", color: "success" },
	{ label: "Proactive", color: "warning" },
	{ label: "Enthusiastic", color: "warning" },
	{ label: "Passionate", color: "warning" },
];

export default function Hero() {
	const { data, isLoading } = useUserProfile();
	useGSAP(() => {
		gsap.registerPlugin(TextPlugin);
		const traitsTl = gsap.timeline();
		const descriptionTl = gsap.timeline();
		const profileTl = gsap.timeline();

		profileTl.set("#profile-description > *", { opacity: 0, x: -150 });
		descriptionTl.set("#description-stack > *", {
			opacity: 0,
			filter: "blur(6px)",
		});
		traitsTl.set("#traits .trait", { opacity: 0, y: -10, zIndex: -1 });

		profileTl.to("#profile-description > *", {
			opacity: 1,
			x: 0,
			duration: 1.2,
			stagger: 0.5,
			ease: "power3.out",
			delay: 0.5,
		});
		descriptionTl.to("#description-stack > *", {
			delay: 0.2,
			duration: 0.8,
			opacity: 1,
			stagger: 0.12,
			filter: "blur(0px)",
			ease: "power3.out",
		});
		traitsTl.to("#traits", {
			delay: 0.5,
			opacity: 1,
			duration: 0.5,
		});
		traitsTl.to(".trait", {
			y: 0,
			ease: "elastic.out",
			duration: 1.2,
			stagger: 0.2,
			opacity: 1,
			zIndex: 1,
		});
	}, []);

	const { contextSafe } = useGSAP();
	const revealAvatar = contextSafe(() => {
		gsap.fromTo(
			"#profile-image",
			{ opacity: 0, scale: 0.92, y: 20 },
			{ opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
		);
	});

	return (
		<>
			<Stack
				component={"section"}
				direction={"row"}
				sx={(theme) => ({
					position: "relative",
					zIndex: 0,
					overflow: "hidden",
					p: 3,
					mt: 3,
					mx: 0,
					borderRadius: "0.75rem",
					flexDirection: { xs: "column", md: "row" },
					"& p": { lineHeight: "1.75rem" },
					"&::before": {
						content: '""',
						display: "block",
						width: "100%",
						position: "absolute",
						inset: 0,
						zIndex: -1,
						backdropFilter: "blur(120px)",
					},
					"&::after": {
						content: '""',
						display: "block",
						position: "absolute",
						inset: 0,
						borderRadius: "inherit",
						padding: "1px",
						background: `radial-gradient(circle at top left, ${theme.vars.palette.neutral.softHoverBg} 50%, transparent)`,
						mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
						maskComposite: "exclude",
						WebkitMaskComposite: "xor",
						pointerEvents: "none",
					},
				})}
			>
				<Stack sx={{ justifyContent: "space-between" }}>
					<Stack id="profile-description" gap={0} p={0}>
						<Typography level="h1" sx={{ opacity: 0 }}>
							Hi! I am{" "}
							<ColoredTypography level="h1" bold>Sindre Gangeskar</ColoredTypography>
						</Typography>
						<Typography level="title-lg" sx={{ opacity: 0, mb: 2 }}>
							Full-stack engineer at Kilter, based in Norway
						</Typography>
					</Stack>
					<Divider sx={{ mb: 2 }} />
					<Box id="description" component={"div"} sx={{ overflow: "hidden" }}>
						<Stack id="description-stack" gap={1}>
							<Typography level="title-sm">
								I'm a full-stack engineer at{" "}
								<Link href="https://www.kiltersystems.com/" target="_blank" rel="noopener noreferrer">
									Kilter AS
								</Link>
								, where I build web and mobile apps with TypeScript, Node.js,
								Flutter and SQL.
							</Typography>
							<Typography level="title-sm">
								My roots are in back-end development: designing REST APIs, modeling
								databases and building secure authentication. I care about clean,
								maintainable code and documentation that's actually useful.
							</Typography>
							<Typography level="title-sm">
								In my spare time I work on hobby projects to keep up with new tools
								and practices, and to try them out hands-on.
							</Typography>
						</Stack>
					</Box>
					<Divider sx={{ my: 2 }}><Typography level="title-sm" letterSpacing={'0.1em'} textTransform='uppercase'>Traits</Typography></Divider>
					<Box
						id="traits"
						sx={{
							background: "transparent",
							borderRadius: 0,
							display: "flex",
							flexWrap: "wrap",
							flexDirection: "row",
							width: "100%",
							flexShrink: 1,
							gap: 1,
							justifyContent: "start",
							opacity: 0,
						}}
					>
						{traits.map(({ label, color }) => (
							<Chip
								key={label}
								slotProps={{ label: { id: `chip-${label.toLowerCase().replace(/\s+/g, "-")}` } }}
								variant="outlined"
								className="trait"
								color={color}
								component={"span"}
								sx={{ height: "fit-content" }}
							>
								{label}
							</Chip>
						))}
					</Box>
				</Stack>
				<Stack
					id="profile"
					sx={{
						height: '100%',
						alignItems: 'center',
						justifyContent: "center",
						placeItems: 'center',
						textAlign: { xs: "center", md: "start" },
						alignSelf: 'center',
						p: 3,
						display: { xs: 'none', md: 'block' }
					}}
				>
					<Box id="avatar" sx={theme => ({ display: "flex", justifyContent: "center", justifyItems: 'center', alignSelf: 'center' })}>
						{isLoading ? (
							<ProfileAvatarSkeleton size={300} />
						) : (
							<ProfileAvatar
								id="profile-image"
								size={300}
								avatar_url={data?.avatar_url}
								onLoad={revealAvatar}
								sx={{ background: 'red', opacity: 0 }}
							/>
						)}
					</Box>

				</Stack>
			</Stack>
			<Links />
		</>
	);
}
