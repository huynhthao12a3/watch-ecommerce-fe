import React from 'react';
import { formatPrice } from '../utils/helpers';

const OrderItem = ({ name, amount, price,image }) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-6 md:mb-3">
      {/* Img, name*/}
      <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
        <div className="flex -mx-4 flex-wrap items-center">
          <div className="flex items-center justify-center w-20 h-20 md:w-10 md:h-10 bg-gray-100">
            <img
              className="h-full object-contain"
              src={image}
              alt={name}
            />
          </div>
          <div className="w-2/3 px-4">
            <h3 className="mb-2 text-sm font-bold">{name}</h3>
          </div>
        </div>
      </div>

      {/* Subtotal */}
      <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
        <p>{formatPrice(amount * price)}</p>
      </div>
    </div>
  );
};

export default OrderItem;
