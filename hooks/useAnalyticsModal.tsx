"use client"
import { useContext } from "react";

import { AnalyticsModalContext } from "@/context/AnalyticsModal";
export default function useAnalyticsModal() {
	return useContext(AnalyticsModalContext);
}
