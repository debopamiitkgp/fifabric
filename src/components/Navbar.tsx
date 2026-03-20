"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: "rgba(var(--bg-rgb, 10,15,28), 0.85)", borderColor: "var(--border)" }}>
      <div className="max-w-outer mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0 text-xl font-headline font-bold tracking-tight" style={{ color: "var(--text)" }}>
          <span style={{ color: "var(--accent)" }}>Fi</span>
          <span>Fabric</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/deals"
            className="text-nav uppercase font-medium tracking-widest hover:opacity-80 transition-opacity"
            style={{ color: "var(--text-muted)" }}
          >
            Deals
          </Link>
          <Link
            href="/frameworks"
            className="text-nav uppercase font-medium tracking-widest hover:opacity-80 transition-opacity"
            style={{ color: "var(--text-muted)" }}
          >
            Frameworks
          </Link>
          <Link
            href="/about"
            className="text-nav uppercase font-medium tracking-widest hover:opacity-80 transition-opacity"
            style={{ color: "var(--text-muted)" }}
          >
            About
          </Link>
          <button
            onClick={toggle}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:opacity-80 transition-opacity"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
