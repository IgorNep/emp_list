import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  changeUsersShowBirthday,
  getShowBirthdayInfo,
} from '../../actions/employees';
import PropTypes from 'prop-types';

const AbcListItem = ({
  user,
  changeUsersShowBirthday,
  getShowBirthdayInfo,
}) => {
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
          changeUsersShowBirthday(user);
          setShowBirthday(!showBirthday);
          getShowBirthdayInfo();
        }}
      />
    </div>
  );
};
AbcListItem.propTypes = {
  changeUsersShowBirthday: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(null, { changeUsersShowBirthday, getShowBirthdayInfo })(
  AbcListItem
);
