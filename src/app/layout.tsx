import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const displayFont = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Down Boy | Train Your AI",
  description: "Your AI is smart. Too smart. Eager. Too eager. Teach it when to sit. Train your AI through conversation, not settings menus.",
  keywords: ["AI training", "personal AI", "AI boundaries", "Jabrium"],
  openGraph: {
    title: "Down Boy | Train Your AI",
    description: "Your AI is smart. Too smart. Eager. Too eager. Teach it when to sit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
