import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import EmployeesAbcList from './EmployeesAbcList';
import EmployeesBirthdayList from './EmployeesBirthdayList';
import { getEmployees } from '../../actions/employees';
import { useDispatch, useSelector } from 'react-redux';

const Employees = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state) => state.lists);

  const { loading, employees } = lists;
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);
  return (
    <div className="my-2">
      {loading ? (
        <Spinner />
      ) : (
        <div className="employees">
          <EmployeesAbcList employees={employees} />
          <EmployeesBirthdayList employees={employees} />
        </div>
      )}
    </div>
  );
};

export default Employees;
