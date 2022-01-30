import React from 'react';
import Btn from './Btn';
import { cart } from '../data';
import CartTotals from './CartTotals';

const CartContent = () => {
  return (
    <>
      <section className="section-center text-center py-14">
        <h2 className="mb-10 text-4xl md:text-5xl font-bold ">
          Your cart
        </h2>

        <div className="flex flex-wrap items-center -mx-4">
          {/* Your Cart */}
          <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
            {/* Products columns*/}
            <div className="hidden lg:flex w-full">
              <div className="w-full lg:w-3/6 text-center">
                <h4 className="mb-6 font-bold  text-gray-500">
                  Description
                </h4>
              </div>
              <div className="w-full lg:w-1/6">
                <h4 className="mb-6 font-bold  text-gray-500">
                  Price
                </h4>
              </div>
              <div className="w-full lg:w-1/6 text-center">
                <h4 className="mb-6 font-bold  text-gray-500">
                  Quantity
                </h4>
              </div>
              <div className="w-full lg:w-1/6 text-right">
                <h4 className="mb-6 font-bold  text-gray-500">
                  Subtotal
                </h4>
              </div>
            </div>

            {/* Products rows*/}
            <div className="mb-12  border-t  border-gray-200">
              {cart?.map(product => {
                const { amount, color, id, image, max, name, price } = product;
                return (
                  <div className="flex flex-wrap items-center -mx-4  border-b py-5">
                    {/* Img, info*/}
                    <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0 ">
                      <div className="flex -mx-4 flex-wrap items-center">
                        <div className="w-full md:w-1/3 px-4 mb-3">
                          <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                            <img
                              className="h-full object-contain"
                              src={image}
                              alt={name}
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-2/3 px-4  text-left">
                          <h3 className="mb-2 text-xl font-bold ">
                            {name}
                          </h3>
                          <p className="text-gray-500">{name}</p>
                          <button className="text-secondary-700 text-base w-4 h-4 md:w-5 md:h-5 mt-3 md:mt-4 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Price*/}
                    <div className="hidden lg:block lg:w-2/12 px-4">
                      <p className="text-lg text-tertiary-500 font-bold">
                        ${price}
                      </p>
                    </div>

                    {/* Amount btns*/}
                    <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                      <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                        <button className="py-2 hover:text-gray-700">
                          <svg
                            width="12"
                            height="2"
                            viewbox="0 0 12 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x="12"
                                width="2"
                                height="12"
                                transform="rotate(90 12 0)"
                                fill="currentColor"
                              ></rect>
                            </g>
                          </svg>
                        </button>
                        <p className="w-12 m-0 px-2 py-4 text-center  border-0 focus:ring-transparent focus:outline-none rounded-md">
                          {amount}
                        </p>
                        <button className="py-2 hover:text-gray-700">
                          <svg
                            width="12"
                            height="12"
                            viewbox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x="5"
                                width="2"
                                height="12"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="12"
                                y="5"
                                width="2"
                                height="12"
                                transform="rotate(90 12 5)"
                                fill="currentColor"
                              ></rect>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
                      <p className="text-lg text-tertiary-500 font-bold">
                        ${price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between flex-wrap items-center lg:-mb-4">
              <Btn name="Clear cart" />
              <Btn name="Back to shop" />
            </div>
          </div>

          {/* Cart totals */}
          <CartTotals name="Proceed to checkout" to="/shipping" />
        </div>
      </section>
    </>
  );
};

export default CartContent;
