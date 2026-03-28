'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Hotels', href: '/hotels' },
  { label: 'Residences', href: '/properties' },
  { label: 'Dining', href: '/dining' },
  { label: 'Shopping', href: '/shopping' },
  { label: 'Membership', href: '/membership' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled ? 'bg-obsidian/90 border-b border-gold-700/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-bold tracking-widest gold-text">
                LUX<span className="italic">E</span>ury
              </span>
              <span className="font-inter text-[0.45rem] tracking-[0.35em] text-gold-400/70 uppercase mt-0.5">
                Ultra Exclusive Access
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-xs tracking-[0.18em] uppercase transition-all duration-300 relative group ${
                  pathname === link.href
                    ? 'text-gold-400'
                    : 'text-ivory/60 hover:text-ivory'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/membership"
              className="btn-gold px-5 py-2.5 rounded-sm text-xs"
            >
              Request Access
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-ivory transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-ivory transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-ivory transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-obsidian/98 border-t border-gold-700/20 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-inter text-sm tracking-[0.18em] uppercase transition-colors ${
                pathname === link.href ? 'text-gold-400' : 'text-ivory/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/membership"
            onClick={() => setMenuOpen(false)}
            className="btn-gold px-5 py-3 rounded-sm text-xs text-center mt-2"
          >
            Request Access
          </Link>
        </div>
      </div>
    </header>
  );
}
