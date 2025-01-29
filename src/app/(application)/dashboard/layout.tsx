'use client';

import { Navbar } from '@/components/custom-ui/Navbar';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!data?.session) {
      router.push('/login');
    }
  }, [data?.session, router]);

  if (!data?.session) {
    return null;
  }

  return (
    <>
      <Navbar links={[{ label: 'Dashboard', href: '/dashboard' }]} buttons={[{ label: 'Sign Out', href: '/auth/sign-out' }]} />
      <div className="p-4">{children}</div>
    </>
  );
}
