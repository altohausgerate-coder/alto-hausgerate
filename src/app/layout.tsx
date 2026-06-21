import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AltoNavBar } from "@/components/ui/alto-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alto Hausgerate",
  description: "Azərbaycanın aparıcı məişət texnikası distribütoru",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="az" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950">
        {/* Top bar: logo + theme toggle */}
        <div className="w-full px-6 h-14 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800">
          <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">Alto<span className="text-pink-600">.</span></span>
          <ThemeToggle />
        </div>
        {/* Tubelight navbar */}
        <AltoNavBar />
        {/* Page content — top padding to clear the floating navbar on desktop */}
        <main className="flex-1 pt-20 pb-24 sm:pb-0">
          {children}
        </main>
      </body>
    </html>
  );
}
