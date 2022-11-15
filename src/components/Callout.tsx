import React, { useCallback, useEffect, useRef } from 'react';
import { useResize } from '@hooks/useResize';
import { useDispatch } from 'react-redux';
import useOnLoseFocuse from '../hooks/useOnLoseFocuse';
import { hideCallout } from '@redux/features/calloutSlice';
import { useOnESC } from '@hooks/useOnESC';

export const Callout: React.FC = () => {
  const [width, height] = useResize();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  function hideCalloutPopup() {
    dispatch(hideCallout());
  }
  useOnESC(hideCalloutPopup);
  // Move the focus to popup on show
  useEffect(() => {
    if (inputRef !== null) inputRef.current?.focus();
    console.log(`hi`);
  }, []);

  return (
    <div className="fixed w-[100vw] h-[100vh] inset-0 z-50 flex items-center justify-center overscroll-contain">
      {/* Modal */}
      <div
        className="bg-transparentDark w-full h-full z-10 absolute"
        onClick={hideCalloutPopup}
      ></div>
      {/* Content */}
      <div
        className={`flex flex-${
          width > 649 ? 'row' : 'col'
        } capitalize bg-white m-4 rounded-lg overflow-hidden z-20`}
      >
        <div className="max-h-[300px] sm:max-h-[800px] sm:h-full overflow-hidden sm:overflow-visible">
          <img
            src="/assets/images/callout.png"
            alt="plants and soil and glavs image"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center items-center text-center gap-7 p-7">
          <header className="w-max ">
            <img src="/assets/images/logo.png" alt="logo" />{' '}
          </header>
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <h2 className="font-[Karantina] text-3xl tracking-wider sm:text-5xl">
                Get Seeds For Free
              </h2>
              <label htmlFor="addressInput">Enter Your Address</label>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Address"
                id="addressInput"
                className="w-full border-[#222] border-2 rounded-md px-4 py-3 focus-visible-state"
                ref={inputRef}
              />
              <div className="flex flex-col gap-3 sm:text-xl">
                <button
                  type="submit"
                  className="primary-btn smooth-transition py-4 focus-visible-state"
                >
                  Send
                </button>
                <button className="fade-btn smooth-transition py-4 focus-visible-state">
                  Save for later
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
