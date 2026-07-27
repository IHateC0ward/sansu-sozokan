"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export function ThemeToggle(){ const {theme,setTheme}=useTheme(); return <button aria-label="テーマ切替" onClick={()=>setTheme(theme==="dark"?"light":"dark")} className="rounded-xl border border-[var(--line)] p-2 hover:scale-105"><Sun className="hidden h-5 w-5 dark:block"/><Moon className="h-5 w-5 dark:hidden"/></button>; }
