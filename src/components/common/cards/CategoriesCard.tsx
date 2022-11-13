import React from 'react';
import { CategoriesCardProps } from '@myTypes/types';

export const CategoriesCard: React.FC<CategoriesCardProps> = ({
  imgSrc,
  imgAlt,
  title,
}) => {
  return (
    <div className="flex flex-col gap-4 items-center w-max">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="max-w-[100px] sm:max-w-[200px]"
      />
      <h3 className="font-bold text-lg sm:text-2xl text-center">{title}</h3>
    </div>
  );
};
