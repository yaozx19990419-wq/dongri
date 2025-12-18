"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "首页" },
    { href: "/gallery", label: "画廊" },
    { href: "/guide", label: "攻略" },
    { href: "/download", label: "下载" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b-4 border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Snowflake className="w-6 h-6 text-primary" />
          <span className="hidden sm:inline">冬日狂想曲</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium hover:text-primary transition-colors px-3 py-2 border-2 border-transparent hover:border-border hover:bg-secondary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/download">立即下载</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 border-2 border-border"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-border bg-background">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 font-medium border-2 border-border hover:bg-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Button asChild className="w-full">
                <Link href="/download" onClick={() => setIsOpen(false)}>
                  立即下载
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
