import { capitalizeString } from "@/lib/utils";
import { GitHub } from "@mui/icons-material";
import { Stack, Typography, Card, Button, Box } from "@mui/joy";
import { RepoType } from "@/lib/definitions";
import { SxProps } from "@mui/material";
import { VariantProp, ColorPaletteProp } from "@mui/joy";
import { FaGlobe } from "react-icons/fa6";
export default function Project({ repo, id, className, sx, variant, color }: { repo: RepoType; id?: string; className?: string; sx: SxProps; variant?: VariantProp; color?: ColorPaletteProp }) {
	return (
		<Card id={id} className={className} variant={variant} color={color} invertedColors sx={{ ...sx }}>
			<Stack sx={{ height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
				<Typography level="title-lg">{capitalizeString(repo.name)}</Typography>
				<Stack sx={{ display: "flex", height: "100%", flexDirection: { xs: "column", md: "row" }, textAlign: "start", p: 0, m: 0, justifyContent: "space-between", alignItems: "center" }}>
					<Typography level="body-sm">{repo.description}</Typography>
					<Box component={"span"} sx={{ display: "flex", justifyContent: "space-evenly", gap: 2, textWrap: "nowrap" }}>
						{repo.homepage && (
							<Button variant="soft" color="primary" endDecorator={<FaGlobe />} component={"a"} target="_blank" href={repo.homepage}>
								Visit Homepage
							</Button>
						)}
						{repo.html_url && (
							<Button variant="soft" color="neutral" endDecorator={<GitHub />} component={"a"} target="_blank" href={repo.html_url}>
								View On Github
							</Button>
						)}
					</Box>
				</Stack>
			</Stack>
		</Card>
	);
}
