'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaXmark } from 'react-icons/fa6';
import Logo from '@/components/layout/logo2.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const donateTrigger = useRef<HTMLButtonElement | null>(null);
  const donateDialog = useRef<HTMLDivElement | null>(null);
  const menuButton = useRef<HTMLButtonElement | null>(null);
  const mobileMenu = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (!mobileMenu.current?.contains(target) && !menuButton.current?.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isDonateModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const fallbackMenuButton = menuButton.current;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDonateModalOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !donateDialog.current) return;

      const focusableElements = donateDialog.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      requestAnimationFrame(() => {
        const focusTarget = donateTrigger.current?.isConnected ? donateTrigger.current : fallbackMenuButton;
        focusTarget?.focus();
      });
    };
  }, [isDonateModalOpen]);

  const openDonateModal = (event: MouseEvent<HTMLButtonElement>) => {
    donateTrigger.current = event.currentTarget;
    setIsMenuOpen(false);
    setIsDonateModalOpen(true);
  };

  const closeDonateModal = () => {
    setIsDonateModalOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--color-surface)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(9,79,11,0.06)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="group">
          <Image src={Logo} width={160} alt="HENA For EB Schools" className="h-auto w-36 md:w-40" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/why-am-i-running" className="nav-link">
            Why I&apos;m Running
          </Link>
          <Link href="/get-in-touch" className="nav-link">
            Get In Touch
          </Link>
          <button type="button" onClick={openDonateModal} className="nav-link-donate cursor-pointer">
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span style={{ backgroundColor: 'var(--color-text)' }} className={`block w-6 h-px transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span style={{ backgroundColor: 'var(--color-text)' }} className={`block w-6 h-px transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span style={{ backgroundColor: 'var(--color-text)' }} className={`block w-6 h-px transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div ref={mobileMenu} style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }} className="md:hidden">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="nav-link py-2">
              Home
            </Link>
            <Link href="/why-am-i-running" className="nav-link py-2">
              Why I&apos;m Running
            </Link>
            <Link href="/get-in-touch" className="nav-link py-2">
              Get In Touch
            </Link>
            <button type="button" onClick={openDonateModal} className="nav-link-donate py-2 w-fit cursor-pointer">
              Donate
            </button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isDonateModalOpen && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center bg-primary-dark/75 px-6 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDonateModal}
          >
            <motion.div
              ref={donateDialog}
              role="dialog"
              aria-modal="true"
              aria-labelledby="donate-modal-title"
              aria-describedby="donate-modal-description"
              className="relative w-full max-w-lg border border-border bg-surface px-7 py-9 text-left shadow-xl sm:px-10 sm:py-11"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeDonateModal}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-text-muted transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Close donation message"
                autoFocus
              >
                <FaXmark className="h-5 w-5" aria-hidden="true" />
              </button>

              <p className="section-number mb-4 pr-10">Support the campaign</p>
              <div className="mb-6 h-1 w-14 bg-accent" />
              <h2 id="donate-modal-title" className="editorial-heading mb-4 text-3xl leading-tight sm:text-4xl">
                Online donations are coming soon
              </h2>
              <p id="donate-modal-description" className="mb-8 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
                We&apos;re preparing a secure way for you to support Hena&apos;s campaign. Please check back shortly.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/get-in-touch" onClick={closeDonateModal} className="btn btn-primary">
                  Get In Touch
                </Link>
                <button type="button" onClick={closeDonateModal} className="btn btn-secondary">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
