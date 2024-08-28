'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    handleRouteChange();
  }, [router]);

  return null;
};

export default ScrollToTop;
