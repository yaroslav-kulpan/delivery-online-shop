import React from "react";
import { Redirect, Route } from "react-router-dom";
import withAuth from "../../hocs/with-auth";

const PrivateRoute = ({ component: Component, loginIn, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={(props) =>
        loginIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default withAuth(PrivateRoute);
