import React from "react";
import { connect } from "react-redux";
import { Form, Formik } from "formik";
import { login } from "../../redux/auth/auth.operations";
import signInSchema from "./signInSchema";
import FormControl from "../FormControl/FormControl";

const LoginForm = ({ loading, login }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={signInSchema}
      onSubmit={login}
    >
      <Form>
        <FormControl
          label="Email"
          name="email"
          type="email"
          id="email"
          placeholder="name@example.com"
        />

        <FormControl
          label="Password"
          name="password"
          type="password"
          id="password"
          placeholder="*****"
        />

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary mt-2 w-100"
        >
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

const mapState = (state) => ({
  loading: state.auth.loading,
});

const mapDispatch = {
  login,
};

export default connect(mapState, mapDispatch)(LoginForm);
