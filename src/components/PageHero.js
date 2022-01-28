import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
  return (
    <div className="w-full bg-tertiary-500 h-24 flex items-center">
      <nav class="rounded-md w-full max-w-7xl mx-auto px-4 py-5 md:px-24 lg:px-8">
        <ol class="list-reset flex text-3xl">
          <li>
            <Link
              to="/"
              class="text-tertiary-200
            hover:text-tertiary-100"
            >
              Home
            </Link>
          </li>
          {product && <Link to="/products">
            <span class="text-gray-500 mx-2">/ Products</span>
          </Link>}
          <li class="text-gray-500">{title}</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageHero;
