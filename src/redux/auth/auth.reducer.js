import { combineReducers, createReducer } from "@reduxjs/toolkit";

import {
  signUpFailure,
  signUpSuccess,
  signUpRequested,
  // saveConfirmToken,
  removeConfirmToken,
  confirmAccountSuccess,
  confirmAccountRequested,
  confirmAccountFailure,
  signInSuccess,
  logout,
  getCurrentUserSuccess,
} from "./auth.actions";

const accessToken = createReducer(null, {
  [signInSuccess]: (_, { payload }) => payload.accessToken,
  [logout]: () => null,
});

const refreshToken = createReducer(null, {
  [signInSuccess]: (_, { payload }) => payload.refreshToken,
  [logout]: () => null,
});

const user = createReducer(
  { email: null, firstName: null, phone: null, avatarURL: null },
  {
    [signInSuccess]: (_, { payload }) => payload.user,
    [getCurrentUserSuccess]: (_, { payload }) => payload,
  }
);

const confirmToken = createReducer(null, {
  [signUpSuccess]: (state, { payload }) => payload.confirmToken,
  [confirmAccountSuccess]: () => null,
  [removeConfirmToken]: () => null,
});

const loading = createReducer(false, {
  [signUpFailure]: () => false,
  [signUpSuccess]: () => false,
  [signUpRequested]: () => true,
  [confirmAccountRequested]: () => true,
  [confirmAccountSuccess]: () => false,
  [confirmAccountFailure]: () => false,
});

const handleError = (state, { payload }) => payload;
const clearError = () => null;

const error = createReducer(null, {
  [signUpRequested]: clearError,
  [signUpFailure]: handleError,
  [confirmAccountFailure]: handleError,
  [confirmAccountRequested]: clearError,
});

const authReducer = combineReducers({
  accessToken,
  refreshToken,
  confirmToken,
  user,
  loading,
  error,
});

export default authReducer;
