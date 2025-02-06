import { Container, Stack, Avatar } from "@mui/joy";
import Image from "next/image";

interface ProfileProps {
	src: string;
	size: number
}
export default function ProfileAvatar({ src, size = 50 }: ProfileProps) {
	return (
		<Container>
			<Stack>
				<Avatar src={src} alt="profileImage" sx={{width: `${size}px`, height: `${size}px`, aspectRatio: 1/1}}></Avatar>
			</Stack>
		</Container>
	);
}
