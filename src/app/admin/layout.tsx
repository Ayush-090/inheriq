import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dark min-h-screen bg-[#050816] text-white">
      {children}
    </div>
  );
}
