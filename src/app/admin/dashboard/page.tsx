import { redirect } from 'next/navigation';
import { requireAdminSession } from '@/lib/admin-auth';
import { AdminDashboardClient } from '@/components/admin/AdminDashboardClient';
import { getSubmissions } from '@/lib/data-store';

export default async function AdminDashboardPage() {
  const user = await requireAdminSession();

  if (!user) {
    redirect('/admin/login');
  }

  const submissions = await getSubmissions();

  return <AdminDashboardClient initialSubmissions={submissions} />;
}
