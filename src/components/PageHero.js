import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
  return (
    <div className="w-full bg-tertiary-500 h-24 flex items-center">
      <nav className="rounded-md w-full py-5 section-center">
        <ol className="list-reset flex text-3xl">
          <li>
            <Link
              to="/"
              className="text-tertiary-200
            hover:text-tertiary-100 mr-2"
            >
              Home
            </Link>
          </li>
          {product && (
            <Link to="/products">
              <span className="text-tertiary-200 hover:text-tertiary-100 mr-2">
                / Products
              </span>
            </Link>
          )}
          <li className="text-gray-500">/ {title}</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageHero;
