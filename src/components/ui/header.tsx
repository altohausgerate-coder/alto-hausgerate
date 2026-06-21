"use client";

import { Home, ShoppingBag, Tag, Info, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const navTabs = [
  { title: "Ana Səhifə", icon: Home },
  { title: "Məhsullar", icon: ShoppingBag },
  { type: "separator" as const },
  { title: "Brendlər", icon: Tag },
  { title: "Haqqımızda", icon: Info },
  { title: "Əlaqə", icon: Phone },
];

export function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 shrink-0">
          Alto. Hausgerate
        </span>
        <ExpandableTabs
          tabs={navTabs}
          activeColor="text-pink-600"
          className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hidden sm:flex"
        />
        <ThemeToggle />
      </div>
    </header>
  );
}
