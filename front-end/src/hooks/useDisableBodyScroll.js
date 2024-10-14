import { useEffect } from 'react';

const useDisableBodyScroll = () => {
  useEffect(() => {
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = originalOverflow;
    };
  }, []);
};

export default useDisableBodyScroll;