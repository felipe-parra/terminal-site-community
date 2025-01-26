'use client';

import { useSession } from '@/lib/auth-client';

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  const { data } = useSession();

  return <>{children}</>;
}
