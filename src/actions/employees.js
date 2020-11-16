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

    let employees;
    if (localStorage.getItem('employees') === null) {
      employees = [];
    } else {
      employees = JSON.parse(localStorage.getItem('employees'));
    }
    res.data.forEach((employer) => {
      employer.showBirthday = false;
      employees.push(employer);
    });
    localStorage.setItem('employees', JSON.stringify(employees));
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
  // let employees;
  // if (localStorage.getItem('employees') === 'null') {
  //   employees = [];
  //   for (let i = 0; i < 12; i++) {
  //     const users = [];
  //     usersSortedByMonth[i].push(users);
  //   }
  // } else {
  //   usersSortedByMonth = JSON.parse(localStorage.getItem('usersSortedByMonth'));
  // }
  // user.showBirthday
  //   ? usersSortedByMonth[index].users.push(user)
  //   : (usersSortedByMonth[index].users = usersSortedByMonth[index].users.filter(
  //       (userItem) => userItem.id !== user.id
  //     ));
  // localStorage.setItem(
  //   'usersSortedByMonth',
  //   JSON.stringify(usersSortedByMonth)
  // );
};
