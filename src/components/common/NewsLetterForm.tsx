import React from 'react';

export const NewsLetterForm: React.FC = () => {
  return (
    <form action="#!" className="flex flex-col gap-3">
      <label
        className="uppercase text-primary font-bold max-w-[15rem]  sm:text-left sm:m-0"
        htmlFor="news-letter-email"
      >
        SIGN FOR OUR NEWLETEER AND GET A 10% DISCOUNT
      </label>
      <div className="flex gap-4 flex-wrap justify-start">
        <input
          type="email"
          name="email"
          id="news-letter-email"
          className="border-b-2 border-solid border-slate-400 bg-transparent focus-visible-state"
          placeholder="Your Email Address"
        />
        <button
          type="submit"
          className="uppercase text-slate-400 border border-solid bottom-[2px] border-slate-400 px-8 py-2 hover:bg-slate-400 hover:text-black focus-visible-state"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
