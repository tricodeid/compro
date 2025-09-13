'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '@/context/LoadingContext';

export const RouteChangeListener = () => {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // On new page load (route change complete), set loading to false
    setIsLoading(false);
  }, [pathname, searchParams, setIsLoading]);

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      // Check if it's an internal link and not a hash link
      if (href && href.startsWith('/') && !href.startsWith('/#')) {
        setIsLoading(true);
      }
    };

    const handleMutation = () => {
      const anchorElements = document.querySelectorAll('a[href]');
      anchorElements.forEach(anchor => {
        // Remove old listener to prevent duplicates
        (anchor as any).__handleClick = handleAnchorClick;
        anchor.removeEventListener('click', (anchor as any).__handleClick);
        anchor.addEventListener('click', (anchor as any).__handleClick);
      });
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Initial run
    handleMutation();

    return () => {
      mutationObserver.disconnect();
    };
  }, [setIsLoading]);

  return null; // This component does not render anything
};
