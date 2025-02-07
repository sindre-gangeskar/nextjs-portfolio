import { Container, Stack, Avatar } from "@mui/joy";
import Image from "next/image";

interface ProfileProps {
	src: string;
	size: number;
	sx?: {}
}
export default function ProfileAvatar({ src, size = 50, sx }: ProfileProps) {
	return (
		<Container>
			<Stack>
				<Avatar src={src} alt="profileImage" sx={{ width: `${size}px`, height: `${size}px`, aspectRatio: 1 / 1, ...sx }}></Avatar>
			</Stack>
		</Container>
	);
}
