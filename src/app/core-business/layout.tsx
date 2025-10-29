import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Core Business',
};

export default function CoreBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

