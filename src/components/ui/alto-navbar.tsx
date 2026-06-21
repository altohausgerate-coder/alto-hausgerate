"use client"

import { Home, ShoppingBag, Tag, Info, Phone } from "lucide-react"
import { NavBar } from "./tubelight-navbar"

const navItems = [
  { name: "Ana Səhifə", url: "/", icon: Home },
  { name: "Məhsullar", url: "/products", icon: ShoppingBag },
  { name: "Brendlər", url: "/brands", icon: Tag },
  { name: "Haqqımızda", url: "/about", icon: Info },
  { name: "Əlaqə", url: "/contact", icon: Phone },
]

export function AltoNavBar() {
  return <NavBar items={navItems} />
}
