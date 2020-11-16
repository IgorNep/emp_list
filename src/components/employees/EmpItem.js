import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { changeUsersShowBirthday } from '../../actions/employees';
import PropTypes from 'prop-types';

const EmpItem = ({ user, changeUsersShowBirthday }) => {
  const [showBirthday, setShowBirthday] = useState(user.showBirthday);

  return (
    <Fragment>
      <p key={user.id}>
        {user.lastName} {user.firstName}{' '}
        <input
          type="checkbox"
          value={showBirthday}
          checked={showBirthday}
          onChange={() => {
            user.showBirthday = !showBirthday;
            changeUsersShowBirthday(user);
            setShowBirthday(!showBirthday);
          }}
        />
      </p>
    </Fragment>
  );
};
EmpItem.propTypes = {
  changeUsersShowBirthday: PropTypes.func.isRequired,
};

export default connect(null, { changeUsersShowBirthday })(EmpItem);
