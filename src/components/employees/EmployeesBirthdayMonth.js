import React, { Fragment } from 'react';
import EmployeesBirthdayListItem from './EmployeesBirthdayListItem';

const EmployeesBirthdayMonth = ({ month }) => {
  return (
    <Fragment>
      {month.users && month.users.length > 0 && (
        <div className="emp-birthday-item">
          <h4>{month.title} </h4>
          <div className="emp-birthday-list">
            <EmployeesBirthdayListItem key={month.id} users={month.users} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EmployeesBirthdayMonth;
