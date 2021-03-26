import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import UserIcon from "../../shared/icons/UserIcon";

const UserDetails = () => {
  const { email } = useSelector((state) => state.auth.user);
  return (
    <Link to="/profile" className="btn btn-light">
      <UserIcon />
      &nbsp;{email}
    </Link>
  );
};

export default UserDetails;
