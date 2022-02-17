import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const FeaturedProduct = ({ product, bg }) => {
  const { id, name, price, image } = product;

  return (
    <Link to={`/product/${id}`} key={id} className="group relative">
      <div
        className={`w-full min-h-80 ${
          bg ? bg : 'bg-neutral-800'
        } aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none flex items-center`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-primary-700">
            <p>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </p>
          </h3>
        </div>
        <p className="font-medium text-primary-900">{formatPrice(price)}</p>
      </div>
    </Link>
  );
};

export default FeaturedProduct;
