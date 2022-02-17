import React from 'react';

const Footer = () => {
  return (
    <footer
      className="w-full bg-tertiary-200 py-12 absolute b-0 mt-auto"
      aria-labelledby="footer-heading"
    >
      <div className="section-center  flex items-center justify-center">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="text-tertiary-500 section-center  text-center">
          <div className="flex flex-wrap items-baseline lg:justify-center">
            <span className="mt-2 text-base font-semibold ">
              Copyright © 2021 - {new Date().getFullYear()}
              <a
                href="https://namdeveloper.netlify.app"
                className="mx-2 text-secondary-900 hover:text-secondary-600"
                rel="noopener noreferrer"
              >
                @NamLabs
              </a>
              
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
