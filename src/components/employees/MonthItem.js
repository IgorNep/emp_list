import React, { Fragment } from 'react';
import EmpBirthdayItem from './EmpBirthdayItem';

const MonthItem = ({ month }) => {
  return (
    <Fragment>
      {month.users && month.users.length > 0 && (
        <div className="emp-birthday-item">
          <h4>{month.title} </h4>
          <div className="emp-birthday-list">
            <EmpBirthdayItem key={month.id} users={month.users} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MonthItem;
