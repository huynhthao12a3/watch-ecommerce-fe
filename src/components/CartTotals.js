import React from 'react';
import { Link } from 'react-router-dom';

const CartTotals = ({ name, to }) => {
  return (
    <div className="w-full xl:w-4/12 px-4">
      <div className="p-6 md:p-12 bg-black text-secondary-400">
        <h2 className="mb-6 text-4xl font-bold font-heading ">Cart totals</h2>
        <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
          <span className="font-bold text-lg">Subtotal</span>
          <span className="text-xl font-bold font-heading text-secondary-200">
            $89.67
          </span>
        </div>
        <h4 className="mb-2 font-bold text-left text-lg">Shipping</h4>
        <div className="flex mb-2 justify-between items-center">
          <span className="">Next day</span>
          <span className="text-xl font-bold font-heading text-secondary-200">
            $11.00
          </span>
        </div>
        <div className="flex mb-10 justify-between items-center">
          <span className="">Shipping to United States</span>
          <span className="text-xl font-bold font-heading ">-</span>
        </div>
        <div className="flex mb-10 justify-between items-center">
          <span className="text-2xl font-bold font-heading ">Order total</span>
          <span className="text-xl font-bold font-heading text-secondary-200">
            $100.67
          </span>
        </div>
        <Link to={to}>
          <button className="block w-full py-4 bg-secondary-500 hover:bg-secondary-200 hover:text-secondary-900 text-center  font-bold font-heading uppercase rounded-md transition duration-200 text-secondary-50">
            {name}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotals;
