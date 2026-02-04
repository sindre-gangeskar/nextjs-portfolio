"use client";
import { getConsentCookie, setAnalyticsCookie } from "@/lib/utils";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const AnalyticsContext = createContext({
	allowAnalytics: "false" as "true" | "false",
	setAllowAnalytics: (_: "true" | "false") => {},
});

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
	const [allowAnalytics, setAllowAnalytics] = useState<"true" | "false">("false");

	useEffect(() => {
		const analyticsConsentCookie = getConsentCookie();
		if (!analyticsConsentCookie) return;
		const cookieValue = analyticsConsentCookie?.split("=")[ 1 ] as "true" | "false";
		setAnalyticsCookie(cookieValue);
		setAllowAnalytics(cookieValue);
	}, []);

	return <AnalyticsContext.Provider value={{ allowAnalytics, setAllowAnalytics }}>{children}</AnalyticsContext.Provider>;
}
