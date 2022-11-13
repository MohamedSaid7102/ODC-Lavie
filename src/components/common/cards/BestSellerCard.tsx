import { BestSellerCardProps } from '@myTypes/types';
import React from 'react';

export const BestSellerCard: React.FC<BestSellerCardProps> = ({
  imgAlt,
  imgSrc,
  price,
  title,
}) => {
  return (
    <div className="flex flex-col gap-4 items-start w-max h-max">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="max-w-[200px] sm:max-w-[400px]"
      />
      <div className="w-[100%]">
        <h3 className="font-bold text-lg sm:text-2xl uppercase">{title}</h3>
        <span className="font-medium">{price}</span>
      </div>
    </div>
  );
};
