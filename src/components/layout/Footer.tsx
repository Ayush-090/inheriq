'use client';

import Link from 'next/link';
import { Mail, Phone, Users, ArrowUpRight, ShieldCheck } from 'lucide-react';

const FOOTER_SECTIONS = {
  Product: [
    { label: 'AI Employees', href: '#ai-employees', isAnchor: true },
    { label: 'Interactive Workflow', href: '#how-it-works', isAnchor: true },
    { label: 'Workforce Console', href: '#product-preview', isAnchor: true },
    { label: 'Solutions by Role', href: '#use-cases', isAnchor: true },
    { label: 'Pricing Plans', href: '#pricing', isAnchor: true },
  ],
  Platform: [
    { label: 'Admin Portal', href: '/admin/login' },
    { label: 'Book a Demo', href: '/demo' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'About Inheriq', href: '/about' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
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
    }
  };

  return (
    <footer className="bg-white dark:bg-[#070B18] border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="container-custom py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="Inheriq Home">
              <img
                src="/inheriq-logo.svg"
                alt="Inheriq logo"
                className="h-9 w-9 rounded-xl object-contain border border-slate-200 dark:border-slate-800 shadow-xs"
              />
              <span className="text-xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                Inheriq
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              The AI Workforce Operating System for startups and SMBs. Deploy specialized AI teammates for sales, customer support, HR, and finance while keeping people in control.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <a
                  href="mailto:admin@inheriq.in"
                  className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  admin@inheriq.in
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <div className="flex flex-wrap items-center gap-x-2">
                  <a href="tel:+916201328257" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium text-slate-800 dark:text-slate-200 transition-colors">
                    +91 6201328257
                  </a>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <a href="tel:+91931688410" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium text-slate-800 dark:text-slate-200 transition-colors">
                    +91 931688410
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Users className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                <span>Founders: Ayush Bhardwaj · Raghavendra Singh</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Human-in-the-Loop Governance · DPDP Compliant</span>
              </div>
            </div>
          </div>

          {/* Nav Categories */}
          {Object.entries(FOOTER_SECTIONS).map(([title, links]) => (
            <div key={title} className="space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        {link.href.startsWith('http') && (
                          <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Inheriq Technologies. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built for modern startups & SMBs</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
