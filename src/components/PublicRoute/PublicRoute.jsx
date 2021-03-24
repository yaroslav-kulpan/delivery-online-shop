import React from "react";
import { Redirect, Route } from "react-router-dom";
import withAuth from "../../hocs/with-auth";

const PublicRoute = ({ component: Component, loginIn, restricted, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        loginIn && restricted ? <Redirect to="/" /> :  <Component {...props} />
      }
    />
  );
};

export default withAuth(PublicRoute);
