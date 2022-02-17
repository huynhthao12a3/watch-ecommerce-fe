import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { useUserContext } from './user_context';

import {
  MENU_OPEN,
  MENU_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_RESET,

  // Admin - products
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_RESET,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
} from '../constants/productConstants';
import axios from 'axios';

const initialState = {
  isMenuOpen: false,

  // fetchProducts
  products_loading: false,
  products_error: false,
  products: [],
  paginated_products: [],
  featured_products: [],
  new_products: [],

  // fetchSingleProduct
  single_product_loading: false,
  single_product_error: false,
  single_product: {},

  // Admin - products

  // listProducts
  productList: [],
  productListLoading: false,
  productListError: false,
  paginated_productList: [],

  // createProducts
  createdProduct: {},
  createProductLoading: false,
  createProductSuccess: false,
  createProductError: null,

  // deleteProduct
  deleteProductLoading: false,
  deleteProductSuccess: false,
  deleteProductError: false,

  // listProductDetails
  productDetailsLoading: false,
  productDetails: { reviews: [] },
  productDetailsError: false,

  // updateProduct
  updatedProduct: {},
  updateProductLoading: false,
  updateProductSuccess: false,
  updateProductError: false,

  // createProductReview
  createdProductReview: null,
  createProductReviewLoading: false,
  createProductReviewError: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { logout } = useUserContext();

  const openMenu = () => {
    dispatch({ type: MENU_OPEN });
  };

  const closeMenu = () => {
    dispatch({ type: MENU_CLOSE });
  };

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const { data } = await axios(`/api/v1/products`);

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.products });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';

      dispatch({ type: GET_PRODUCTS_ERROR, payload: message });
    }
  };

  const fetchSingleProduct = async url => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const { data } = await axios(url);

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';

      dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: message });
    }
  };

  const fetchSingleProductsReset = () => {
    dispatch({
      type: GET_SINGLE_PRODUCT_RESET,
    });
  };

  // Admin - products
  const listProducts = async () => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const { data } = await axios.get(`/api/v1/products`);

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: message,
      });
    }
  };

  const listProductDetails = async id => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/v1/products/${id}`);

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: message,
      });
    }
  };

  const createProduct = async () => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      });

      const { data } = await axios.post(`/api/v1/products`);
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data.product,
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
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      });
    }
  };

  const createProductReset = async () => {
    dispatch({
      type: PRODUCT_CREATE_RESET,
    });
  };

  const updateProduct = async product => {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      });

      const { data } = await axios.patch(
        `/api/v1/products/${product._id}`,
        product
      );

      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data.product,
      });
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data.product });
    } catch (error) {
      const message =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : 'There was an error';
      if (message === 'Authentication Invalid') {
        logout();
      }
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: message,
      });
    }
  };

  const updateProductReset = async () => {
    dispatch({ type: PRODUCT_UPDATE_RESET });
  };

  const deleteProduct = async id => {
    try {
      dispatch({
        type: PRODUCT_DELETE_REQUEST,
      });

      const { data } = await axios.delete(`/api/v1/products/${id}`);

      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
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
        type: PRODUCT_DELETE_FAIL,
        payload: message,
      });
    }
  };

  const deleteProductReset = async () => {
    dispatch({ type: PRODUCT_DELETE_RESET });
  };

  const createProductReview = async review => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      });

      const { data } = await axios.post(`/api/v1/reviews`, review);

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
        payload: data.review,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : 'There was an error';
      if (message === 'Authentication Invalid') {
        logout();
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };

  const createReviewReset = () => {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_RESET,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openMenu,
        closeMenu,
        fetchSingleProduct,
        fetchSingleProductsReset,
        listProducts,
        createProduct,
        deleteProduct,
        createProductReset,
        deleteProductReset,
        listProductDetails,
        updateProduct,
        updateProductReset,
        createProductReview,
        createReviewReset,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
