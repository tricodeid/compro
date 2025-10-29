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
      const clickedElement = event.target as HTMLElement | null;
      
      if (!clickedElement) return;
      
      const anchor = clickedElement.closest('a[href]') as HTMLAnchorElement | null;

      if (anchor && anchor.href) {
        const href = anchor.getAttribute('href') || '';
        const currentPath = window.location.pathname;
        const linkTarget = anchor.getAttribute('target');

        // Check for internal, non-hash link, not the same page, and not opening in new tab
        if (linkTarget === '_blank') {
          return; // Don't show loading for links that open in new tab
        }
        
        if (href.startsWith('/') && !href.startsWith('/#') && href !== currentPath) {
          setIsLoading(true);
        }
      }
    };

    // Handle browser back/forward navigation
    const handlePopState = () => {
      // Stop any ongoing loading spinner
      setIsLoading(false);

      // If returning to pages that should refresh (to avoid stuck states), reload
      const path = window.location.pathname;
      if (path === '/' || path === '/news') {
        // Defer reload slightly to let history state settle
        setTimeout(() => {
          try {
            window.location.reload();
          } catch (_) {
            // ignore
          }
        }, 0);
      }
    };

    document.addEventListener('click', handleLinkClick);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [setIsLoading]);

  return null; // This component does not render anything
};