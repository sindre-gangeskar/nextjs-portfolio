import { Container, Stack } from "@mui/joy";
import Image from "next/image";

interface ProfileProps {
	src: string;
}
export default function ProfileAvatar({ src }: ProfileProps) {
	return (
		<Container>
			<Stack>
				<Image width={100} height={100} src={src} alt="profileImage"></Image>
			</Stack>
		</Container>
	);
}
