import React, { ReactNode, useEffect } from 'react';

/**
 * Will invoke cb() as soon as you exceed 50% of targeted ref, and it's not fully intersection with
 * @param ref Ref Object to observe
 * @param notIntersectingCB To invoke incase view port is not intersecting with 'ref'
 * @param intersectingCB To invoke incase view port is intersecting with 'ref'
 * @param sessionStorageName Optional to pass, Incase you want to store if the cb() invoked once or not in session storage
 */
export const useOnNotIntersect = (
  ref: any,
  notIntersectingCB: Function,
  intersectingCB?: Function,
  sessionStorageName?: string
) => {
  const option: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callbackFunction, option);

  function callbackFunction(
    entries: IntersectionObserverEntry[],
    myObserver: IntersectionObserver
  ) {
    const [entry] = entries;
    const isCalloutShownOnce =
      sessionStorageName !== undefined &&
      sessionStorage.getItem(sessionStorageName);
    if (
      !entry.isIntersecting &&
      isCalloutShownOnce !== undefined &&
      !isCalloutShownOnce
    ) {
      notIntersectingCB();
      sessionStorageName !== undefined &&
        sessionStorage.setItem(sessionStorageName, 'true');
      myObserver.unobserve(entry.target);
    } else {
      if (intersectingCB) intersectingCB();
    }
  }

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, option]);
};
