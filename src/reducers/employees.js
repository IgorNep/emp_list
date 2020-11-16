import {
  GET_EMPLOYEES,
  EMPLOYEES_ERROR,
  CLEAR_EMPLOYEES,
  CREATE_SORTEDLIST,
  CREATE_SORTED_BY_MONTH,
  SET_SHOWBIRTHDAY,
} from '../actions/types';

const initialState = {
  employees: [],
  loading: true,
  error: null,
  sortedLists: [],
  usersSortedByMonth: [],
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
    case CREATE_SORTEDLIST:
      return {
        ...state,
        sortedLists: payload,
        loading: false,
      };
    case SET_SHOWBIRTHDAY:
      return {
        ...state,
        usersSortedByMonth: [
          ...state.usersSortedByMonth,
          payload.user.showBirthday
            ? state.usersSortedByMonth[payload.index].users.push(payload.user)
            : (state.usersSortedByMonth[
                payload.index
              ].users = state.usersSortedByMonth[payload.index].users.filter(
                (user) => user.id !== payload.user.id
              )),
        ],
        loading: false,
      };
    case CREATE_SORTED_BY_MONTH:
      return {
        ...state,
        usersSortedByMonth: payload,
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
