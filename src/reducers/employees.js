import {
  GET_EMPLOYEES,
  CREATE_ABC_SORTED_LIST,
  CREATE_MONTH_SORTED_LIST,
  EMPLOYEES_ERROR,
  CLEAR_EMPLOYEES,
  SET_SHOWBIRTHDAY,
  CREATE_SHOWBIRTHDAY_LIST,
} from '../actions/types';

const initialState = {
  employees: [],
  loading: true,
  error: null,
  abcSortedList: [],
  monthSortedList: [],
  showBirthdayList: [],
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
    case CREATE_ABC_SORTED_LIST:
      return {
        ...state,
        abcSortedList: payload,
        loading: false,
      };
    case CREATE_MONTH_SORTED_LIST:
      return {
        ...state,
        monthSortedList: payload,
        loading: false,
      };
    case CLEAR_EMPLOYEES:
      return {
        employees: [],
        loading: false,
        error: null,
      };
    case EMPLOYEES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SET_SHOWBIRTHDAY:
      return {
        ...state,
        monthSortedList: [
          ...state.monthSortedList,
          payload.user.showBirthday
            ? state.monthSortedList[payload.index].users.push(payload.user)
            : (state.monthSortedList[
                payload.index
              ].users = state.monthSortedList[payload.index].users.filter(
                (user) => user.id !== payload.user.id
              )),
        ],
        loading: false,
      };
    case CREATE_SHOWBIRTHDAY_LIST:
      return {
        ...state,
        showBirthdayList: payload,
        loading: false,
      };

    default:
      return state;
  }
}
