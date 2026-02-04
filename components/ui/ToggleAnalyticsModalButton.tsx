"use client";
import { Button } from "@mui/joy";
import { Settings } from "@mui/icons-material";
import useAnalyticsModal from "@/hooks/useAnalyticsModal";
export default function ToggleAnalyticsModalButton() {
	const { toggleModal } = useAnalyticsModal();
	return (
		<Button variant="soft" color="warning" size="sm" sx={{ borderRadius: "50%", aspectRatio: 1, width: "fit-content" }} onClick={toggleModal}>
			<Settings />
		</Button>
	);
}
