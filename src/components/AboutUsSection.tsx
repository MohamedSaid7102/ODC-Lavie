import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] pl-7 pr-2  about-us-break-1:flex-row">
      {/* Left */}
      <div className="flex flex-col gap-[1rem] sm:gap-[2rem] max-w-[40rem]">
        <h2 className="font-[900] text-4xl sm:text-7xl relative w-max">
          About us{' '}
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
        <p className="sm:text-xl text-slate-500 sm:pl-7 pl-1">
          Welcome to La Vie, your number one source for planting. We're
          dedicated to giving you the very best of plants, with a focus on
          dependability, customer service and uniqueness. Founded in 2020, La
          Vie has come a long way from its beginnings in a home office our
          passion for helping people and give them some advices about how to
          plant and take care of plants. We now serve customers all over Egypt,
          and are thrilled to be a part of the eco-friendly wing{' '}
        </p>
      </div>
      {/* Right */}
      <div className="relative w-max max-w-[20rem] sm:max-w-[30rem] m-auto">
        <img
          src="/assets/images/meeting.png"
          alt="meeting people"
          className="w-[85%] sm:w-[100%] min-w-[200px]"
        />
        <img
          src="/assets/images/frame-rect.png"
          alt="meeting people"
          className="absolute w-[85%] sm:w-[100%] min-w-[200px] top-[1rem] left-[-1rem] z-[-1]"
        />
      </div>
    </div>
  );
};
