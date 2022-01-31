import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { paginatedOrders } from '../data';
import { useHistory } from 'react-router-dom';

const OrderListPage = () => {
  const history = useHistory();
  const [pageNum, setPageNum] = useState(0);
  const [ordersPerPage, setOrdersPerPage] = useState([]);

  useEffect(() => {
    setOrdersPerPage(paginatedOrders[pageNum]);
  }, [history, paginatedOrders, pageNum]);

  const prevPage = () => {
    setPageNum(oldPage => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = paginatedOrders.length - 1;
      }

      return prevPage;
    });
  };

  const nextPage = () => {
    setPageNum(oldPage => {
      let nextPage = oldPage + 1;
      if (nextPage > paginatedOrders.length - 1) {
        nextPage = 0;
      }

      return nextPage;
    });
  };

  const handlePage = index => {
    setPageNum(index);
  };

  return (
    <div className="min-h-screen bg-tertiary-50">
      <div className="section-center py-12  flex-col  ">
        <div className="w-full h-full   py-5 bg-tertiary-100">
          <section className="mx-auto bg-tertiary-100 ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-3 ">
              Order List
            </h2>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
              <div className="w-full ">
                <table className="w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-200 uppercase border-b border-gray-00">
                      <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                        ID
                      </th>
                      <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                        User
                      </th>
                      <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                        Date
                      </th>
                      <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                        Total
                      </th>
                      <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                        Paid
                      </th>
                      <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                        Delivered
                      </th>
                      <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {ordersPerPage.map((order, index) => {
                      const {
                        _id: id,
                        createdAt,
                        isDelivered,
                        total,
                        status,
                        paidAt,
                        user,
                      } = order;
                      return (
                        <tr
                          className="text-gray-700 text-xs md:text-sm lg:text-base"
                          key={index}
                        >
                          {/* ID */}
                          <td className="py-3 border">
                            <p className="text-center">{id.substring(0, 10)}</p>
                          </td>
                          {/* USER */}
                          <td className="py-3 border">
                            <p className="text-center">
                              {user.substring(0, 10)}
                            </p>
                          </td>

                          {/* DATE */}
                          <td className="py-3 border">
                            <p className="text-center">
                              {createdAt.substring(0, 10)}
                            </p>
                          </td>

                          {/* TOTAL */}
                          <td className="py-3 border">
                            <p className="text-center">${total}</p>
                          </td>

                          {/* PAID */}
                          <td className="py-3 border px-0">
                            {status === 'paid' ? (
                              <p className="text-center">
                                {paidAt.substring(0, 10)}
                              </p>
                            ) : (
                              <p className="text-center flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4 text-red-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </p>
                            )}
                          </td>
                          <td className="py-3 border px-0">
                            {isDelivered ? (
                              <p className="text-center">
                                {paidAt.substring(0, 10)}
                              </p>
                            ) : (
                              <p className="flex justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-red-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </p>
                            )}
                          </td>
                          <td className="py-3 border px-2">
                            <Link to={`/order/${id}`}>
                              <p className="flex justify-center px-0 py-1 bg-tertiary-500 hover:bg-tertiary-900 rounded text-white">
                                Details
                              </p>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {ordersPerPage?.length > 1 && (
            <div className="flex justify-end">
              {/* Prev btn */}
              <button
                onClick={prevPage}
                className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-tertiary-50 dark:bg-gray-900 dark:text-gray-600"
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
              {[...Array(paginatedOrders.length).keys()].map(x => (
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
                className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-tertiary-50 dark:bg-gray-900 dark:text-gray-600"
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
      </div>
    </div>
  );
};

export default OrderListPage;
