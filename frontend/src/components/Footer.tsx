"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary/90 backdrop-blur-md py-12 px-6 text-light relative overflow-hidden">
      {/* Neon Glow Background Shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Branding / Logo */}
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-3xl md:text-4xl text-accent font-bold">
            DATRONYX
          </h1>
          <p className="text-neutral/70 text-sm md:text-base">
            Architecting Your Data's Future
          </p>
        </div>

        {/* Navigation / Links */}
        <div className="flex flex-col md:flex-row gap-6 text-sm md:text-base text-neutral/70">
          <Link
            href="https://www.linkedin.com/company/datronyx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </Link>

          <a
            href="mailto:info@datronyx.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>

          <Link
            href="/privacy"
            className="hover:text-accent transition-colors"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="hover:text-accent transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>

      {/* Copyright / Footer Bottom */}
      <div className="relative z-10 mt-10 border-t border-neutral/20 pt-4 text-neutral/50 text-sm text-center">
        &copy; {new Date().getFullYear()} DATRONYX. All rights reserved.
      </div>
    </footer>
  );
}
