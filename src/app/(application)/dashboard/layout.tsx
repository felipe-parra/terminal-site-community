'use client';

import { useSession } from '@/lib/auth-client';

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  const { data } = useSession();
  if (!data) {
    return <div>Loading...</div>;
  } else if (!data.user) {
    return <div>Unauthorized</div>;
  }
  return <>{children}</>;
}
