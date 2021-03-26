import React, { useCallback } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth.operations";
import FormControl from "../FormControl/FormControl";
import signInSchema from "./signInSchema";

const LoginForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const signIn = useCallback((values) => dispatch(login(values)), [dispatch]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={signInSchema}
      onSubmit={signIn}
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

export default LoginForm;
