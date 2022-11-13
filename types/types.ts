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

export type categoriesCardsDataType = CategoriesCardProps[];

// Best seller section
export type BestSellerCardProps = {
  title: string;
  price: string;
  imgSrc: string;
  imgAlt: string;
};

export type bestSellerCardsDataType = BestSellerCardProps[];
