"use client";
import useAnalytics from "@/hooks/useAnalytics";
import useAnalyticsModal from "@/hooks/useAnalyticsModal";
import { setAnalyticsCookie } from "@/lib/utils";
import { Modal, ModalClose, ModalDialog, Stack, Switch, Typography } from "@mui/joy";
export default function AnalyticsModal() {
	const { allowAnalytics, setAllowAnalytics } = useAnalytics();
	const { toggleModal, open } = useAnalyticsModal();

	const handleConsent = (value: "true" | "false") => {
		setAllowAnalytics(value);
    setAnalyticsCookie(value);
	};

	return (
		<Modal open={open} onClose={toggleModal}>
			<ModalDialog>
				<ModalClose />
				<Typography level="title-lg">Analytics Settings</Typography>
				<Stack p={2} direction={"row"} sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
					<Typography level="title-md">Allow analytics</Typography>
					<Switch
						checked={allowAnalytics == "true"}
						onChange={event => {
							const value = event.target.checked ? "true" : "false";
							handleConsent(value);
						}}
					/>
				</Stack>
			</ModalDialog>
		</Modal>
	);
}
