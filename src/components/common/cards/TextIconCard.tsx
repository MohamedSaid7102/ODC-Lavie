import React, { ReactElement } from 'react';

type TextIconCardProps = {
  prefixText?: ReactElement<HTMLElement>;
  imgSrc: string;
  imgAlt: string;
  text: string;
};

export const TextIconCard: React.FC<TextIconCardProps> = ({
  prefixText,
  imgSrc,
  imgAlt,
  text,
}) => {
  return (
    <div className="flex flex-col items-center gap-[1rem] sm:items-start">
      <img src={imgSrc} alt={imgAlt} className="max-w-[100px]" />
      <p className="uppercase sm:max-w-[350px]  sm:text-left">
        {prefixText && prefixText}
        {text}
      </p>
    </div>
  );
};
