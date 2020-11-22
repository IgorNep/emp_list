import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import EmployeesBirthdayMonth from './EmployeesBirthdayMonth';
import {
  sortEmployeesByMonth,
  getShowBirthdayInfo,
} from '../../actions/employees';
import { useDispatch, useSelector } from 'react-redux';

const EmployeesBirthdayList = ({ employees }) => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const { monthSortedList, showBirthdayList } = lists;
  useEffect(() => {
    dispatch(sortEmployeesByMonth(employees));
    dispatch(getShowBirthdayInfo());
  }, [dispatch, employees]);
  return (
    <div className="emp-birthday">
      <h2>Employees birthday</h2>
      <div className="line"></div>
      <div className="birthday-block">
        {monthSortedList &&
        showBirthdayList !== null &&
        showBirthdayList.length > 0 ? (
          monthSortedList.map((month) => (
            <EmployeesBirthdayMonth key={month.id} month={month} />
          ))
        ) : (
          <h4>No selected employees</h4>
        )}
      </div>
    </div>
  );
};

EmployeesBirthdayList.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default EmployeesBirthdayList;
