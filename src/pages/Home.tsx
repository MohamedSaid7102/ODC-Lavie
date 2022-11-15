import React, { useEffect, useRef, useState } from 'react';
import {
  Hero,
  CategoriesSection,
  BestSellerSection,
  BlogSection,
  AboutUs,
  MobileAppSection,
  Footer,
  Callout,
} from '@components/';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@redux/store';
import { hideCallout, showCallout } from '@redux/features/calloutSlice';
import { useOnNotIntersect } from '../hooks/useOnNotIntersect';
export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const isCalloutVisible = useSelector(
    (state: RootState) => state.callout.isCalloutVisible
  );
  const itemRef = useRef(null);

  useOnNotIntersect(
    itemRef,
    () => dispatch(showCallout()),
    () => {},
    'calloutShownOnce'
  );

  return (
    <>
      {/* Show callout incase it's visible */}
      {isCalloutVisible && <Callout />}
      <div className="relative max-w-[2000px] m-auto">
        {/* deoration */}
        <img
          ref={itemRef}
          src="/assets/images/home-bg-decoration.png"
          alt="decoration squares image"
          className="absolute top-[-90px] right-0 pointer-events-none"
        />
        {/* Content */}
        <Hero />
        <CategoriesSection />
        <BestSellerSection />
        <BlogSection />
        <AboutUs />
        <MobileAppSection />
        <Footer />
      </div>
    </>
  );
};
