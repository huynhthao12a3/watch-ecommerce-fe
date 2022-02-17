import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { formatPrice } from '../utils/helpers';

const ProductListPage = () => {
  const history = useHistory();

  const {
    paginated_productList: paginatedProducts,
    productListLoading,
    productListError,
    // createProduct
    createdProduct,
    createProductSuccess,
    // deleteProduct
    deleteProductSuccess,
    deleteProductReset,
    // funcs
    listProducts,
    createProduct,
    createProductReset,
    deleteProduct,
  } = useProductsContext();
  const { loginUser } = useUserContext();

  const [pageNum, setPageNum] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState([]);

  useEffect(() => {
    setProductsPerPage(paginatedProducts[pageNum]);
  }, [history, pageNum, paginatedProducts]);

  useEffect(() => {
    if (!loginUser || loginUser.role !== 'admin') {
      history.push('/login');
    } else {
      listProducts();
    }
  }, [history, loginUser]);

  useEffect(() => {
    if (!deleteProductSuccess) return;
    else {
      listProducts();
      deleteProductReset();
    }
  }, [deleteProductSuccess]);

  useEffect(() => {
    if (!createProductSuccess) return;
    else {
      history.push(`/admin/product/${createdProduct._id}/edit`);
      createProductReset();
    }
  }, [createProductSuccess]);

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

  const deleteHandler = id => {
    if (window.confirm('Are you sure?')) {
      deleteProduct(id);
    }
  };

  const createProductHandler = () => {
    createProduct();
  };

  return (
    <div className="min-h-screen bg-tertiary-50">
      <div className="section-center py-12  flex-col  ">
        <div className="w-full h-full   py-5 bg-tertiary-100">
          {productListLoading ? (
            <Loading />
          ) : productListError ? (
            <Error title={productListError} />
          ) : (
            <>
              {/* Product list header */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl  md:text-3xl lg:text-4xl font-semibold text-center px-5 py-3 flex-grow ">
                  Product List
                </h2>
                <button
                  onClick={createProductHandler}
                  className="relative inline-block px-4 py-2 font-medium group mr-3 lg:mr-5"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-tertiary-900 group-hover:bg-tertiary-900"></span>
                  <span className="relative text-black group-hover:text-white">
                    Create product
                  </span>
                </button>
              </div>

              {/* Product list */}
              <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full ">
                  <table className="w-full">
                    <thead>
                      <tr className="font-semibold  text-left text-gray-900 bg-gray-200 uppercase border-b border-gray-00">
                        <th className="hidden sm:block px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                          ID
                        </th>
                        <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                          Name
                        </th>
                        <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                          Price
                        </th>
                        <th className="hidden sm:block px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                          Category
                        </th>
                        <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                          Brand
                        </th>
                        <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {productsPerPage?.map((product, index) => {
                        const {
                          id,
                          name,
                          price,
                          
                          brand,
                          category,
                          
                        } = product;
                        return (
                          <tr
                            className="text-gray-700 text-xs md:text-sm lg:text-base"
                            key={index}
                          >
                            {/* ID */}
                            <td className=" hidden sm:table-cell  py-3 border">
                              <p className="text-center">{id}</p>
                            </td>
                            {/* NAME */}
                            <td className="py-3 border">
                              <p className="text-center">{name}</p>
                            </td>

                            {/* PRICE */}
                            <td className="py-3 border">
                              <p className="text-center">
                                {formatPrice(price)}
                              </p>
                            </td>

                            {/* CATEGORY */}
                            <td className="hidden sm:table-cell py-3 border">
                              <p className="text-center">{category}</p>
                            </td>

                            {/* BRAND */}
                            <td className="py-3 border px-0">
                              <p className="text-center">{brand}</p>
                            </td>

                            {/* DETAILS */}
                            <td className="py-3 border px-2 flex bg-amber-50 justify-center items-center">
                              {/* Edit btn */}
                              <Link
                                to={`/admin/product/${id}/edit`}
                                className="w-full flex justify-center px-0 py-1 rounded mr-2"
                              >
                                <button>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 md:h-5 md:w-5  text-secondary-600 hover:text-secondary-900 hover:scale-110"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                </button>
                              </Link>

                              {/* Delete btn */}
                              <button
                                className="w-full flex justify-center px-0 py-1 rounded "
                                onClick={() => deleteHandler(id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 md:h-5 md:w-5 text-red-400 hover:text-red-600 hover:scale-110"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination*/}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
