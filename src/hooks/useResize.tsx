import React, { useEffect, useState } from 'react';

/**
 *
 * @returns Screen Width & Screen Height as a tuble [width, height], Everytime user resize the screen
 */
export const useResize = (cb?: Function) => {
  const [windowDimenion, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    if (cb !== undefined) cb();

    detectHW({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  return [windowDimenion.width, windowDimenion.height];
};
