import React from "react";
import { Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import TextInput from "../../shared/components/TextInput";
import { login } from "../../redux/auth/auth.operations";

const signUnSchema = Yup.object().shape({
  email: Yup.string()
    .required("Поле обязательное!")
    .email("Введите валидный email!"),
  password: Yup.string().required("Поле обязательное!"),
});

const LoginPage = ({ login }) => {
  return (
    <div className="container mt-5">
      <div className="col-6 offset-3">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signUnSchema}
          onSubmit={login}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <TextInput
                name="email"
                type="email"
                className="form-control"
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
                className="form-control"
                id="password"
                placeholder="*****"
              />
              <ErrorMessage
                name="password"
                className="invalid-feedback d-block"
                component="small"
              />
            </div>
            <button className="btn btn-primary mt-2 w-100">Sign In</button>
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
  login,
};

export default connect(mapState, mapDispatch)(LoginPage);
