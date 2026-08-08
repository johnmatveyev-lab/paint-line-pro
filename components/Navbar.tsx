"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Paintbrush } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Our Process" },
  { href: "/partners", label: "Partners" },
  { href: "/visualizer", label: "AI Visualizer" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-navy-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform">
              <Paintbrush className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-navy-900 tracking-tight">
              Paint Line <span className="text-teal-500">Pro</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy-700 hover:text-teal-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/quote">
              <Button size="sm">Get Free Quote</Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-navy-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-96 border-t border-navy-100" : "max-h-0"
        )}
      >
        <div className="px-4 py-4 space-y-3 bg-white/95 backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-navy-800 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/quote" onClick={() => setOpen(false)}>
            <Button className="w-full mt-2">Get Free Quote</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
