import { GET_EMPLOYEES, EMPLOYEES_ERROR, CLEAR_EMPLOYEES } from './types';
import axios from 'axios';

export const getEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    );

    dispatch({ type: GET_EMPLOYEES, payload: res.data });
  } catch (error) {
    dispatch({
      type: EMPLOYEES_ERROR,
      payload: error.message,
    });
  }
};

export const clearEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_EMPLOYEES });
  } catch (error) {
    dispatch({
      type: EMPLOYEES_ERROR,
      payload: error.message,
    });
  }
};
