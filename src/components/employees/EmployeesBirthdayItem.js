import React, { Fragment } from 'react';
import showBirthdayDate from '../../actions/employees';

const EmployeesBirthdayItem = ({ users }) => {
  return (
    <Fragment>
      {users.map((user) => (
        <p key={user.id}>
          {user.lastName} {user.firstName} - {showBirthdayDate(user.dob)}
        </p>
      ))}
    </Fragment>
  );
};

export default EmployeesBirthdayItem;
