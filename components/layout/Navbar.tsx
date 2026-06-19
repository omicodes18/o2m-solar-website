"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-solar-navy-light text-solar-green-light font-bold text-lg border border-emerald-500/20">
            S
          </span>
          <span className="font-bold text-white text-lg tracking-tight group-hover:text-solar-green-light transition-colors">
            {COMPANY.name}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-solar-green-light ${
                  pathname === link.href
                    ? "text-solar-green-light"
                    : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center rounded-lg bg-solar-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-solar-green-dark transition-colors"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-solar-navy-light"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-emerald-500/10 bg-background/95 px-4 py-4">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    pathname === link.href ? "text-solar-green-light" : "text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-lg bg-solar-green px-5 py-3 text-white font-semibold"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
