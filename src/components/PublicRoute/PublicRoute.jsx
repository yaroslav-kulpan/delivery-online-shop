import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const PublicRoute = ({ component: Component, restricted, ...routeProps }) => {
  const loginIn = useAuth();
  return (
    <Route
      {...routeProps}
      render={(props) =>
        loginIn && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
