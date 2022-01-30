import React from 'react';
import { Link } from 'react-router-dom';
import Btn from './Btn';

const ShippingForm = () => {
  return (
    <div className="flex-col items-center justify-center mt-20">
      <form className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto">
        <div className="mb-6">
          {/* Address */}
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter address"
            required=""
          />
        </div>

        {/* City */}
        <div className="mb-6">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter city"
            required=""
          />
        </div>

        {/* Postal Code */}
        <div className="mb-6">
          <label
            htmlFor="postalCode"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter postal code"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter country"
            required=""
          />
        </div>
        <Link to="/payment">
          <Btn name="Next" />
        </Link>
      </form>
    </div>
  );
};

export default ShippingForm;
