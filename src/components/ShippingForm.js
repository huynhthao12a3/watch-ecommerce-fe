import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import Btn from './Btn';

const ShippingForm = () => {
  const history = useHistory();
  const { saveShippingAddress } = useCartContext();

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    saveShippingAddress({ address, city, postalCode, country });
    history.push('/payment');
  };

  return (
    <div className="flex-col items-center justify-center mt-20 pb-10">
      <form
        className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto"
        onSubmit={submitHandler}
      >
        {/* Address */}
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Address
          </label>
          <input
            type="text"
            placeholder="Enter address"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>

        {/* City */}
        <div className="mb-6">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            City
          </label>
          <input
            type="text"
            placeholder="Enter city"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>

        {/* Postal Code */}
        <div className="mb-6">
          <label
            htmlFor="postalCode"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Postal Code
          </label>
          <input
            type="text"
            placeholder="Enter postal code"
            id="postalCode"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
          />
        </div>

        {/* Country */}
        <div className="mb-6">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Country
          </label>
          <input
            type="text"
            placeholder="Enter country"
            id="country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
        </div>

        <Btn name="Next" type="submit" />
      </form>
    </div>
  );
};

export default ShippingForm;
