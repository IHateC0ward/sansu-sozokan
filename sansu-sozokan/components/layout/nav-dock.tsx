"use client";
import Link from "next/link"; import { usePathname } from "next/navigation";
import { Home, Map, Shapes, Trophy, Images, ChartNoAxesCombined } from "lucide-react";
const items=[['/',Home,'ホーム'],['/adventure',Map,'探検'],['/studio',Shapes,'創造'],['/colosseum',Trophy,'競技'],['/gallery',Images,'作品'],['/parent',ChartNoAxesCombined,'分析']] as const;
export function NavDock(){const path=usePathname();return <nav className="fixed bottom-3 left-1/2 z-40 flex w-[calc(100%-24px)] max-w-2xl -translate-x-1/2 justify-around rounded-2xl border border-[var(--line)] bg-[var(--panel)]/95 p-2 shadow-xl backdrop-blur">{items.map(([href,Icon,label])=><Link key={href} href={href} className={`flex min-w-12 flex-col items-center gap-1 rounded-xl px-3 py-2 text-[11px] ${path===href?'bg-violet-600 text-white':'hover:bg-violet-500/10'}`}><Icon className="h-5 w-5"/><span>{label}</span></Link>)}</nav>}
