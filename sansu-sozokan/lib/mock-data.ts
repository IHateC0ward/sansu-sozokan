import { Badge, GalleryWork, Mission } from "@/types";
export const missions: Mission[] = [
 { id:"m1", title:"分数クイズを3問クリア", reward:30, done:true },
 { id:"m2", title:"図形アートを1つ保存", reward:50, done:false },
 { id:"m3", title:"ボーダー先生のヒントを読む", reward:10, done:false }
];
export const badges: Badge[] = [
 { id:"b1", label:"分数ルーキー", icon:"◆" }, { id:"b2", label:"図形デザイナー", icon:"⬡" }, { id:"b3", label:"7日連続", icon:"⚡" }
];
export const works: GalleryWork[] = [
 { id:"g1", title:"三角形の宇宙", author:"Mika", likes:128, colors:["#6c63ff","#35d0ba","#ffcf5c"] },
 { id:"g2", title:"対称モンスター", author:"Ren", likes:94, colors:["#ff6b8a","#8d86ff","#43c7ff"] },
 { id:"g3", title:"円のまち", author:"Sora", likes:76, colors:["#35d0ba","#ffcf5c","#ff8d5c"] }
];
