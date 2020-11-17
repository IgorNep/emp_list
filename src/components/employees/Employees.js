import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmployees } from '../../actions/employees';
import Spinner from '../layout/Spinner';
import EmpData from './EmpData';
import EmpBirthday from './EmpBirthday';

const Employees = ({ getEmployees, lists: { loading, employees } }) => {
  useEffect(() => {
    getEmployees();
  }, [getEmployees]);
  return (
    <div className="my-2">
      {loading ? (
        <Spinner />
      ) : (
        <div className="employees">
          <EmpData employees={employees} />
          <EmpBirthday employees={employees} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

Employees.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  lists: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getEmployees,
})(Employees);
