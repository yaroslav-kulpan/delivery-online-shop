import React, { useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProductsPage from "../../pages/ProductsPage";
import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import NotFoundPage from "../../pages/NotFoundPage";
import CommonLayout from "../../shared/layouts/CommonLayout";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import WishListPage from "../../pages/WishListPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ProfilePage from "../../pages/ProfilePage";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import useOnlineStatus from "../../hooks/use-online-status";
import { getCurrentUser } from "../../redux/auth/auth.operations";

const App = () => {
  const dispatch = useDispatch();
  const isOnline = useOnlineStatus();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <CommonLayout>
      <p>{!isOnline && "offline"}</p>
      <Switch>
        <PublicRoute exact path="/" component={HomePage} />
        <PublicRoute exact restricted path="/login" component={LoginPage} />
        <PublicRoute
          exact
          restricted
          path="/register"
          component={RegisterPage}
        />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <PrivateRoute exact path="/wishlist" component={WishListPage} />
        <PublicRoute exact path="/products" component={ProductsPage} />
        <PublicRoute
          path="/products/:productId"
          component={ProductDetailsPage}
        />
        <PublicRoute path="/search" component={SearchPage} />
        <PublicRoute path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </CommonLayout>
  );
};

export default App;
