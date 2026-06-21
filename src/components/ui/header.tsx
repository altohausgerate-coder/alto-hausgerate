"use client"

import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Alto Hausgeräte
        </span>
        <ThemeToggle />
      </div>
    </header>
  )
}
