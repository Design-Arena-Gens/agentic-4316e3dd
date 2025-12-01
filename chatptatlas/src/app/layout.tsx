import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatPT Atlas",
  description:
    "Discover high-leverage prompt territories curated for strategy, creativity, research, and automation workflows.",
  openGraph: {
    title: "ChatPT Atlas",
    description:
      "Navigate prompt territories engineered for decision clarity and creative acceleration.",
    url: "https://agentic-4316e3dd.vercel.app",
    siteName: "ChatPT Atlas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatPT Atlas",
    description:
      "A living map of prompt playbooks for product leaders, strategists, and operators.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
