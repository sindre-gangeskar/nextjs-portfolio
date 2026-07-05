import type { Metadata } from "next";
import Resume from "@/components/resume/Resume";

export const metadata: Metadata = {
	title: "Resumé",
};
export default function resume() {
	return <Resume />;
}
