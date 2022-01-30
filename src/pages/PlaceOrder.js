import React from 'react';
import CartTotals from '../components/CartTotals';
import Steps from '../components/Steps';

const PlaceOrder = () => {
  return (
    <section className=" min-h-screen ">
      <Steps />
      <div className="section-center py-12 md:py-16 lg:py-20 ">
        <h2 className="mb-12 text-5xl font-bold ">Order Summary</h2>
        <div className="flex flex-wrap items-center -mx-4">
          {/* Order summary */}
          <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4 ">
            {/* Address */}
            <div className="mb-12 py-6 border-b border-gray-200">
              <p className="text-xl font-bold mb-5">Shipping Address</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                sed perspiciatis adipisci quo aliquam nulla harum, est facilis
                odit ab?
              </p>
            </div>
            {/* Payment method*/}
            <div className="mb-12 py-6 border-b border-gray-200">
              <p className="text-xl font-bold mb-5">Payment method</p>
              <p>Palpal</p>
            </div>
            {/* Order items */}
            <div className="mb-12 py-6 border-gray-200">
              <p className="text-xl font-bold mb-5">Order Items</p>
              {/* Item 1*/}
              <div className="flex flex-wrap justify-between items-center mb-6 md:mb-3">
                {/* Img, name*/}
                <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                  <div className="flex -mx-4 flex-wrap items-center">
                    <div className="flex items-center justify-center w-20 h-20 md:w-10 md:h-10 bg-gray-100">
                      <img
                        className="h-full object-contain"
                        src="yofte-assets/images/waterbottle.png"
                        alt=""
                      />
                    </div>
                    <div className="w-2/3 px-4">
                      <h3 className="mb-2 text-sm font-bold font-heading">
                        BRILE water filter carafe
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
                  <p>2 x $29.89 = $123234</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex flex-wrap justify-between items-center mb-6 md:mb-3">
                {/* Img, name*/}
                <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                  <div className="flex -mx-4 flex-wrap items-center">
                    <div className="flex items-center justify-center w-20 h-20 md:w-10 md:h-10 bg-gray-100">
                      <img
                        className="h-full object-contain"
                        src="yofte-assets/images/waterbottle.png"
                        alt=""
                      />
                    </div>
                    <div className="w-2/3 px-4">
                      <h3 className="mb-2 text-sm font-bold font-heading">
                        BRILE water filter carafe
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
                  <p>2 x $29.89 = $123234</p>
                </div>
              </div>
            </div>
          </div>

          {/*Cart totals*/}
          <CartTotals />
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
