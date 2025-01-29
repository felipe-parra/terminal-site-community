'use client';
import '@/global.scss';

import DefaultActionBar from '@/components/page/DefaultActionBar';
import { useSession } from '@/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  const { data } = useSession();
  const router = useRouter();

  if (data && data.user) {
    router.push('/dashboard');
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen relative py-8">
      <DefaultActionBar />
      {children}
    </main>
  );
}
