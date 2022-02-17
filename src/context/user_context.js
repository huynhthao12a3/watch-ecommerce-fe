import React, { useContext, useReducer } from 'react';
import axios from 'axios';
import reducer from '../reducers/user_reducer';
import {
  // login,logout
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  // userRegister
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  // userDetails
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  // userUpdate
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  // userList
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  // deleteUser
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_RESET,
  // userUpdate
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_RESET,
} from '../constants/userConstants';

const userInfoFromStorage = localStorage.getItem('loginUser')
  ? JSON.parse(localStorage.getItem('loginUser'))
  : null;

const initialState = {
  // login, logout
  loginUser: userInfoFromStorage,
  loading: false,
  error: false,

  // registerUser
  registerUserLoading: false,
  registerUserError: null,

  // getUserDetails
  userDetails: {},
  userDetailsLoading: false,
  userDetailsError: false,

  // updateUserProfile
  updatedUser: {},
  userUpdateLoading: false,
  userUpdateError: false,
  userUpdateSuccess: false,

  // userList
  userList: [],
  userListPaginatiton: [],
  userListLoading: false,
  userListError: false,

  // deleteUser
  deleteUserSuccess: false,
  deleteUserLoading: false,
  deleteUserError: false,

  // userUpdate(Admin)
  updateUserLoading: false,
  updateUserSuccess: false,
  updateUserError: false,

  // payOrder
  orderPaySuccess: false,
  orderPayLoading: false,
  orderPayError: false,
};
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email, password) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const { data } = await axios.post('/api/v1/auth/login', {
        email,
        password,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data.user,
      });

      localStorage.setItem('loginUser', JSON.stringify(data.user));
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';

      dispatch({
        type: USER_LOGIN_FAIL,
        payload: message,
      });
    }
  };

  const logout = async () => {
    localStorage.removeItem('loginUser');
    localStorage.removeItem('cart');
    localStorage.removeItem('shippingAddress');
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: USER_LIST_RESET });
  };

  const registerUser = async (name, email, password) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const { data } = await axios.post('/api/v1/auth/register', {
        name,
        email,
        password,
      });

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data.user,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data.user,
      });

      localStorage.setItem('loginUser', JSON.stringify(data.user));
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';

      dispatch({
        type: USER_REGISTER_FAIL,
        payload: message,
      });
    }
  };

  const getUserDetails = async id => {
    try {
      dispatch({
        type: USER_DETAILS_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/users/${id}`);

      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data.user,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';
      if (message === 'Authentication Invalid') {
        logout();
      }
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      });
    }
  };

  const userDetailsReset = () => {
    dispatch({ type: USER_DETAILS_RESET });
  };

  const updateUserProfile = async user => {
    try {
      dispatch({
        type: USER_UPDATE_PROFILE_REQUEST,
      });

      const { data } = await axios.patch(
        `/api/v1/users/userUpdateProfile`,
        user
      );

      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data.user,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data.user,
      });
      localStorage.setItem('loginUser', JSON.stringify(data.user));
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';
      if (message === 'Authentication Invalid') {
        logout();
      }
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: message,
      });
    }
  };

  const userUpdateProfileReset = async () => {
    dispatch({
      type: USER_UPDATE_PROFILE_RESET,
    });
  };

  const listUsers = async () => {
    try {
      dispatch({
        type: USER_LIST_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/users`);

      dispatch({
        type: USER_LIST_SUCCESS,
        payload: data.users,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';
      if (message === 'Authentication Invalid') {
        logout();
      }

      dispatch({
        type: USER_LIST_FAIL,
        payload: message,
      });
    }
  };

  const deleteUser = async id => {
    try {
      dispatch({
        type: USER_DELETE_REQUEST,
      });

      await axios.delete(`/api/v1/users/${id}`);

      dispatch({ type: USER_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';
      if (message === 'Authentication Invalid') {
        logout();
      }
      dispatch({
        type: USER_DELETE_FAIL,
        payload: message,
      });
    }
  };

  const deleteUserReset = async () => {
    dispatch({
      type: USER_DELETE_RESET,
    });
  };

  const updateUser = async user => {
    try {
      dispatch({
        type: UPDATE_USER_REQUEST,
      });

      const { data } = await axios.patch(`/api/v1/users/${user._id}`, user);

      dispatch({ type: UPDATE_USER_SUCCESS });

      dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });

      dispatch({ type: USER_DETAILS_RESET });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';
      if (message === 'Authentication Invalid') {
        logout();
      }
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: message,
      });
    }
  };

  const updateUserReset = async () => {
    dispatch({
      type: UPDATE_USER_RESET,
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        logout,
        login,
        registerUser,
        getUserDetails,
        updateUserProfile,
        userUpdateProfileReset,
        listUsers,
        deleteUser,
        deleteUserReset,
        updateUser,
        updateUserReset,
        userDetailsReset,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
