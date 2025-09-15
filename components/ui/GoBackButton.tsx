"use client";
import { Button } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { useRouter } from "next/navigation";
import { BiLeftArrowCircle } from "react-icons/bi";
export default function GoBackButton({ id, sx }: { id?: string; sx?: SxProps }) {
	const router = useRouter();
	return (
		<Button
			id={id}
			color="neutral"
			variant="soft"
			startDecorator={<BiLeftArrowCircle size={20} />}
			sx={{ width: "fit-content", ...sx }}
			onClick={() => {
				router.back();
			}}>
			Go Back
		</Button>
	);
}
