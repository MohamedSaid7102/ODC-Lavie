import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavbarItem, MobileNavbar } from '@components/';
import { RootState } from '@redux/store';
// Hiding navbar logic
import useOnLoseFocuse from '@hooks/useOnLoseFocuse';
import { hideNavbar } from '@redux/features/navbarSlice';
import { useResize } from '@hooks/useResize';
import { NAVBAR_BREAKPOINT } from '@components/common/navbar/';

type NavbarItemType = {
  id: number;
  dom: JSX.Element;
  navigatable: boolean;
  path?: string;
};

type NavbarListType = Array<NavbarItemType>;
interface NavbarProps {
  list: NavbarListType;
}

export const Navbar: React.FC<NavbarProps> = ({ list }) => {
  const menueOpen = useSelector((state: RootState) => state.navbar.menueOpen);
  const dispatch = useDispatch();
  const navbarRef = useRef<HTMLElement | null>(null);

  useOnLoseFocuse(navbarRef, () => {
    dispatch(hideNavbar());
  });

  const hideMobileNav = () => menueOpen && dispatch(hideNavbar());

  const [windowWidth, windowHeight] = useResize(hideMobileNav); // pass hideMobileNav on resize

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 
      z-30 border-[1px] border-solid w-full bg-transparent backdrop-blur
      sm:border-none"
      >
        {/* Mobile nav */}
        {windowWidth < NAVBAR_BREAKPOINT && <MobileNavbar />}
        {/* Desktop nav */}
        <ul
          className={`
          ${
            windowWidth >= NAVBAR_BREAKPOINT
              ? 'h-max opacity-1 select-all pointer-events-auto'
              : menueOpen
              ? 'h-max'
              : 'opacity-0 h-0 select-none pointer-events-none'
          }
          transition-height duration-200
          max-w-[2000px] m-auto
          // Responsiveness
          sm:py-1
          flex flex-col items-center justify-around gap-2
          /* responsiveness */
          sm:flex-row sm:justify-around
          `}
        >
          {list.map((item) => (
            <NavbarItem item={item} key={item.id} />
          ))}
        </ul>
      </nav>
      {/* To push any other content down */}
      <span className="mb-[100px] block"></span>
    </>
  );
};
