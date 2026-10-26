import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartAI — نبني الذكاء الذي يدفع أعمالك للأمام",
  description: "SmartAI تبني حلولاً رقمية ذكية تجمع بين البرمجيات والذكاء الاصطناعي.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
