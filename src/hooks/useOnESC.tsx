import React, { useCallback, useEffect } from 'react';

export const useOnESC = (cb: Function) => {
  const escFunction = useCallback((event: any) => {
    if (event.key === 'Escape') {
      cb();
    }
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', escFunction);
    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, []);
};
