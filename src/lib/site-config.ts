export const SITE_CONFIG = {
  name: 'Inheriq',
  tagline: 'Your 24/7 AI Workforce Team',
  description:
    'Build and scale your small business with AI employees — smart 24/7 digital workers designed to answer calls, handle WhatsApp, book meetings, run marketing, track payments, and manage HR.',
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://inheriq.in',
  googleFormUrl:
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    process.env.GOOGLE_FORM_URL ||
    'https://forms.google.com',
};

export const PUBLIC_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'AI Employees', href: '/agents' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const getGoogleFormUrl = () => SITE_CONFIG.googleFormUrl;
