import React, { useEffect } from 'react';
import EmpItem from './EmpItem';
import { connect } from 'react-redux';
import { createSortedLists } from '../../actions/employees';

const EmpData = ({ employees, createSortedLists, sortedLists }) => {
  useEffect(() => {
    createSortedLists(employees);
  }, [createSortedLists, employees]);
  return (
    <div className="emp-data">
      <h2>Employees</h2>
      <div className="line"></div>
      <div className="emp-abc">
        {sortedLists &&
          sortedLists.map((item) => (
            <div className="emp-item" key={item.title}>
              <h3>{item.title}</h3>
              <div>
                {item.abcEmployees.length === 0
                  ? '----'
                  : item.abcEmployees.map((user) => (
                      <EmpItem key={user.id} user={user} />
                    ))}
              </div>
            </div>
          ))}{' '}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sortedLists: state.list.sortedLists,
});

export default connect(mapStateToProps, {
  createSortedLists,
})(EmpData);
