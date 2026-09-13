import { getSeoSettings } from './data-store';
import { SITE_CONFIG } from './site-config';

export type SeoValues = {
  pageTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  index: boolean;
  follow: boolean;
};

const defaultSeo: Record<string, SeoValues> = {
  home: {
    pageTitle: 'Inheriq — Your AI Workforce. Available 24/7.',
    metaDescription:
      'Hire AI employees for sales, marketing, HR, support, and finance. Built for Indian MSMEs with multilingual automation and 24/7 coverage.',
    keywords: 'AI workforce, Indian MSME, AI agents, business automation, Inheriq',
    canonicalUrl: `${SITE_CONFIG.url}/`,
    ogTitle: 'Inheriq — Your AI Workforce. Available 24/7.',
    ogDescription: 'One dashboard. Five AI employees. Built for Indian businesses that want faster growth and smoother operations.',
    ogImage: `${SITE_CONFIG.url}/og-image.png`,
    twitterTitle: 'Inheriq — Your AI Workforce. Available 24/7.',
    twitterDescription: 'Hire AI employees for sales, marketing, HR, support, and finance — all in one place.',
    twitterImage: `${SITE_CONFIG.url}/og-image.png`,
    index: true,
    follow: true,
  },
  contact: {
    pageTitle: 'Contact Inheriq | Book a Demo & Get Started',
    metaDescription: 'Contact Inheriq to schedule a demo or get help building your AI workforce.',
    keywords: 'contact Inheriq, AI demo, business automation support',
    canonicalUrl: `${SITE_CONFIG.url}/contact`,
    ogTitle: 'Contact Inheriq',
    ogDescription: 'Let’s build your AI workforce and get your next growth opportunity moving.',
    ogImage: `${SITE_CONFIG.url}/og-image.png`,
    twitterTitle: 'Contact Inheriq',
    twitterDescription: 'Get in touch to book a demo or start your free trial.',
    twitterImage: `${SITE_CONFIG.url}/og-image.png`,
    index: true,
    follow: true,
  },
  demo: {
    pageTitle: 'Book a Demo | Inheriq',
    metaDescription: 'See Inheriq in action with a 15-minute demo tailored to your business.',
    keywords: 'book demo, AI workforce demo, Inheriq demo',
    canonicalUrl: `${SITE_CONFIG.url}/demo`,
    ogTitle: 'See Your AI Workforce in Action',
    ogDescription: 'Book a personalized demo and learn how Inheriq can help your business grow smarter.',
    ogImage: `${SITE_CONFIG.url}/og-image.png`,
    twitterTitle: 'Book a Demo | Inheriq',
    twitterDescription: 'Book a demo to see how AI employees can transform your business operations.',
    twitterImage: `${SITE_CONFIG.url}/og-image.png`,
    index: true,
    follow: true,
  },
};

export async function getSeoSettingsForPage(page: string) {
  const saved = await getSeoSettings();
  const source = saved[page] || {};
  return {
    ...(defaultSeo[page] || defaultSeo.home),
    ...source,
  } as SeoValues;
}
