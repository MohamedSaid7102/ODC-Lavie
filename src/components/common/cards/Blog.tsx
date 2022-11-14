import { BlogCardProps } from '@myTypes/types';
import React from 'react';

export const Blog: React.FC<BlogCardProps> = ({
  imageSrc,
  imageAlt,
  heading,
  desc,
  time,
}) => {
  return (
    <div className="flex flex-col gap-[0.5rem] sm:min-w-[25rem] min-w-[15rem] shadow-xl h-max rounded-lg sm:pb-[1rem] pb-[3rem]">
      <img src={imageSrc} alt={imageAlt} />
      <div className="px-[1rem] flex flex-col gap-[0.6rem]">
        <span className="text-primary font-light">{time}</span>
        <h3 className="font-bold text-lg sm:text-2xl">{heading}</h3>
        <p className="text-slate-500 sm:text-xl">{desc}</p>
      </div>
    </div>
  );
};
