"use client";
import { useContext } from "react";
import { AnalyticsContext } from "@/context/Analytics";

export default function useAnalytics() {
	return useContext(AnalyticsContext);
}
