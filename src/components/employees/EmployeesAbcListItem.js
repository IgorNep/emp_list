import React, { useState } from 'react';
import {
  changeUsersShowBirthday,
  getShowBirthdayInfo,
} from '../../actions/employees';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const EmployeesAbcListItem = ({ user }) => {
  const dispatch = useDispatch();
  const [showBirthday, setShowBirthday] = useState(user.showBirthday);

  return (
    <div className="bigbox">
      <label htmlFor={user.id}>
        {user.lastName} {user.firstName}{' '}
      </label>
      <input
        id={user.id}
        type="checkbox"
        value={showBirthday}
        checked={showBirthday}
        onChange={() => {
          user.showBirthday = !showBirthday;
          dispatch(changeUsersShowBirthday(user));
          setShowBirthday(!showBirthday);
          dispatch(getShowBirthdayInfo());
        }}
      />
    </div>
  );
};
EmployeesAbcListItem.propTypes = {
  changeUsersShowBirthday: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default EmployeesAbcListItem;
