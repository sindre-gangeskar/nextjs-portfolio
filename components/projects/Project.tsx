import { capitalizeString } from "@/lib/utils";
import { GitHub } from "@mui/icons-material";
import { Stack, Typography, Card, Button } from "@mui/joy";
import { useState } from "react";
import { RepoType } from "@/lib/definitions";
import { SxProps } from "@mui/material";

export default function Project({ repo, id, className, sx }: { repo: RepoType; id?: string; className?: string; sx: SxProps }) {
	const [hovering, setHovering] = useState(false);

	return (
		<Card
			id={id}
			className={className}
			onMouseEnter={() => {
				setHovering(true);
			}}
			onMouseLeave={() => {
				setHovering(false);
			}}
			variant={hovering ? "soft" : "plain"}
			color="neutral"
			sx={{ ...sx }}>
			<Stack sx={{ height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
				<Typography level="body-lg">{capitalizeString(repo.name)}</Typography>
				<Stack sx={{ display: "flex", height: "100%", flexDirection: { xs: "column", md: "row" }, textAlign: "start", p: 0, m: 0, justifyContent: "space-between", alignItems: "center" }}>
					<Typography level="body-sm">{repo.description}</Typography>
					{repo.url ? (
						<Button variant="solid" color="primary" startDecorator={<GitHub />} component={"a"} target="_blank" href={repo.url}>
							View On Github
						</Button>
					) : null}
				</Stack>
			</Stack>
		</Card>
	);
}
