import React, { Fragment } from 'react';

const EmpBirthdayItem = ({ users }) => {
  return (
    <Fragment>
      {users.map((user) => (
        <p key={user.id}>{user.lastName}</p>
      ))}
    </Fragment>
  );
};

export default EmpBirthdayItem;
