import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Sparkles size={32} aria-hidden="true" />
      <p className="eyebrow">404 · Page not found</p>
      <h1>This page took a day off.</h1>
      <p>Let’s get you back to your business.</p>
      <Link href="/" className="button button-primary"><ArrowLeft size={17} /> Back to Inheriq</Link>
    </main>
  );
}