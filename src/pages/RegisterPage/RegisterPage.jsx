import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";

import { removeConfirmToken } from "../../redux/auth/auth.actions";

import {
  login,
  register,
  confirmAccount,
} from "../../redux/auth/auth.operations";

import { Modal } from "../../shared/components";
import TextInput from "../../shared/components/TextInput";


const isStrongPassword = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Поле обязательное!")
    .email("Введите пожалуйста валидный email!"),
  password: Yup.string()
    .required("Поле обязательное!")
    .matches(
      isStrongPassword,
      "Пароль должен содержать минимум 8 символов, заглавную букву, буквы в нижнем регистре, 1 число и 1 спецсимвол!"
    ),
  confirmPassword: Yup.string()
    .required("Поле обязательное!")
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать!"),
  firstName: Yup.string().required("Поле обязательное!"),
});

const RegisterPage = ({
  register,
  confirmToken,
  confirmAccount,
  removeConfirmToken,
  loading,
  history,
}) => {
  return (
    <div className="container mt-5">
      <Modal open={confirmToken} onClose={removeConfirmToken}>
        <Formik
          initialValues={{ verificationCode: "" }}
          onSubmit={({ verificationCode }) => {
            confirmAccount(verificationCode, history);
          }}
        >
          <Form>
            <TextInput type="text" name="verificationCode" />
            <button type="submit" className="btn btn-primary mt-2 w-100">
              Confirm
            </button>
          </Form>
        </Formik>
      </Modal>
      <div className="col-6 offset-3">
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
          }}
          validationSchema={signUpSchema}
          onSubmit={(values) => {
            register(values);
            // alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <TextInput
                name="email"
                type="email"
                id="email"
                placeholder="name@example.com"
              />
              <ErrorMessage
                name="email"
                className="invalid-feedback d-block"
                component="small"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <TextInput
                name="password"
                type="password"
                id="password"
                placeholder="*****"
              />
              <ErrorMessage
                name="password"
                className="invalid-feedback d-block"
                component="small"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm password
              </label>
              <TextInput
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder="*****"
              />
              <ErrorMessage
                name="confirmPassword"
                className="invalid-feedback d-block"
                component="small"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <TextInput
                name="firstName"
                type="text"
                id="firstName"
                placeholder="First Name"
              />
              <ErrorMessage
                name="firstName"
                className="invalid-feedback d-block"
                component="small"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-2 w-100"
              disabled={loading}
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  confirmToken: Boolean(state.auth.confirmToken),
  loading: state.auth.loading,
});

const mapDispatch = {
  register,
  login,
  confirmAccount,
  removeConfirmToken,
};

export default connect(mapState, mapDispatch)(RegisterPage);
