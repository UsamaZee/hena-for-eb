'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/components/layout/logo1.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: '#fdf8f0', borderBottom: '1px solid var(--color-border)' }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="group">
          <img src={Logo.src} width={120} alt="HENA For EB Schools" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/why-am-i-running" className="nav-link-primary">
            Why I'm Running
          </Link>
          <Link href="#get-in-touch" className="nav-link">
            Get In Touch
          </Link>
          <a href="#donate" className="nav-link-donate">
            Donate
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span style={{ backgroundColor: 'var(--color-text)' }} className={`block w-6 h-px transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span style={{ backgroundColor: 'var(--color-text)' }} className={`block w-6 h-px transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span style={{ backgroundColor: 'var(--color-text)' }} className={`block w-6 h-px transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }} className="md:hidden">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="nav-link py-2">
              Home
            </Link>
            <Link href="/why-am-i-running" className="nav-link-primary py-2">
              Why I'm Running
            </Link>
            <Link href="/get-in-touch" className="nav-link py-2">
              Get In Touch
            </Link>
            <a href="#donate" className="nav-link-donate py-2 w-fit">
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
