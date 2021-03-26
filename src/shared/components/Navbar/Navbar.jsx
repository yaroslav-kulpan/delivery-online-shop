import React from "react";
import { Link, NavLink } from "react-router-dom";
import WishListIcon from "../../icons/WishListIcon";
import withAuth from "../../../hocs/with-auth";
import ExitIcon from "../../icons/ExitIcon";
import UserDetails from "../../../components/UserDetails";

// import { withWishlist } from "../../../hocs";

const navArr = [
  { label: "Home", exact: true, to: "/" },
  { label: "Products", exact: false, to: "/products" },
  { label: "Search", exact: false, to: "/search" },
  // { label: <WishListIcon />, exact: false, to: "/wishlist" },
];

const Navbar = ({ loginIn, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          The Delivery
        </Link>
        <ul className="navbar-nav">
          {navArr.map(({ label, exact, to }) => (
            <li className="nav-item" key={to}>
              <NavLink
                exact={exact}
                to={to}
                className="nav-link"
                aria-current="page"
                activeClassName="active"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="display-flex align-center">
          {!loginIn ? (
            <>
              <Link to="/register" className="mx-1">
                SignUp
              </Link>
              <Link to="/login" className="mx-2">
                SignIn
              </Link>
            </>
          ) : (
            <>
              <UserDetails />
              <Link to="/wishlist" className="btn btn-warning mx-2">
                <WishListIcon />0
              </Link>
              <button className="btn btn-primary mx-2" onClick={logout}>
                <ExitIcon />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default withAuth(Navbar);
