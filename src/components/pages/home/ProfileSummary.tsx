"use client";
import { Box, Stack, Typography, Link } from "@mui/joy";
import Header from "@/components/global/Header";
import ProfileAvatar from "@/components/global/ProfileAvatar";
import { GitHub } from "@mui/icons-material";

interface SummaryProps {
	user: { avatar_url: string };
}

export default function ProfileSummary({ user = { avatar_url: "" } }: SummaryProps) {
	return (
		<>
			<Box component={"section"} sx={{ width: "100%", p: 2, position: "relative" }}>
				<Stack direction={"row"} display={"flex"} width={"100%"} alignItems={"center"} sx={{ textWrap: "nowrap" }}>
					{user?.avatar_url ? <ProfileAvatar size={200} src={user.avatar_url}></ProfileAvatar> : ""}
					<Stack direction={"column"}>
						<Stack>
							<Header color="primary" preColorText="I am" level="h1" coloredText="Sindre Gangeskar"></Header>
							<Typography level={"body-md"}>A passionate back-end developer and full-stack hobbyist from Norway</Typography>
						</Stack>
						<Stack sx={{ marginLeft: "auto" }}>
              <Link component={"a"} href="#" color="primary" variant="outlined" p={1} sx={{ width: "fit-content", marginLeft: "auto", borderRadius: "0.25rem" }}>
                <GitHub></GitHub>
							</Link>
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</>
	);
}
