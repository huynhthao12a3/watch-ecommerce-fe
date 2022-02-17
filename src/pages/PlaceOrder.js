import React, { useEffect } from 'react';
import OrderItem from '../components/OrderItem';
import Steps from '../components/Steps';
import { useCartContext } from '../context/cart_context';
import { useOrderContext } from '../context/order_context';
import { useUserContext } from '../context/user_context';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import Loading from '../components/Loading';
import Error from '../components/Error';

const PlaceOrder = ({ history }) => {
  const {
    cart,
    shippingAddress,
    paymentMethod,
    total_amount,
    shipping_fee,
    tax,
  } = useCartContext();

  const {
    createdOrder,
    createOrderLoading,
    createOrderError,
    createOrder,
    createOrderSuccess,
    orderCreateReset,
  } = useOrderContext();

  const { userDetailsReset, loginUser } = useUserContext();
  if (!shippingAddress.address) {
    history.push('/shipping');
  } else if (!paymentMethod) {
    history.push('/payment');
  }

  const placeOrderHandler = () => {
    createOrder({
      items: cart,
      shipping_fee: +shipping_fee,
      tax: +tax,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod,
    });
  };

  useEffect(() => {
    if (createOrderSuccess) {
      history.push(`/order/${createdOrder?._id}`);
      userDetailsReset();
      orderCreateReset();
    }
  }, [history, createOrderSuccess]);

  return (
    <section className=" min-h-screen bg-amber-50">
      <Steps step1 step2 step3 step4 />
      <div className="section-center py-12 md:py-16 lg:py-20 ">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Order summary */}
          <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4 ">
            {/* Address */}
            <div className=" py-6 border-b border-gray-200">
              <p className="text-xl font-bold mb-5">Shipping Address</p>
              <p>
                <strong>Address:</strong>
                {shippingAddress.address}, {shippingAddress.city}{' '}
                {shippingAddress.postalCode}, {shippingAddress.country}
              </p>
            </div>
            {/* Payment method*/}
            <div className=" py-6 border-b border-gray-200">
              <p className="text-xl font-bold mb-5">Payment method</p>
              <p>
                <strong>Method: </strong>
                {paymentMethod}
              </p>
            </div>
            {/* Order items */}
            <div className=" py-6 border-gray-200">
              <p className="text-xl font-bold mb-5">Order Items</p>
              {cart?.length < 1 ? (
                <p>Your cart is empty</p>
              ) : (
                cart.map(item => {
                  return <OrderItem key={item.id} {...item} />;
                })
              )}
            </div>
          </div>

          {/* Cart totals */}
          <div className="w-full xl:w-4/12 px-4">
            <div className="p-6 md:p-12 bg-tertiary-500 text-secondary-400">
              <h2 className="mb-6 text-4xl font-bold">Order Summary</h2>
              <div className="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                <span className="font-bold text-lg">Order items</span>
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
              <div className="flex mb-10 justify-between items-center">
                <span className="text-2xl font-bold  ">Total</span>
                <span className="text-xl font-bold  text-secondary-200">
                  {formatPrice(total_amount + shipping_fee)}
                </span>
              </div>
              {createOrderLoading && (
                <div className="flex mb-10 justify-center items-center">
                  <Loading />
                </div>
              )}

              {createOrderError && (
                <div className="flex mb-10 justify-center items-center bg-red-300 rounded-lg">
                  <Error title={createOrderError} />
                </div>
              )}

              {loginUser ? (
                <button
                  className="block w-full py-4 bg-secondary-500 hover:bg-secondary-200 hover:text-secondary-900 text-center  font-bold uppercase rounded-md transition duration-200 text-secondary-50"
                  disabled={cart.length < 1}
                  onClick={placeOrderHandler}
                >
                  Place order
                </button>
              ) : (
                <Link to="/login">
                  <button className="block w-full py-4 bg-secondary-500 hover:bg-secondary-200 hover:text-secondary-900 text-center  font-bold  uppercase rounded-md transition duration-200 text-secondary-50">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
          {/* Cart totals End */}
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
