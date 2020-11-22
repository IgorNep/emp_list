import React, { useEffect } from 'react';
import EmployeesAbcListItem from './EmployeesAbcListItem';
import PropTypes from 'prop-types';
import { sortEmployeesByAbc } from '../../actions/employees';
import { useDispatch, useSelector } from 'react-redux';

const EmployeesAbcList = ({ employees }) => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const { abcSortedList } = lists;
  useEffect(() => {
    dispatch(sortEmployeesByAbc(employees));
  }, [dispatch, employees]);
  return (
    <div className="emp-data">
      <h2>Employees</h2>
      <div className="line"></div>
      <div className="emp-abc">
        {abcSortedList &&
          abcSortedList.map((item) => (
            <div key={item.title} className="emp-item">
              <h3 className="abc-title">{item.title}</h3>
              <div>
                {item.employeesAbc.length === 0
                  ? '----'
                  : item.employeesAbc.map((user) => (
                      <EmployeesAbcListItem key={user.id} user={user} />
                    ))}
              </div>
            </div>
          ))}{' '}
      </div>
    </div>
  );
};
EmployeesAbcList.propTypes = {
  employees: PropTypes.array.isRequired,
};
export default EmployeesAbcList;
