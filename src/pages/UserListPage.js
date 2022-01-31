import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { paginatedUsers } from '../data';
import { useHistory } from 'react-router-dom';

const UserListPage = () => {
  const history = useHistory();
  const [pageNum, setPageNum] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState([]);

  useEffect(() => {
    setUsersPerPage(paginatedUsers[pageNum]);
  }, [history, paginatedUsers, pageNum]);

  const prevPage = () => {
    setPageNum(oldPage => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = paginatedUsers.length - 1;
      }

      return prevPage;
    });
  };

  const nextPage = () => {
    setPageNum(oldPage => {
      let nextPage = oldPage + 1;
      if (nextPage > paginatedUsers.length - 1) {
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-3 ">
            User List
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
                      Name
                    </th>
                    <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                      Email
                    </th>
                    <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                      Admin
                    </th>
                    <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {usersPerPage?.map((user, index) => {
                    const { email, name, role, _id: id } = user;
                    return (
                      <tr
                        className="text-gray-700 text-xs md:text-sm lg:text-base"
                        key={index}
                      >
                        {/* ID */}
                        <td className="py-3 border">
                          <p className="text-center">{id.substring(0, 10)}</p>
                        </td>
                        {/* NAME */}
                        <td className="py-3 border">
                          <p className="text-center">{name}</p>
                        </td>

                        {/* EMAIL */}
                        <td className="py-3 border">
                          <p className="text-center">{email}</p>
                        </td>

                        {/* ADMIN */}
                        <td className="py-3 border px-0">
                          {role === 'admin' ? (
                            <p className="text-center flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 md:w-5 md:h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M5 13l4 4L19 7" />
                              </svg>
                            </p>
                          ) : (
                            <p className="text-center flex items-center justify-center"></p>
                          )}
                        </td>

                        {/* DETAILS */}
                        <td className="py-3 border px-2 flex bg-amber-50 justify-center items-center">
                          <Link
                            to={`/admin/user/${id}/edit`}
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
                          <button className="w-full flex justify-center px-0 py-1 rounded ">
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

          {paginatedUsers?.length > 1 && (
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
              {[...Array(paginatedUsers.length).keys()].map(x => (
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

export default UserListPage;
