'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/context/LoadingContext';

export const RouteChangeListener = () => {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Effect to stop loading when route change is complete
  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams, setIsLoading]);

  // Effect to start loading on link click using event delegation
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as Element;
      const anchor = target.closest('a[href]');

      if (anchor) {
        const href = anchor.getAttribute('href') || '';
        const currentPath = window.location.pathname;

        // Check for internal, non-hash link, and not the same page
        if (href.startsWith('/') && !href.startsWith('/#') && href !== currentPath) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [setIsLoading]);

  return null; // This component does not render anything
};