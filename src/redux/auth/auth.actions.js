import { createAction } from "@reduxjs/toolkit";

// sign in
const signInRequested = createAction("auth/signInRequested");
const signInSuccess = createAction("auth/signInSuccess");
const signInFailure = createAction("auth/signInFailure");

// sign up
const signUpRequested = createAction("auth/signUpRequested");
const signUpSuccess = createAction("auth/signUpSuccess");
const signUpFailure = createAction("auth/signUpFailure");

// confirm
const confirmAccountRequested = createAction("auth/confirmAccountRequested");
const confirmAccountSuccess = createAction("auth/confirmAccountSuccess");
const confirmAccountFailure = createAction("auth/confirmAccountFailure");

// logout
const logout = createAction("auth/logout");

//
const saveConfirmToken = createAction("auth/saveConfirmToken");
const removeConfirmToken = createAction("auth/removeConfirmToken");

// getCurrentUser

const getCurrentUserRequested = createAction("auth/getCurrentUser");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserFailure = createAction("auth/getCurrentUserFailure");

export {
  signInRequested,
  signInSuccess,
  signInFailure,
  confirmAccountRequested,
  confirmAccountFailure,
  confirmAccountSuccess,
  signUpSuccess,
  signUpRequested,
  signUpFailure,
  logout,
  saveConfirmToken,
  removeConfirmToken,
  getCurrentUserRequested,
  getCurrentUserSuccess,
  getCurrentUserFailure,
};
