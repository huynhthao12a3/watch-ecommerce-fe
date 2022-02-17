import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/order_reducer';
import axios from 'axios';
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_RESET,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants';
import { useUserContext } from './user_context';
const initialState = {
  // createOrder
  createdOrder: {},
  createOrderLoading: false,
  createOrderError: false,
  createOrderSuccess: false,

  // getOrderDetails
  orderDetails: null,
  orderDetailLoading: false,
  orderDetailsError: false,

  // payOrder
  orderPayLoading: false,
  orderPaySuccess: false,
  orderPayError: false,

  // deliverOrder

  deliverOrderLoading: false,
  deliverOrderSuccess: false,
  deliverOrderError: false,

  // listMyOrders
  myOrderList: [],
  myOrderListPagination: [],
  myOrderListLoading: false,
  myOrderListError: false,

  // Admin listOrders
  orderList: [],
  orderListPagination: [],
  orderListLoading: false,
  orderListError: false,
};
const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { logout } = useUserContext();

  const createOrder = async order => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      });

      const { data } = await axios.post(`/api/v1/orders`, order);

      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
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
        type: ORDER_CREATE_FAIL,
        payload: message,
      });
    }
  };

  const orderCreateReset = () => {
    dispatch({
      type: ORDER_CREATE_RESET,
    });
  };

  const getOrderDetails = async id => {
    try {
      dispatch({ type: ORDER_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/v1/orders/${id}`);

      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';
      if (message === 'Authentication Invalid') {
        logout();
      }
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: message,
      });
    }
  };

  const payOrder = async (orderId, paymentResult) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      });

      const { data } = await axios.patch(
        `/api/v1/orders/${orderId}/pay`,
        paymentResult
      );

      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
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
        type: ORDER_PAY_FAIL,
        payload: message,
      });
    }
  };

  const payOrderReset = () => {
    dispatch({ type: ORDER_PAY_RESET });
  };

  const deliverOrder = async order => {
    try {
      dispatch({
        type: ORDER_DELIVER_REQUEST,
      });

      const { data } = await axios.patch(`/api/v1/orders/${order._id}/deliver`);

      dispatch({
        type: ORDER_DELIVER_SUCCESS,
        payload: data,
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
        type: ORDER_DELIVER_FAIL,
        payload: message,
      });
    }
  };

  const deliverOrderReset = () => {
    dispatch({
      type: ORDER_DELIVER_RESET,
    });
  };

  // /profile
  const listMyOrders = async () => {
    try {
      dispatch({
        type: ORDER_LIST_MY_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/orders/showAllMyOrders`);

      dispatch({
        type: ORDER_LIST_MY_SUCCESS,
        payload: data.orders,
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
        type: ORDER_LIST_MY_FAIL,
        payload: message,
      });
    }
  };

  // /admin/orderlist
  const listOrders = async () => {
    try {
      dispatch({
        type: ORDER_LIST_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/orders`);

      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data.orders,
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
        type: ORDER_LIST_FAIL,
        payload: error,
      });
    }
  };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        createOrder,
        orderCreateReset,
        getOrderDetails,
        payOrder,
        deliverOrder,
        payOrderReset,
        deliverOrderReset,
        listMyOrders,
        listOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
