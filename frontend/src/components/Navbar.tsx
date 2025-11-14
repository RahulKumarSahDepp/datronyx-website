"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "/aboutus" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Solutions", href: "/solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-primary/30 backdrop-blur-xl border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/Datronyx Logo.png"
            alt="DATRONYX Logo"
            width={40}
            height={40}
            priority
            className="rounded-full object-cover drop-shadow-[0_0_25px_cyan] animate-pulse" // <-- makes it circular
          />
          <span className="text-2xl font-bold tracking-wider text-accent">
            DATRONYX
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-neutral hover:text-accent transition-colors tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-accent text-3xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-primary/50 backdrop-blur-xl border-t border-accent/10 px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 text-neutral hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
