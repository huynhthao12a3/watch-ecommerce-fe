import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Btn from '../components/Btn';
import PageHero from '../components/PageHero';
import SingleReview from '../components/SingleReview';
import Stars from '../components/Stars';
import { Link } from 'react-router-dom';

import { singleProducts } from '../data';

const SingleProductPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [title, setTitle] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const product = singleProducts[0];

  const {
    id,
    name,
    price,
    brand,
    category,
    featured,
    image,
    colors,
    description,
    stock,
    shipping,
    reviews,
    numReviews,
    averageRating,
  } = product;
  return (
    <>
      <PageHero title={name} product />

      <section className=" py-10 section-center">
        {/* Product details */}
        <div className=" mx-auto flex flex-wrap ">
          <img
            alt="ecommerce"
            className=" w-full h-full sm:w-2/3 sm:h-2/3 lg:w-1/2 lg:h-1/2 object-cover object-center rounded border border-gray-200 "
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
            </h1>

            <Stars />
            <p className="leading-relaxed mt-4">{description}</p>
            <div className="flex-col mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex mb-3 ">
                <span className="mr-3">Color</span>
                {colors?.map((color, index) => {
                  return (
                    <button
                      style={{ backgroundColor: color }}
                      key={index}
                      className={`border-2 border-gray-300 rounded-full mr-1 w-6 h-6 focus:outline-none`}
                    ></button>
                  );
                })}
              </div>

              <div className="flex justify-start items-center w-32 text-2xl lg:text-3xl py-5">
                <button
                  className="w-4"
                  type="button"
                  // onClick={decrease}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M18 12H6" />
                  </svg>
                </button>
                <h2 className="amount mx-8">1</h2>
                <button
                  className="w-4"
                  type="button"
                  // onClick={increase}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
              <Link
                to="/cart"
                className="flex ml-auto text-white bg-secondary-800 border-0 py-2 px-6 focus:outline-none hover:bg-secondary-900 rounded"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>

        {/* Product reviews */}
        <div className="max-w-screen-xl  py-8 mx-auto  ">
          <h2 className="text-xl font-bold sm:text-2xl">Customer Reviews</h2>

          <div className="flex items-center mt-4">
            <p className="text-3xl font-medium">
              3.8
              <span className="sr-only"> Average review score </span>
            </p>

            <div className="ml-4">
              <Stars />

              <p className="mt-0.5 text-xs text-gray-500">
                Based on 48 reviews
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-x-16 gap-y-12">
            <SingleReview />
            <SingleReview />
            <SingleReview />
          </div>
        </div>

        {/* Review form*/}
        <div className="max-w-screen-xl  py-8 mx-auto  ">
          <h2 className="text-xl font-bold sm:text-2xl mb-5">Write a review</h2>
          <form>
            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Rating
            </label>
            <select
              name="rating"
              value={rating}
              id="rating"
              className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select...</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
            <label
              htmlFor="title"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Title
            </label>
            <input
              type="text"
              value={title}
              id="title"
              placeholder="Leave a title..."
              className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label
              htmlFor="message"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              value={comment}
              rows="4"
              className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
              placeholder="Leave a comment..."
            ></textarea>
            <Btn name="Submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
