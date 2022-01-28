import React from 'react';
import { Link } from 'react-router-dom';

const NewProduct = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <Link to={`product/${id}`} key={id} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
    </Link>
  );
};


export default NewProduct;
