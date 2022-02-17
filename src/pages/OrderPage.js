import React, { useState, useEffect } from 'react';
import Steps from '../components/Steps';
import { useUserContext } from '../context/user_context';
import { useOrderContext } from '../context/order_context';
import { useCartContext } from '../context/cart_context';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { formatPrice } from '../utils/helpers';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';

const OrderPage = ({ match, history }) => {
  const orderId = match.params.id;
  const [sdkReady, setSdkReady] = useState(false);

  const { loginUser } = useUserContext();

  const {
    // orderDetails
    orderDetails,
    orderDetailLoading,
    orderDetailsError,
    getOrderDetails,

    // Pay
    payOrder,
    orderPaySuccess,
    orderPayLoading,

    payOrderReset,

    // deliver

    deliverOrderLoading,
    deliverOrderSuccess,
    deliverOrderError,
    deliverOrder,
    deliverOrderReset,
  } = useOrderContext();
  const { clearCart } = useCartContext();

  useEffect(() => {
    if (!loginUser) {
      history.push('/login');
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/v1/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (
      !orderDetails ||
      orderPaySuccess ||
      deliverOrderSuccess ||
      orderDetails._id !== orderId
    ) {
      payOrderReset();
      deliverOrderReset();
      getOrderDetails(orderId);
      clearCart();
    } else if (orderDetails?.status === 'pending') {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [orderId, orderPaySuccess, deliverOrderSuccess, orderDetails, history]);

  const paymentSuccessHandler = paymentResult => {
    payOrder(orderId, paymentResult);
  };

  const deliverHandler = () => {
    deliverOrder(orderDetails);
  };

  return orderDetailLoading ? (
    <Loading />
  ) : orderDetailsError ? (
    <Error title={orderDetailsError} />
  ) : (
    <section className=" min-h-screen bg-amber-50">
      <Steps />
      <div className="section-center py-12 md:py-16 lg:py-20 ">
        <h2 className="mb-12 text-2xl md:text-3xl lg:text-4xl font-bold break-words">
          Order : {orderDetails?._id}
        </h2>
        <div className="flex flex-wrap items-center -mx-4">
          {/* Order summary */}
          <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4 ">
            {/* Address */}
            <div className=" py-6 border-b border-gray-200">
              <p className="text-xl font-bold mb-5">Shipping Address</p>
              {orderDetails && (
                <p className="mb-3">
                  <strong>Name: </strong> {orderDetails.user?.name}
                </p>
              )}
              {orderDetails && (
                <p className="mb-3">
                  <strong>Email: </strong>{' '}
                  <a href={`mailto:${orderDetails?.user?.email}`}>
                    {orderDetails?.user?.email}
                  </a>
                </p>
              )}
              {orderDetails && (
                <p className="capitalize mb-3">
                  <strong>Address: </strong>
                  {orderDetails.shippingAddress.address},
                  {orderDetails.shippingAddress.city},
                  {orderDetails.shippingAddress.postalCode},
                  {orderDetails.shippingAddress.country}
                </p>
              )}
              {orderDetails && orderDetails.isDelivered ? (
                <p className="capitalize bg-amber-100">
                  <strong>Delivered on: </strong> {orderDetails.deliveredAt}
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

              {orderDetails && (
                <p className="capitalize mb-3">
                  <strong>Payment method: </strong>
                  {orderDetails.paymentMethod}
                </p>
              )}
              {orderDetails && orderDetails.status === 'paid' ? (
                <p className="capitalize bg-amber-100">
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
              {orderDetails?.orderItems.length < 1 ? (
                <p>Order is empty</p>
              ) : (
                <div>
                  {orderDetails?.orderItems.map((order, index) => {
                    const {
                      image,
                      name,
                      amount,

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
                              <h3 className="mb-2 text-sm font-bold">{name}</h3>
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
                  {orderDetails && formatPrice(orderDetails.subtotal)}
                </span>
              </div>

              <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                <span className="font-bold text-lg">Shipping</span>
                <span className="text-xl font-bold text-secondary-200">
                  {orderDetails && formatPrice(orderDetails.shipping_fee)}
                </span>
              </div>

              <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                <span className="font-bold text-lg">Tax</span>
                <span className="text-xl font-bold  text-secondary-200">
                  {orderDetails && formatPrice(orderDetails.tax)}
                </span>
              </div>

              <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                <span className="font-bold text-2xl">Total</span>
                <span className="text-xl font-bold  text-secondary-200">
                  {orderDetails && formatPrice(orderDetails.total)}
                </span>
              </div>

              {/* PalPal btn */}
              {orderDetails && orderDetails.status !== 'paid' && (
                <div className="w-full">
                  {orderPayLoading && <Loading />}

                  {!sdkReady ? (
                    <Loading />
                  ) : (
                    <PayPalButton
                      amount={orderDetails.total / 100}
                      onSuccess={paymentSuccessHandler}
                    />
                  )}
                </div>
              )}
              {/* PalPal btn end*/}

              {/* Mark as delivered btn */}
              {loginUser &&
                orderDetails &&
                loginUser.role === 'admin' &&
                orderDetails.status === 'paid' &&
                !orderDetails.isDelivered && (
                  <div>
                    {deliverOrderLoading ? (
                      <Loading />
                    ) : deliverOrderError ? (
                      <div className="bg-red-200 rounded-lg">
                        <Error title={deliverOrderError} />
                      </div>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="relative inline-block px-4 py-2 font-medium group"
                          onClick={deliverHandler}
                        >
                          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                          <span className="relative text-black group-hover:text-white">
                            Mark As Delivered
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
