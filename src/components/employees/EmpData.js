import React, { useEffect } from 'react';
import AbcListItem from './AbcListItem';
import { connect } from 'react-redux';
import { sortEmployeesByAbc } from '../../actions/employees';

const EmpData = ({ employees, sortEmployeesByAbc, abcSortedList }) => {
  useEffect(() => {
    sortEmployeesByAbc(employees);
  }, [sortEmployeesByAbc, employees]);
  return (
    <div className="emp-data">
      <h2>Employees</h2>
      <div className="line"></div>
      <div className="emp-abc">
        {abcSortedList &&
          abcSortedList.map((item) => (
            <div key={item.title} className="emp-item">
              <h3>{item.title}</h3>
              <div>
                {item.employeesAbc.length === 0
                  ? '----'
                  : item.employeesAbc.map((user) => (
                      <AbcListItem key={user.id} user={user} />
                    ))}
              </div>
            </div>
          ))}{' '}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  abcSortedList: state.lists.abcSortedList,
});

export default connect(mapStateToProps, {
  sortEmployeesByAbc,
})(EmpData);
