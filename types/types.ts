import { ReactElement } from 'react';

export type NavbarItemType = {
  id: number;
  dom: JSX.Element;
  navigatable: boolean;
  path?: string;
};

export type NavbarListType = Array<NavbarItemType>;

// Categories Section
export type CategoriesCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
};

export type CategoriesCardsDataType = CategoriesCardProps[];

// Best seller section
export type BestSellerCardProps = {
  title: string;
  price: string;
  imgSrc: string;
  imgAlt: string;
};

export type BestSellerCardsDataType = BestSellerCardProps[];

// Blog section

export type BlogCardProps = {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  desc: string;
  time: string;
};

export type BlogCardsDataType = BlogCardProps[];

// Footer

export type linksList = ReactElement<HTMLElement>[];

export type FooterSectionProps = {
  heading: string;
  listOfLinks: linksList;
};
