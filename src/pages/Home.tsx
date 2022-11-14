import React from 'react';
import {
  Hero,
  CategoriesSection,
  BestSellerSection,
  BlogSection,
  AboutUs,
  MobileAppSection,
  Footer,
} from '@components/';

export const Home: React.FC = () => {
  return (
    <>
      <div className="relative max-w-[2000px] m-auto">
        {/* deoration */}
        <img
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
