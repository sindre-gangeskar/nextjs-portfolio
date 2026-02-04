"use client"
import { createContext, useState } from "react";

export const AnalyticsModalContext = createContext({
	open: false,
  setOpen: (_: false | true) => { },
  toggleModal: () => {}
});

export function AnalyticsModalProvider({ children }: { children: React.ReactNode }) {
  const [ open, setOpen ] = useState(false);
  const toggleModal = () => { setOpen(prev => !prev) };
	return <AnalyticsModalContext.Provider value={{ open, setOpen, toggleModal }}>{children}</AnalyticsModalContext.Provider>;
}
