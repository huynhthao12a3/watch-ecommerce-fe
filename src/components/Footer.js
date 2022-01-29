import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-tertiary-900 flex items-center justify-center"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className=" py-12  text-tertiary-300 section-center">
        <div className="flex flex-wrap items-baseline lg:justify-center">
          <span className="mt-2 text-base font-semibold ">
            Copyright © 2021 - {new Date().getFullYear()}
            <a
              href="https://namdeveloper.netlify.app"
              className="mx-2 text-tertiary-100 hover:text-tertiary-300"
              rel="noopener noreferrer"
            >
              @NamLabs
            </a>
            . Since 1990
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
