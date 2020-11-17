import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUsersSortedByMonth } from '../../actions/employees';
import Spinner from '../layout/Spinner';
import EmpBirthdayItem from './EmpBirthdayItem';

const EmpBirthday = ({
  employees,
  usersSortedByMonth,
  createUsersSortedByMonth,
}) => {
  useEffect(() => {
    createUsersSortedByMonth(employees);
  }, [createUsersSortedByMonth, employees]);
  return (
    <div className="emp-birthday">
      <h2>Employees birthday</h2>
      <div className="line"></div>
      <div className="birthday-block">
        {usersSortedByMonth ? (
          usersSortedByMonth.map((item) => (
            <div key={item.id}>
              {item.users && item.users.length > 0 && (
                <div className="emp-birthday-item">
                  <h4>{item.title} </h4>
                  <div className="emp-birthday-list">
                    <EmpBirthdayItem users={item.users} />
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

EmpBirthday.propTypes = {
  employees: PropTypes.array.isRequired,
  usersSortedByMonth: PropTypes.array.isRequired,
  createUsersSortedByMonth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  usersSortedByMonth: state.list.usersSortedByMonth,
});
export default connect(mapStateToProps, { createUsersSortedByMonth })(
  EmpBirthday
);
