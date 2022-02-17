import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';

const CartTotals = ({ name, to }) => {
  const { total_amount, shipping_fee} = useCartContext();
  const { loginUser } = useUserContext();
  return (
    <div className="w-full xl:w-4/12 px-4">
      <div className="p-6 md:p-12 bg-tertiary-500 text-secondary-400">
        <h2 className="mb-6 text-4xl font-bold">Cart totals</h2>
        <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
          <span className="font-bold text-lg">Subtotal</span>
          <span className="text-xl font-bold  text-secondary-200">
            {formatPrice(total_amount)}
          </span>
        </div>
        <h4 className="mb-2 font-bold text-left text-lg">Shipping</h4>
        <div className="flex mb-2 justify-between items-center">
          <span className="">Next day</span>
          <span className="text-xl font-bold  text-secondary-200">
            {formatPrice(shipping_fee)}
          </span>
        </div>
        <div className="flex mb-10 justify-between items-center">
          <span className="">Shipping to United States</span>
          <span className="text-xl font-bold  ">-</span>
        </div>
        <div className="flex mb-10 justify-between items-center ">
          <span className="text-lg sm:text-2xl font-bold ">Order total</span>
          <span className="text-xl font-bold  text-secondary-200">
            {formatPrice(total_amount + shipping_fee)}
          </span>
        </div>
        {loginUser ? (
          <Link to={to}>
            <button className="block w-full py-4 bg-secondary-500 hover:bg-secondary-200 hover:text-secondary-900 text-center  font-bold  uppercase rounded-md transition duration-200 text-secondary-50">
              {name}
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="block w-full py-4 bg-secondary-500 hover:bg-secondary-200 hover:text-secondary-900 text-center  font-bold uppercase rounded-md transition duration-200 text-secondary-50">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartTotals;
