import React from 'react';
import { AppleBtn, PlaystoreBtn } from '@components/';

export const MobileAppSection: React.FC = () => {
  return (
    <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] pl-7 pr-4 about-us-break-1:flex-row">
      {/* Left */}
      <div className="relative w-max max-w-[20rem] sm:max-w-[30rem] m-auto">
        <img
          src="/assets/images/two-phones.png"
          alt="meeting people"
          className="sm:w-[100%] min-w-[200px] sm:scale-150"
        />
      </div>
      {/* Right */}
      <div className="flex flex-col gap-[1rem] sm:gap-[2rem] max-w-[50rem]">
        <h2 className="font-[900] text-4xl sm:text-7xl relative w-max leading-[1.8]">
          Mobile{' '}
          <span className="absolute sm:top-[35px] top-[30px] right-[10px] font-extralight w-12 sm:w-max overflow-hidden">
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
          <br />
          Application
        </h2>
        <div className="sm:pl-7 pl-1">
          <p className="sm:text-xl text-slate-500 ">
            You can install La Vie mobile application and enjoy with new
            featurs, earn more points and get discounts Also you can scan QR
            codes in your plants' pots so that you can get discount on
            everything in the website up to 70%
          </p>
          <span className="font-bold">install by</span>
          {/* Install buttons */}
          <div className="mt-[1rem] flex flex-col gap-[1rem] sm:flex-row">
            <PlaystoreBtn />
            <AppleBtn />
          </div>
        </div>
      </div>
    </div>
  );
};
