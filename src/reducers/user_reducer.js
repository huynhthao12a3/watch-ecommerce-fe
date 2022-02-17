import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  // userDetails
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
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

import paginator from '../utils/paginator';



const userLogin_reducer = (state = {}, action) => {
  // Login/Logout
  if (action.type === USER_LOGIN_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return {
      ...state,
      loading: false,
      loginUser: action.payload,
    };
  }
  if (action.type === USER_LOGIN_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === USER_LOGOUT) {
    return {
      ...state,
      loginUser: null,
      loading: false,
      error: false,
    };
  }

  // Register
  if (action.type === USER_REGISTER_REQUEST) {
    return { ...state, registerUserLoading: true };
  }

  if (action.type === USER_REGISTER_SUCCESS) {
    return { ...state, registerUserLoading: false, loginUser: action.payload };
  }

  if (action.type === USER_REGISTER_FAIL) {
    return {
      ...state,
      registerUserLoading: false,
      registerUserError: action.payload,
    };
  }

  // userDetails
  if (action.type === USER_DETAILS_REQUEST) {
    return {
      ...state,
      userDetailsLoading: true,
    };
  }
  if (action.type === USER_DETAILS_SUCCESS) {
    return {
      ...state,
      userDetailsLoading: false,
      userDetails: action.payload,
    };
  }
  if (action.type === USER_DETAILS_FAIL) {
    return {
      ...state,
      userDetailsLoading: false,
      userDetailsError: action.payload,
    };
  }
  if (action.type === USER_DETAILS_RESET) {
    return {
      ...state,
      userDetails: {},
      userDetailsLoading: false,
      userDetailsError: false,
    };
  }

  if (action.type === USER_UPDATE_PROFILE_REQUEST) {
    return {
      ...state,
      userUpdateLoading: true,
    };
  }
  if (action.type === USER_UPDATE_PROFILE_SUCCESS) {
    return {
      ...state,
      userUpdateLoading: false,
      userUpdateSuccess: true,
      updatedUser: action.payload,
    };
  }
  if (action.type === USER_UPDATE_PROFILE_FAIL) {
    return {
      ...state,
      userUpdateLoading: false,
      userUpdateError: action.payload,
    };
  }
  if (action.type === USER_UPDATE_PROFILE_RESET) {
    return {
      ...state,
      updatedUser: {},
      userUpdateLoading: false,
      userUpdateSuccess: false,
      userUpdateError: false,
    };
  }

  // userList
  if (action.type === USER_LIST_REQUEST) {
    return {
      ...state,
      userListLoading: true,
    };
  }
  if (action.type === USER_LIST_SUCCESS) {
    return {
      ...state,
      userListLoading: false,
      userList: [...action.payload],
      userListPaginatiton: paginator(action.payload),
    };
  }
  if (action.type === USER_LIST_FAIL) {
    return {
      ...state,
      userListLoading: false,
      userListError: action.payload,
    };
  }
  if (action.type === USER_LIST_RESET) {
    return {
      ...state,
      userList: [],
      userListLoading: false,
      userListError: false,
    };
  }

  // deleteUser
  if (action.type === USER_DELETE_REQUEST) {
    return {
      ...state,
      deleteUserLoading: true,
    };
  }

  if (action.type === USER_DELETE_SUCCESS) {
    return {
      ...state,
      deleteUserSuccess: true,
      deleteUserLoading: false,
    };
  }
  if (action.type === USER_DELETE_FAIL) {
    return {
      ...state,
      deleteUserError: action.payload,
      deleteUserLoading: false,
    };
  }
  if (action.type === USER_DELETE_RESET) {
    return {
      ...state,
      deleteUserSuccess: false,
      deleteUserLoading: false,
      deleteUserError: false,
    };
  }

  // updateUser(Admin)
  if (action.type === UPDATE_USER_REQUEST) {
    return {
      ...state,
      updateUserLoading: true,
    };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      updateUserSuccess: true,
      updateUserLoading: false,
    };
  }
  if (action.type === UPDATE_USER_FAIL) {
    return {
      ...state,
      updateUserLoading: false,
      updateUserError: action.payload,
    };
  }
  if (action.type === UPDATE_USER_RESET) {
    return {
      ...state,
      updateUserLoading: false,
      updateUserSuccess: false,
      updateUserError: false,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default userLogin_reducer;
