import { redirect } from 'next/navigation';
import { requireAdminSession } from '@/lib/admin-auth';

export default async function AdminPage() {
  const user = await requireAdminSession();

  if (!user) {
    redirect('/admin/login');
  }

  redirect('/admin/dashboard');
}
