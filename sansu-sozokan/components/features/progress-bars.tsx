"use client";
import { useLearningStore } from "@/store/use-learning-store";
const labels:Record<string,string>={fractions:"分数",geometry:"図形",logic:"論理",speed:"計算スピード"};
export function ProgressBars(){const progress=useLearningStore(s=>s.progress);return <div className="space-y-4">{Object.entries(progress).map(([k,v])=><div key={k}><div className="mb-2 flex justify-between text-sm"><b>{labels[k]}</b><span>{v}%</span></div><div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-400" style={{width:`${v}%`}}/></div></div>)}</div>}
