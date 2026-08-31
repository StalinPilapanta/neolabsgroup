"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="text-foreground text-sm font-semibold tracking-tight">
            NeoLabs Group
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-xs text-muted hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#about" className="text-xs text-muted hover:text-foreground transition-colors">
              Nosotros
            </a>
            <a href="#contact" className="text-xs text-muted hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-muted hover:text-foreground"
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {isOpen ? (
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Servicios
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
