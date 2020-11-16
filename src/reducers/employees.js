import {
  GET_EMPLOYEES,
  EMPLOYEES_ERROR,
  CLEAR_EMPLOYEES,
} from '../actions/types';

const initialState = {
  employees: [],
  loading: true,
  error: null,
};

//eslint-disable-next-line
export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: payload,
        loading: false,
      };
    case CLEAR_EMPLOYEES:
      return {
        employees: [],
        loading: false,
        error: null,
      };
    case EMPLOYEES_ERROR: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
