import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmployees } from '../../actions/employees';
import Spinner from '../layout/Spinner';
import EmpData from './EmpData';
import EmpBirthday from './EmpBirthday';

const Employees = ({ getEmployees, list: { employees, loading } }) => {
  useEffect(() => {
    getEmployees();
  }, [getEmployees]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="employees">
          <EmpData employees={employees} />
          <EmpBirthday employees={employees} />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
});

Employees.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getEmployees })(Employees);
