import { Box, Typography } from "@mui/joy";

export default function AboutMe() {
	return (
		<Box component={"div"} p={3} textAlign={'start'} sx={{ width: "100%", height: "100%"}}>
			<Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Asperatur</strong>, ab inventore non ad amet molestiae dicta cupiditate iure laboriosam voluptates deleniti optio reiciendis, temporibus fuga hic possimus maiores quasi aperiam?</Typography>
		</Box>
	);
}
