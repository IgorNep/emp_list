import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MonthItem from './MonthItem';
import {
  sortEmployeesByMonth,
  getShowBirthdayInfo,
} from '../../actions/employees';

const EmpBirthday = ({
  lists: { monthSortedList, showBirthdayList },
  employees,
  sortEmployeesByMonth,
  getShowBirthdayInfo,
}) => {
  useEffect(() => {
    sortEmployeesByMonth(employees);
    getShowBirthdayInfo();
  }, [sortEmployeesByMonth, employees, getShowBirthdayInfo]);
  return (
    <div className="emp-birthday">
      <h2>Employees birthday</h2>
      <div className="line"></div>
      <div className="birthday-block">
        {monthSortedList &&
        showBirthdayList !== null &&
        showBirthdayList.length > 0 ? (
          monthSortedList.map((month) => (
            <MonthItem key={month.id} month={month} />
          ))
        ) : (
          <h4>No selected employees</h4>
        )}
      </div>
    </div>
  );
};

EmpBirthday.propTypes = {
  lists: PropTypes.object.isRequired,
  getShowBirthdayInfo: PropTypes.func.isRequired,
  sortEmployeesByMonth: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps, {
  sortEmployeesByMonth,
  getShowBirthdayInfo,
})(EmpBirthday);
