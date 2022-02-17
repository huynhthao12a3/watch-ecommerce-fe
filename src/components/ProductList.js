import React, { useEffect, useState } from 'react';
import GridView from './GridView';
import ListView from './ListView';
import { useHistory } from 'react-router-dom';
import { useFilterContext } from '../context/filter_context';

const ProductList = () => {
  const history = useHistory();
  const {
    filtered_products,
    paginated_filtered_products: paginatedProducts,
    grid_view,
  } = useFilterContext();
  const [pageNum, setPageNum] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState([]);

  useEffect(() => {
    setProductsPerPage(paginatedProducts[pageNum]);
  }, [history, pageNum, paginatedProducts]);

  const prevPage = () => {
    setPageNum(oldPage => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = paginatedProducts.length - 1;
      }

      return prevPage;
    });
  };

  const nextPage = () => {
    setPageNum(oldPage => {
      let nextPage = oldPage + 1;
      if (nextPage > paginatedProducts.length - 1) {
        nextPage = 0;
      }

      return nextPage;
    });
  };

  const handlePage = index => {
    setPageNum(index);
  };

  if (filtered_products.length < 1) {
    return (
      <p className="text-center text-xl">
        Sorry, no products matched your search...
      </p>
    );
  }

  if (grid_view === false) {
    return (
      <div>
        <ListView products={productsPerPage} />
        {paginatedProducts?.length > 1 && (
          <div className="flex justify-end">
            {/* Prev btn */}
            <button
              onClick={prevPage}
              className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-tertiary-50 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
              </svg>
            </button>
            {/* Pagination btns */}
            {[...Array(paginatedProducts.length).keys()].map(x => (
              <button
                key={x + 1}
                onClick={() => handlePage(x)}
                aria-current="page"
                className={`${
                  x + 1 === pageNum + 1
                    ? 'bg-tertiary-500 text-tertiary-50'
                    : 'bg-tertiary-50 text-tertiary-500'
                } z-10  border-tertiary-800  relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              >
                {x + 1}
              </button>
            ))}
            {/* Next btn */}
            <button
              onClick={nextPage}
              className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-tertiary-50 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  }

  if (grid_view === true)
    return (
      <div>
        <GridView products={productsPerPage} />
        {paginatedProducts?.length > 1 && (
          <div className="flex justify-end">
            {/* Prev btn */}
            <button
              onClick={prevPage}
              className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-tertiary-50  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
              </svg>
            </button>
            {/* Pagination btns */}
            {[...Array(paginatedProducts.length).keys()].map(x => (
              <button
                key={x + 1}
                onClick={() => handlePage(x)}
                aria-current="page"
                className={`${
                  x + 1 === pageNum + 1
                    ? 'bg-tertiary-500 text-tertiary-50'
                    : 'bg-tertiary-50 text-tertiary-500'
                } z-10  border-tertiary-800  relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              >
                {x + 1}
              </button>
            ))}
            {/* Next btn */}
            <button
              onClick={nextPage}
              className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md   hover:bg-tertiary-50 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
};

export default ProductList;
