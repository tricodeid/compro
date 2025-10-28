import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indonesia Clients',
};

export default function IndonesiaClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

