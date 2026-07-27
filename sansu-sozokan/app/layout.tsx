import type { Metadata } from "next"; import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider"; import { GamificationHeader } from "@/components/layout/gamification-header"; import { NavDock } from "@/components/layout/nav-dock"; import { BorderSenseiAssistant } from "@/components/features/border-sensei-assistant";
export const metadata:Metadata={title:"算数創造館",description:"ボーダー先生と学ぶ次世代算数EdTech"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja" suppressHydrationWarning><body className="pixel-grid"><ThemeProvider><GamificationHeader/><main className="mx-auto min-h-screen max-w-7xl px-4 pb-32 pt-8">{children}</main><NavDock/><BorderSenseiAssistant/></ThemeProvider></body></html>}
