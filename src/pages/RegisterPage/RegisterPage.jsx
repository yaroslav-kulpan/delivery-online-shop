import React from "react";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/auth.operations";
import ConfirmAccount from "../../components/ConfirmAccount/ConfirmAccount";
import FormControl from "../../components/FormControl/FormControl";

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
const RegisterPage = ({ register, loading }) => {
  return (
    <div className="container mt-5">
      <ConfirmAccount />
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
          }}
        >
          <Form>
            <FormControl
              label="Email"
              name="email"
              type="email"
              id="email"
              placeholder="name@email.com"
            />
            <FormControl
              label="Password"
              name="password"
              type="password"
              id="password"
              placeholder="*******"
            />
            <FormControl
              label="Confirm Password"
              name="confirmPassword"
              type="confirmPassword"
              id="confirmPassword"
              placeholder="*******"
            />
            <FormControl
              label="First Name"
              name="firstName"
              type="firstName"
              id="firstName"
              placeholder="Enter your name"
            />
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
  loading: state.auth.loading,
});
const mapDispatch = {
  register,
};
export default connect(mapState, mapDispatch)(RegisterPage);
