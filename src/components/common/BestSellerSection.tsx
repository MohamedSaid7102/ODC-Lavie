import React from 'react';
import { BestSellerCard } from '@components/';
import { bestSellerCardsData } from '@utils/data';

interface BestSellerSectionProps {}

export const BestSellerSection: React.FC<BestSellerSectionProps> = ({}) => {
  return (
    <>
      <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] pl-7">
        <h2 className="font-[900] text-4xl sm:text-7xl relative w-max">
          Best seller{' '}
          <span className="absolute sm:top-[-30px] sm:right-[-4.5rem] top-[-15px] right-[-3rem] font-extralight">
            __
          </span>
        </h2>
        <div
          className="up-down-items-side-scroller flex flex-row flex-nowrap gap-10 overflow-x-auto px-[3rem]
				sm:min-h-[40rem] odd:mt-12 focus-visible-state"
        >
          {bestSellerCardsData.map(({ imgAlt, imgSrc, title, price }) => (
            <BestSellerCard
              imgAlt={imgAlt}
              imgSrc={imgSrc}
              title={title}
              price={price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
