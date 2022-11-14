import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { NewsLetterForm, TextIconCard } from '@components/';
import { FooterSectionProps } from '@myTypes/types';
import { sectionsLinks, contactLinks } from '@utils/data';

const FooterSection: React.FC<FooterSectionProps> = ({
  heading,
  listOfLinks,
}) => {
  return (
    <>
      <div className="flex flex-col justify-end gap-[0.5rem] w-max  sm:text-left">
        <h4 className="uppercase text-primary font-bold">{heading}</h4>
        <ul className="flex flex-col gap-[1rem]">
          {listOfLinks.map((link, key) => (
            <li key={key}>{link}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="pl-4 sm:pl-0 bg-footerBg text-slate-400 mt-[5rem] sm:px-[5rem] py-[2rem] sm:py-[6rem] flex flex-col items-start sm:flex-row flex-wrap justify-around gap-[2rem]">
      {/* Section 1 */}
      <TextIconCard
        prefixText={<span className="text-primary">LA VIE</span>}
        text="We're dedicated to giving you the very best of plants, with a
          focus on dependability"
        imgSrc="/assets/images/logo.png"
        imgAlt="logo"
      />
      {/* Section 2 */}
      <FooterSection heading="sections" listOfLinks={sectionsLinks} />
      {/* Section 3 */}
      <FooterSection heading="contact us" listOfLinks={contactLinks} />
      {/* News litter  & Social media*/}
      <div className="flex flex-col gap-4 sm:gap-16">
        {/* News letter */}
        <NewsLetterForm />
        {/* Social contacts */}
        <div className="flex flex-col items-start gap-5">
          <h4 className="uppercase text-primary font-bold text-left sm:m-0">
            our social
          </h4>
          <div className="flex flex-row flex-wrap gap-6 w-max">
            {/* Facebook */}
            <Link to="" className="focus-visible-state">
              <img
                src="/assets/images/footer-facebook-icon.png"
                alt="facebook logo"
              />
            </Link>
            {/* Instagram */}
            <Link to="" className="focus-visible-state">
              <img
                src="/assets/images/footer-instagram-icon.png"
                alt="instagram logo"
              />
            </Link>
            {/* Twitter */}
            <Link to="" className="focus-visible-state">
              <img
                src="/assets/images/footer-twitter-icon.png"
                alt="twitter logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
