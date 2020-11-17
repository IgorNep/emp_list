import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearEmployees } from '../../actions/employees';

const Navbar = ({ logo, icon, clearEmployees }) => {
  return (
    <nav className="nav bg-primary">
      <div className="logo">
        <Link to="/" onClick={() => clearEmployees()}>
          {' '}
          <i className={icon}></i> {logo}
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  logo: 'Employees List',
  icon: 'fa fa-users',
};
Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  clearEmployees: PropTypes.func.isRequired,
};

export default connect(null, { clearEmployees })(Navbar);
