import {
  GET_EMPLOYEES,
  EMPLOYEES_ERROR,
  CLEAR_EMPLOYEES,
  CREATE_SORTEDLIST,
  CREATE_SORTED_BY_MONTH,
  SET_SHOWBIRTHDAY,
} from './types';
import axios from 'axios';

export const getEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    );

    let employees = [];

    res.data.forEach((employer) => {
      if (isShowBirthdayChecked(employer)) {
        employer.showBirthday = true;
      } else {
        employer.showBirthday = false;
      }
      employees.push(employer);
    });

    localStorage.setItem('employees', JSON.stringify(employees));

    dispatch({ type: GET_EMPLOYEES, payload: employees });
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

export const createSortedLists = (employees) => (dispatch) => {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  try {
    const empList = [];
    abc.split('').forEach((letter) => {
      const newBox = { title: letter, abcEmployees: [] };
      empList.push(newBox);

      employees.forEach((emp) => {
        if (emp.lastName.charAt(0) === newBox.title) {
          newBox.abcEmployees.push(emp);
        }
      });
    });

    dispatch({ type: CREATE_SORTEDLIST, payload: empList });
  } catch (error) {
    console.error(error.message);
  }
};

export const createUsersSortedByMonth = (employees) => (dispatch) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  try {
    const usersSortedByMonth = [];
    months.forEach((month, index) => {
      const newBirthdayMonth = { id: index, title: month, users: [] };
      usersSortedByMonth.push(newBirthdayMonth);

      // employees.forEach((emp) => {
      //   const month = new Date(emp.dob);
      //   if (month.getMonth() === index) {
      //     newBirthdayMonth.users.push(emp);
      //   }
      // });
    });

    dispatch({ type: CREATE_SORTED_BY_MONTH, payload: usersSortedByMonth });
  } catch (error) {
    console.error(error.message);
  }
};

export const changeUsersShowBirthday = (user) => (dispatch) => {
  const month = new Date(user.dob);
  const index = month.getMonth();

  try {
    dispatch({ type: SET_SHOWBIRTHDAY, payload: { user, index } });
    updateLocalStorage(user, index);
  } catch (error) {
    console.error(error.message);
  }
};

const updateLocalStorage = (user, index) => {
  let employees = JSON.parse(localStorage.getItem('employees'));
  let showBirthdayInfo;
  if (localStorage.getItem('showBirthdayInfo') === null) {
    showBirthdayInfo = [];
  } else {
    showBirthdayInfo = JSON.parse(localStorage.getItem('showBirthdayInfo'));
  }

  const show = employees.find((employer) => employer.id === user.id);
  show.showBirthday = user.showBirthday;

  if (showBirthdayInfo.find((item) => item.id === show.id)) {
    showBirthdayInfo = showBirthdayInfo.filter((item) => item.id !== show.id);
  } else {
    showBirthdayInfo.push(show);
  }
  localStorage.setItem('showBirthdayInfo', JSON.stringify(showBirthdayInfo));
};

const isShowBirthdayChecked = (employer) => {
  const showArr = JSON.parse(localStorage.getItem('showBirthdayInfo'));
  let checkedUser;
  if (showArr !== null && showArr.length > 0) {
    checkedUser = showArr.find((item) => item.id === employer.id);
  }
  if (checkedUser) return true;
};
