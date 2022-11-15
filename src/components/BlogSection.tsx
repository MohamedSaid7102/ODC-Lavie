import React from 'react';
import { Blog as BlogCard } from '@components/';
import { blogCardsData } from '@utils/data';

export const BlogSection: React.FC = () => {
  return (
    <>
      <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] pl-7">
        <h2 className="font-[900] text-4xl sm:text-7xl relative w-max">
          Best seller{' '}
          <span className="absolute sm:top-[40px] sm:right-[-100px] top-[35px] right-[10px] font-extralight w-9 sm:w-max overflow-hidden">
            <svg
              aria-hidden={true}
              width="96"
              height="4"
              viewBox="0 0 96 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.988281"
                y1="2"
                x2="95.0096"
                y2="2"
                stroke="black"
                stroke-width="4"
              />
            </svg>
          </span>
        </h2>
        <div
          className="flex flex-row flex-nowrap gap-10 overflow-x-auto px-[3rem]
		sm:min-h-[40rem] odd:mt-12 py-4 items-center focus-visible-state"
        >
          {blogCardsData.map(({ imageSrc, imageAlt, heading, desc, time }) => (
            <BlogCard
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              heading={heading}
              desc={desc}
              time={time}
            />
          ))}
        </div>
      </div>
    </>
  );
};
