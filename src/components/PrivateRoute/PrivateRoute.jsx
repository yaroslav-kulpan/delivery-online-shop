import React from "react";
import { Redirect, Route } from "react-router-dom";
import withAuth from "../../hocs/with-auth";
import useAuth from "../../hooks/use-auth";

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const loginIn = useAuth();
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
