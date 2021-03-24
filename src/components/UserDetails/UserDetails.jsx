import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import UserIcon from "../../shared/icons/UserIcon";

const UserDetails = ({ user: { firstName, email } }) => {
  return (
    <Link to="/profile" className="btn btn-light">
      <UserIcon />
      &nbsp;{email}
    </Link>
  );
};

const mapState = (state) => ({
  user: state.auth.user,
});

export default connect(mapState)(UserDetails);
