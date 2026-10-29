'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, LogIn } from 'lucide-react';
import Link from 'next/link';
import { DemoModal } from '@/components/ui/DemoModal';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Product', href: '#product-preview', isAnchor: true },
  { label: 'AI Employees', href: '#ai-employees', isAnchor: true },
  { label: 'How It Works', href: '#how-it-works', isAnchor: true },
  { label: 'Solutions', href: '#use-cases', isAnchor: true },
  { label: 'Pricing', href: '#pricing', isAnchor: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Scroll spy for active section
      const sections = ['product-preview', 'ai-employees', 'how-it-works', 'use-cases', 'pricing'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileOpen(false);
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#070B18]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]'
            : 'bg-white/70 dark:bg-[#070B18]/70 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/60'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-[72px]">
          {/* Logo without OS */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl p-1"
            aria-label="Inheriq Home"
          >
            <img
              src="/inheriq-logo.svg"
              alt="Inheriq"
              className="h-9 w-9 rounded-xl object-contain shadow-sm border border-slate-200/80 dark:border-slate-800 group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white flex items-center">
              Inheriq
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 dark:bg-slate-900/80 p-1 rounded-full border border-slate-200/60 dark:border-slate-800">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/80 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <Link
              href="/admin/login"
              className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              Sign In
            </Link>

            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="btn-primary text-xs px-4 py-2.5 shadow-sm shadow-blue-500/20"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden pt-[72px]"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#0E1325] border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-2xl rounded-b-3xl space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                <Link
                  href="/admin/login"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <LogIn className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  Sign In to Dashboard
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                  className="btn-primary w-full py-3.5 text-sm justify-center shadow-lg shadow-blue-500/20"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Interactive Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultAgent="all"
      />
    </>
  );
}
