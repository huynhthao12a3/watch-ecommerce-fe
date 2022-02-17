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
import { CART_CLEAR_ITEMS } from '../constants/cartConstants';
import paginator from '../utils/paginator';

const order_reducer = (state, action) => {
  if (action.type === ORDER_CREATE_REQUEST) {
    return {
      ...state,
      createOrderLoading: true,
    };
  }
  if (action.type === ORDER_CREATE_SUCCESS) {
    return {
      ...state,
      createdOrder: action.payload,
      createOrderLoading: false,
      createOrderSuccess: true,
    };
  }
  if (action.type === ORDER_CREATE_FAIL) {
    return {
      ...state,
      createOrderLoading: false,
      createOrderError: action.payload,
    };
  }
  if (action.type === ORDER_CREATE_RESET) {
    return {
      ...state,
      createdOrder: {},
      createOrderLoading: false,
      createOrderError: false,
      createOrderSuccess: false,
    };
  }
  if (action.type === CART_CLEAR_ITEMS) {
    return {
      ...state,
      cart: [],
      shippingAddress: '',
      paymentMethod: 'PayPal',
      total_items: 0,
      total_amount: 0,
      shipping_fee: 0,
      tax: 0,
    };
  }
  if (action.type === ORDER_DETAILS_REQUEST) {
    return {
      ...state,
      orderDetailLoading: true,
    };
  }
  if (action.type === ORDER_DETAILS_SUCCESS) {
    return {
      ...state,
      orderDetails: action.payload,
      orderDetailLoading: false,
    };
  }
  if (action.type === ORDER_DETAILS_FAIL) {
    return {
      ...state,
      orderDetailLoading: false,
      orderDetailsError: action.payload,
    };
  }

  // payOrder
  if (action.type === ORDER_PAY_REQUEST) {
    return {
      ...state,
      orderPayLoading: true,
    };
  }
  if (action.type === ORDER_PAY_SUCCESS) {
    return {
      ...state,
      orderPayLoading: false,
      orderPaySuccess: true,
    };
  }
  if (action.type === ORDER_PAY_FAIL) {
    return {
      ...state,
      orderPayLoading: false,
      orderPayError: action.payload,
    };
  }
  if (action.type === ORDER_PAY_RESET) {
    return {
      ...state,
      orderPayLoading: false,
      orderPaySuccess: false,
      orderPayError: false,
    };
  }

  // deliverOrder
  if (action.type === ORDER_DELIVER_REQUEST) {
    return {
      ...state,
      deliverOrderLoading: true,
    };
  }
  if (action.type === ORDER_DELIVER_SUCCESS) {
    return {
      ...state,
      deliverOrderLoading: false,
      deliverOrderSuccess: action.payload,
    };
  }
  if (action.type === ORDER_DELIVER_FAIL) {
    return {
      ...state,
      deliverOrderLoading: false,
      deliverOrderError: action.payload,
    };
  }
  if (action.type === ORDER_DELIVER_RESET) {
    return {
      ...state,
      deliverOrderLoading: false,
      deliverOrderSuccess: false,
      deliverOrderError: false,
    };
  }

  // listMyOrders
  if (action.type === ORDER_LIST_MY_REQUEST) {
    return {
      ...state,
      myOrderListLoading: true,
    };
  }
  if (action.type === ORDER_LIST_MY_SUCCESS) {
    return {
      ...state,
      myOrderListLoading: false,
      myOrderList: action.payload,
      myOrderListPagination: paginator([...action.payload]),
    };
  }
  if (action.type === ORDER_LIST_MY_FAIL) {
    return {
      ...state,
      myOrderListLoading: false,
      myOrderListError: action.payload,
    };
  }

  // Admin listOrders
  if (action.type === ORDER_LIST_REQUEST) {
    return {
      ...state,
      orderListLoading: true,
    };
  }
  if (action.type === ORDER_LIST_SUCCESS) {
    return {
      ...state,
      orderListLoading: false,
      orderList: action.payload,
      orderListPagination: paginator([...action.payload]),
      orderListError: false,
    };
  }
  if (action.type === ORDER_LIST_FAIL) {
    return {
      ...state,
      orderListLoading: false,
      orderListError: action.payload,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default order_reducer;
