import { employeesReducer } from './employeesReducer';
import { SET_SHOWBIRTHDAY } from '../actions/types';

const initialState = {
  monthSortedList: [
    { id: 0, title: 'January', users: [] },
    {
      id: 1,
      title: 'February',
      users: [
        {
          id: '5e00928df892b0c84c82db98',
          firstName: 'Will',
          lastName: 'Smith',
          dob: '2019-02-19T09:34:32.083Z',
          showBirthday: true,
        },
      ],
    },
  ],
};

//Test1
it('Length of array users of January object should be incremented', () => {
  const changeUsersShowBirthday = (user) => {
    const month = new Date(user.dob);
    const index = month.getMonth();

    return { type: SET_SHOWBIRTHDAY, payload: { user, index } };
  };

  const user = {
    id: '5e00928df892b0c84c82db9d',
    firstName: 'Dorsey',
    lastName: 'Meadows',
    dob: '2019-01-19T09:34:32.083Z',
    showBirthday: true,
  };

  const action = changeUsersShowBirthday(user);

  let newState = employeesReducer(initialState, action);

  expect(newState.monthSortedList[0].users.length).toBe(1);
});

//Test2
it('Length of array users of February object should be decremented', () => {
  const changeUsersShowBirthday = (user) => {
    const month = new Date(user.dob);
    const index = month.getMonth();

    return { type: SET_SHOWBIRTHDAY, payload: { user, index } };
  };

  const user = {
    id: '5e00928df892b0c84c82db98',
    firstName: 'Will',
    lastName: 'Smith',
    dob: '2019-02-19T09:34:32.083Z',
    showBirthday: false,
  };

  const action = changeUsersShowBirthday(user);

  let newState = employeesReducer(initialState, action);

  expect(newState.monthSortedList[0].users.length).toBe(1);
});
