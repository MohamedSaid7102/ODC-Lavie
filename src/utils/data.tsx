import {
  BestSellerCardsDataType,
  BlogCardsDataType,
  CategoriesCardsDataType,
  linksList,
  NavbarListType,
} from '@myTypes/types';
import React from 'react';
import { Link } from 'react-router-dom';

export const loginNavBarItems: NavbarListType = [
  {
    id: 0,
    dom: <img src="/assets/images/logo.png" alt="logo" />,
    path: '/',
    navigatable: true,
  },
  {
    id: 1,
    dom: <span>Home</span>,
    path: '/',
    navigatable: true,
  },
  {
    id: 2,
    dom: <span>Shop</span>,
    path: '/shop',
    navigatable: true,
  },
  {
    id: 3,
    dom: <span>Blog</span>,
    path: '/blogs',
    navigatable: true,
  },
  {
    id: 4,
    dom: <span>About</span>,
    path: '/about',
    navigatable: true,
  },
  {
    id: 5,
    dom: <span>Community</span>,
    path: '/community',
    navigatable: true,
  },
  {
    id: 6,
    dom: (
      <button className="primary-btn" tabIndex={-1}>
        Sign Up
      </button>
    ),
    path: '/signup',
    navigatable: true,
  },
];

// Categories Section
export const categoriesCardsData: CategoriesCardsDataType = [
  {
    title: 'Tools',
    imgSrc: '/assets/images/p4.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Seeds',
    imgSrc: '/assets/images/p5.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Low Light Plants',
    imgSrc: '/assets/images/p6.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Tools',
    imgSrc: '/assets/images/p4.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Seeds',
    imgSrc: '/assets/images/p5.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Low Light Plants',
    imgSrc: '/assets/images/p6.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Tools',
    imgSrc: '/assets/images/p4.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Seeds',
    imgSrc: '/assets/images/p5.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Low Light Plants',
    imgSrc: '/assets/images/p6.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Tools',
    imgSrc: '/assets/images/p4.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Seeds',
    imgSrc: '/assets/images/p5.png',
    imgAlt: 'Plant',
  },
  {
    title: 'Low Light Plants',
    imgSrc: '/assets/images/p6.png',
    imgAlt: 'Plant',
  },
];

// Best seller Section
export const bestSellerCardsData: BestSellerCardsDataType = [
  {
    title: 'spider plant',
    imgSrc: '/assets/images/p9.png',
    imgAlt: 'Plant',
    price: '100 EGP',
  },
  {
    title: 'juniper bonsai',
    imgSrc: '/assets/images/p7.png',
    imgAlt: 'Plant',
    price: '190 EGP',
  },
  {
    title: 'snake plant',
    imgSrc: '/assets/images/p8.png',
    imgAlt: 'Plant',
    price: '180 EGP',
  },
  {
    title: 'spider plant',
    imgSrc: '/assets/images/p9.png',
    imgAlt: 'Plant',
    price: '100 EGP',
  },
  {
    title: 'juniper bonsai',
    imgSrc: '/assets/images/p7.png',
    imgAlt: 'Plant',
    price: '190 EGP',
  },
  {
    title: 'snake plant',
    imgSrc: '/assets/images/p8.png',
    imgAlt: 'Plant',
    price: '180 EGP',
  },
  {
    title: 'spider plant',
    imgSrc: '/assets/images/p9.png',
    imgAlt: 'Plant',
    price: '100 EGP',
  },
  {
    title: 'juniper bonsai',
    imgSrc: '/assets/images/p7.png',
    imgAlt: 'Plant',
    price: '190 EGP',
  },
  {
    title: 'snake plant',
    imgSrc: '/assets/images/p8.png',
    imgAlt: 'Plant',
    price: '180 EGP',
  },
  {
    title: 'spider plant',
    imgSrc: '/assets/images/p9.png',
    imgAlt: 'Plant',
    price: '100 EGP',
  },
  {
    title: 'juniper bonsai',
    imgSrc: '/assets/images/p7.png',
    imgAlt: 'Plant',
    price: '190 EGP',
  },
  {
    title: 'snake plant',
    imgSrc: '/assets/images/p8.png',
    imgAlt: 'Plant',
    price: '180 EGP',
  },
];

// Blog Section
export const blogCardsData: BlogCardsDataType = [
  {
    imageSrc: '/assets/images/p10.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p1.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p3.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p10.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p1.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p3.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p10.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p1.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p3.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p10.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p1.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
  {
    imageSrc: '/assets/images/p3.png',
    imageAlt: 'Plant',
    heading: '5 simple tips treat plant',
    desc: 'leaf, in botany, any usually flattened green outgrowth from the stem of',
    time: '2 days ago',
  },
];

// Footer

export const sectionsLinks: linksList = [
  <Link className="focus-visible-state" to="home">
    Home
  </Link>,
  <Link className="focus-visible-state" to="category">
    Category
  </Link>,
  <Link className="focus-visible-state" to="new">
    New
  </Link>,
  <Link className="focus-visible-state" to="requestToBeSeller">
    Request To Be Seller
  </Link>,
];

export const contactLinks: linksList = [
  <a className="focus-visible-state" href="tel:+201096787085">
    phone: +201096787085
  </a>,
  <a className="focus-visible-state" href="tel:+01244522323">
    phone: +01244522323
  </a>,
  <a
    href="mailto:mohamedshelfwork@gmail.com"
    className="flex flex-col sm:flex-row flex-wrap justify-start focus-visible-state"
  >
    <span>Email:</span> <span>mohamedshelfwork@gmail.com</span>
  </a>,
  <a href="#!" className="focus-visible-state">
    <span>6 October city ,Giza ,egypt</span>
  </a>,
];
