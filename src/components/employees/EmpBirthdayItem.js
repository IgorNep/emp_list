import React, { Fragment } from 'react';

const EmpBirthdayItem = ({ users }) => {
  const getMonthName = (dob) => {
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
    const date = new Date(dob);
    const usersDate =
      date.getDay() +
      ' ' +
      months[date.getMonth()] +
      ', ' +
      date.getFullYear() +
      ' year';
    return usersDate;
  };
  return (
    <Fragment>
      {users.map((user) => (
        <p key={user.id}>
          {user.lastName} {user.firstName} - {getMonthName(user.dob)}
        </p>
      ))}
    </Fragment>
  );
};

export default EmpBirthdayItem;
