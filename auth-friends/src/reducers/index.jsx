import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAIL,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from "../actions";

export const initialState = {
  token: "",
  user: null,
  isAuth: false,
  isLoading: false,
  errors: null,
  isSuccess: false,
  data: []
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: false,
        isSuccess: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.payload,
        user: payload.user,
        isSuccess: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errors: payload,
        isLoading: false
      };

    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        errors: null,
        isAuth: false,
        isSuccess: false,
        data: payload
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        data: payload,
        isSuccess: true
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        errors: payload,
        isLoading: false
      };
    default:
      return state;
  }
};
