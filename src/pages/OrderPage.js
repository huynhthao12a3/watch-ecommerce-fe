import React from 'react';
import Steps from '../components/Steps';
import { order } from '../data';

const OrderPage = () => {
  return (
    <section className=" min-h-screen bg-amber-50">
      <Steps />
      <div className="section-center py-12 md:py-16 lg:py-20 ">
        <h2 className="mb-12 text-5xl font-bold ">Order {order?._id} </h2>
        <div className="flex flex-wrap items-center -mx-4">
          {/* Order summary */}
          <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4 ">
            {/* Address */}
            <div className=" py-6 border-b border-gray-200">
              <p className="text-xl font-bold mb-5">Shipping Address</p>
              <p className="capitalize mb-3">
                <strong>Name: </strong> {order.user.name}
              </p>
              <p className="capitalize mb-3">
                <strong>Address: </strong>
                {order.shippingAddress.address},{order.shippingAddress.city},
                {order.shippingAddress.postalCode},
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <p className="capitalize">
                  <strong>Delivered on: </strong> {order.deliveredAt}
                </p>
              ) : (
                <p className="capitalize text-tertiary-500 bg-red-200">
                  <strong>Not Delivered</strong>
                </p>
              )}
            </div>
            {/* Payment method*/}
            <div className="py-6 border-b border-gray-200">
              <p className="text-xl font-bold mb-5">Payment method</p>
              <p className="capitalize mb-3">
                <strong>Payment method: </strong>
                {order.paymentMethod}
              </p>
              {order.status === 'paid' ? (
                <p className="capitalize">
                  <strong>Status: </strong>Paid
                </p>
              ) : (
                <p className="capitalize text-tertiary-500 bg-red-200">
                  <strong> Not Paid</strong>
                </p>
              )}
            </div>
            {/* Order items */}
            <div className="py-6 border-gray-200">
              <p className="text-xl font-bold mb-5">Order Items</p>
              {order.orderItems.length < 1 ? (
                <p>Order is empty</p>
              ) : (
                <div>
                  {order.orderItems.map((order, index) => {
                    const {
                      image,
                      name,
                      amount,
                      total,
                      subTotal,
                      tax,
                      status,
                      price,
                    } = order;
                    return (
                      <div
                        key={index}
                        className="flex flex-wrap justify-between items-center mb-6 md:mb-3"
                      >
                        {/* Img, name*/}
                        <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                          <div className="flex -mx-4 flex-wrap items-center">
                            <div className="flex items-center justify-center w-20 h-20 md:w-10 md:h-10 bg-gray-100">
                              <img
                                className="h-full object-contain"
                                src={image}
                                alt="name"
                              />
                            </div>
                            <div className="w-2/3 px-4">
                              <h3 className="mb-2 text-sm font-bold font-heading">
                                {name}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Subtotal */}
                        <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
                          <p>
                            {amount} x ${price} = ${amount * price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/*Cart totals*/}
          <div className="w-full xl:w-4/12 px-4">
            <div className="p-6 md:p-12 bg-tertiary-500 text-secondary-400">
              <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                ORDER SUMMARY
              </h2>
              <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                <span className="font-bold text-lg">Items</span>
                <span className="text-xl font-bold text-secondary-200">
                  ${order.subtotal}
                </span>
              </div>

              <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                <span className="font-bold text-lg">Shipping</span>
                <span className="text-xl font-bold text-secondary-200">
                  ${order.shipping_fee}
                </span>
              </div>

              <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                <span className="font-bold text-lg">Tax</span>
                <span className="text-xl font-bold  text-secondary-200">
                  ${order.tax}
                </span>
              </div>

              <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                <span className="font-bold text-2xl">Total</span>
                <span className="text-xl font-bold  text-secondary-200">
                  ${order.total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
