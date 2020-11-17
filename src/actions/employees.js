import {
  GET_EMPLOYEES,
  CREATE_ABC_SORTED_LIST,
  CREATE_MONTH_SORTED_LIST,
  CLEAR_EMPLOYEES,
  EMPLOYEES_ERROR,
  SET_SHOWBIRTHDAY,
  CREATE_SHOWBIRTHDAY_LIST,
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

export const sortEmployeesByAbc = (employees) => (dispatch) => {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  try {
    const employeeList = [];
    abc.split('').forEach((letter) => {
      const newBox = { title: letter, employeesAbc: [] };
      employeeList.push(newBox);

      employees.forEach((employer) => {
        if (employer.lastName.charAt(0) === newBox.title) {
          newBox.employeesAbc.push(employer);
        }
      });
    });

    dispatch({ type: CREATE_ABC_SORTED_LIST, payload: employeeList });
  } catch (error) {
    console.error(error.message);
  }
};

export const sortEmployeesByMonth = (employees) => (dispatch) => {
  const months = getMonthsNames();

  try {
    const usersSortedByMonth = [];
    months.forEach((month, index) => {
      const newBirthdayMonth = { id: index, title: month, users: [] };
      usersSortedByMonth.push(newBirthdayMonth);
    });

    employees.forEach((user) => {
      if (user.showBirthday) {
        const month = new Date(user.dob);
        const index = month.getMonth();
        usersSortedByMonth[index].users.push(user);
      }
    });
    dispatch({ type: CREATE_MONTH_SORTED_LIST, payload: usersSortedByMonth });
  } catch (error) {
    console.error(error.message);
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

export const changeUsersShowBirthday = (user) => (dispatch) => {
  const month = new Date(user.dob);
  const index = month.getMonth();

  try {
    dispatch({ type: SET_SHOWBIRTHDAY, payload: { user, index } });
    updateLocalStorage(user);
  } catch (error) {
    console.error(error.message);
  }
};

const updateLocalStorage = (user) => {
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

export const getShowBirthdayInfo = () => (dispatch) => {
  try {
    const res = JSON.parse(localStorage.getItem('showBirthdayInfo'));
    dispatch({ type: CREATE_SHOWBIRTHDAY_LIST, payload: res });
  } catch (error) {
    console.error(error.message);
  }
};

function getMonthsNames() {
  return [
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
}
