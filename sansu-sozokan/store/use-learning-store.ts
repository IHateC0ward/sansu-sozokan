"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type LearningState = {
 points:number; level:number; streak:number; completedMissionIds:string[]; progress:Record<string,number>;
 addPoints:(value:number)=>void; completeMission:(id:string,reward:number)=>void; setProgress:(key:string,value:number)=>void; reset:()=>void;
};
const initial = { points:1280, level:8, streak:7, completedMissionIds:["m1"], progress:{ fractions:72, geometry:54, logic:61, speed:80 } };
export const useLearningStore = create<LearningState>()(persist((set)=>({
 ...initial,
 addPoints:(value)=>set((s)=>({ points:s.points+value })),
 completeMission:(id,reward)=>set((s)=>s.completedMissionIds.includes(id)?s:{ points:s.points+reward, completedMissionIds:[...s.completedMissionIds,id] }),
 setProgress:(key,value)=>set((s)=>({ progress:{...s.progress,[key]:Math.max(0,Math.min(100,value))} })),
 reset:()=>set(initial)
}),{name:"sansu-sozokan-learning"}));
