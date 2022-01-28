import React from 'react';
import { Link } from 'react-router-dom';
const ListProduct = ({ product }) => {
  const { id, image, name, price, description } = product;
  return (
    <article
      key={id}
      class="flex w-full mx-auto overflow-hidden rounded-lg shadow-sm mb-10 items-center bg-tertiary-50"
    >
      {/* Product img */}
      <div class="w-1/4 bg-cover">
        <img src={image} alt="" className="object-cover" />
      </div>

      {/* Product info */}
      <div class="w-3/4 p-4 md:p-4 ">
        <h2 class="text-2xl font-bold text-gray-800 ">{name}</h2>

        <p class="mt-2 text-sm text-gray-600 ">
          {description}
        </p>

        <div class="flex justify-between mt-3 items-center">
          <h2 class="text-lg font-bold text-gray-700  md:text-xl">
            ${price}
          </h2>
          <Link to={`/product/${id}`} class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700 ">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ListProduct;
