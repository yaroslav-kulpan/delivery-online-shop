import axios from "axios";

import AuthService from "../../services/auth.service";
import {
  signUpRequested,
  signUpSuccess,
  signUpFailure,
  // saveConfirmToken,
  // removeConfirmToken,
  signInSuccess,
  signInRequested,
  signInFailure,
  confirmAccountRequested,
  confirmAccountSuccess,
  confirmAccountFailure,
  getCurrentUserRequested,
  getCurrentUserSuccess,
  getCurrentUserFailure,
} from "./auth.actions";

const authService = new AuthService();

axios.defaults.headers.Authorization = null;

const register = (values) => async (dispatch) => {
  dispatch(signUpRequested());
  try {
    const { data } = await authService.register(values);
    dispatch(signUpSuccess(data));
    // dispatch(saveConfirmToken(data));
  } catch (error) {
    dispatch(signUpFailure(error));
  }
};

const login = (values) => async (dispatch) => {
  dispatch(signInRequested());
  try {
    const { data } = await authService.login(values);
    dispatch(signInSuccess(data));
  } catch (error) {
    dispatch(signInFailure(error));
  }
};

// getState() ---> return Record<RootState, any>;

const confirmAccount = (verificationCode, history) => async (
  dispatch,
  getState
) => {
  const { confirmToken } = getState().auth;
  // console.log(confirmToken)
  dispatch(confirmAccountRequested());
  try {
    const { data } = await authService.confirmAccount({
      verificationCode,
      confirmToken,
    });
    dispatch(confirmAccountSuccess(data));
    history.push("/login");
    // dispatch(removeConfirmToken());
  } catch (error) {
    dispatch(confirmAccountFailure(error));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const { accessToken } = getState().auth;

  if (!accessToken) {
    return;
  }
  axios.defaults.headers.Authorization = accessToken;
  dispatch(getCurrentUserRequested());
  try {
    const { data } = await axios.get(
      "https://amz-app.herokuapp.com/api/v1/users/info"
      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
      // }
    );
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserFailure(error));
  }
};

export { login, register, confirmAccount, getCurrentUser };
