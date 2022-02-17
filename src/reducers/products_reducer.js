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
import paginator from '../utils/paginator';

const products_reducer = (state, action) => {
  // openMenu, closeMenu
  if (action.type === MENU_OPEN) {
    return { ...state, isMenuOpen: true };
  }
  if (action.type === MENU_CLOSE) {
    return { ...state, isMenuOpen: false };
  }

  // fetchProducts
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      product => product.featured === true
    );

    const new_products = [...action.payload].slice(10, 18);
    // const new_products = [...action.payload].slice(action.payload.length -9, -1);

    return {
      ...state,
      products_loading: false,
      products: [...action.payload],
      paginated_products: paginator([...action.payload]),
      featured_products: featured_products,
      new_products: new_products,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: action.payload,
    };
  }

  // fetchSingleProduct
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_RESET) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: false,
      single_product: {},
    };
  }

  // Admin - products

  // listProducts
  if (action.type === PRODUCT_LIST_REQUEST) {
    return {
      ...state,
      productList: [],
      productListLoading: true,
    };
  }
  if (action.type === PRODUCT_LIST_SUCCESS) {
    return {
      ...state,
      productListLoading: false,
      productList: action.payload.products,
      paginated_productList: paginator([...action.payload.products]),
    };
  }
  if (action.type === PRODUCT_LIST_FAIL) {
    return {
      productListLoading: false,
      productListError: action.payload,
    };
  }

  //createProduct

  if (action.type === PRODUCT_CREATE_REQUEST) {
    return {
      ...state,
      createProductLoading: true,
    };
  }

  if (action.type === PRODUCT_CREATE_SUCCESS) {
    return {
      ...state,
      createdProduct: action.payload,
      createProductLoading: false,
      createProductSuccess: true,
    };
  }
  if (action.type === PRODUCT_CREATE_FAIL) {
    return {
      ...state,
      createProductLoading: false,
      createProductError: action.payload,
    };
  }
  if (action.type === PRODUCT_CREATE_RESET) {
    return {
      ...state,
      createdProduct: {},
      createProductLoading: false,
      createProductSuccess: false,
      createProductError: null,
    };
  }

  // deleteProduct
  if (action.type === PRODUCT_DELETE_REQUEST) {
    return { ...state, deleteProductLoading: true };
  }
  if (action.type === PRODUCT_DELETE_SUCCESS) {
    return {
      ...state,
      deleteProductLoading: false,
      deleteProductSuccess: true,
    };
  }
  if (action.type === PRODUCT_DELETE_FAIL) {
    return {
      ...state,
      deleteProductLoading: false,
      deleteProductError: action.payload,
    };
  }
  if (action.type === PRODUCT_DELETE_RESET) {
    return {
      ...state,
      deleteProductLoading: false,
      deleteProductSuccess: false,
      deleteProductError: null,
    };
  }

  // listProductDetails
  if (action.type === PRODUCT_DETAILS_REQUEST) {
    return {
      ...state,
      productDetailsLoading: true,
    };
  }
  if (action.type === PRODUCT_DETAILS_SUCCESS) {
    return {
      ...state,
      productDetailsLoading: false,
      productDetails: action.payload,
    };
  }
  if (action.type === PRODUCT_DETAILS_FAIL) {
    return {
      ...state,
      productDetailsLoading: false,
      productDetailsError: action.payload,
    };
  }

  //updateProduct
  if (action.type === PRODUCT_UPDATE_REQUEST) {
    return {
      ...state,
      updateProductLoading: true,
    };
  }
  if (action.type === PRODUCT_UPDATE_SUCCESS) {
    return {
      ...state,
      updateProductLoading: false,
      updateProductSuccess: true,
      updatedProduct: action.payload,
    };
  }
  if (action.type === PRODUCT_UPDATE_FAIL) {
    return {
      ...state,
      updateProductLoading: false,
      updateProductError: action.payload,
    };
  }
  if (action.type === PRODUCT_UPDATE_RESET) {
    return {
      ...state,
      updatedProduct: {},
      updateProductLoading: false,
      updateProductSuccess: false,
      updateProductError: false,
    };
  }

  // createProductReview
  if (action.type === PRODUCT_CREATE_REVIEW_REQUEST) {
    return {
      ...state,
      createProductReviewLoading: true,
    };
  }
  if (action.type === PRODUCT_CREATE_REVIEW_SUCCESS) {
    return {
      ...state,
      createProductReviewLoading: false,
      createdProductReview: action.payload,
    };
  }
  if (action.type === PRODUCT_CREATE_REVIEW_FAIL) {
    return {
      ...state,
      createProductReviewLoading: false,
      createProductReviewError: action.payload,
    };
  }
  if (action.type === PRODUCT_CREATE_REVIEW_RESET) {
    return {
      ...state,
      createdProductReview: null,
      createProductReviewLoading: false,
      createProductReviewError: false,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
