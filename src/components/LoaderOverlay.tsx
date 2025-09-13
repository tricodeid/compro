'use client';

import React from 'react';
import { useLoading } from '@/context/LoadingContext';
import Spinner from '@/components/ui/Spinner';

const LoaderOverlay = () => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-[9999]">
      <Spinner />
    </div>
  );
};

export default LoaderOverlay;
