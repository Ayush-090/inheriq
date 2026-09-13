import { redirect } from 'next/navigation';
import { requireAdminSession } from '@/lib/admin-auth';
import { SeoEditor } from '@/components/admin/SeoEditor';
import { getSeoSettingsForPage } from '@/lib/seo';

export default async function SeoPage() {
  const user = await requireAdminSession();

  if (!user) {
    redirect('/admin/login');
  }

  const homeSettings = await getSeoSettingsForPage('home');
  const contactSettings = await getSeoSettingsForPage('contact');
  const demoSettings = await getSeoSettingsForPage('demo');

  return (
    <SeoEditor
      initialPages={{
        home: homeSettings,
        contact: contactSettings,
        demo: demoSettings,
      }}
    />
  );
}
