import React from 'react';
import { CategoriesCard } from '@components/';
import { categoriesCardsData } from '@utils/data';

export const CategoriesSection: React.FC = () => {
  return (
    <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] pl-7">
      <h2 className="font-[900] text-4xl sm:text-7xl relative w-max leading-[1.8]">
        Popular{' '}
        <span className="absolute sm:top-[-30px] top-[-15px] right-0 font-extralight">
          ___
        </span>
        <br />
        Categories
      </h2>
      <div className="flex flex-row flex-nowrap gap-10 overflow-x-auto px-10 focus-visible-state">
        {/* card */}
        {categoriesCardsData.map(({ imgSrc, imgAlt, title }) => (
          <CategoriesCard imgSrc={imgSrc} imgAlt={imgAlt} title={title} />
        ))}
      </div>
    </div>
  );
};
