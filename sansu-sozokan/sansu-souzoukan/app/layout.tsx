import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "算数創造館｜創造力で、最難関校の壁を突破する。",
  description: "難関中学受験算数専門塾。思考力・分析力・伴走力で、本質を見抜く力を育てます。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
