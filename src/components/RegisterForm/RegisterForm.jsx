import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import FormControl from "../FormControl/FormControl";
import { register } from "../../redux/auth/auth.operations";
import signUpSchema from "./signUpSchema";

const RegisterForm = () => {
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        dispatch(register(values));
        // alert(JSON.stringify(values, null, 2));
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
          placeholder="*****"
        />
        <FormControl
          label="Confirm Password"
          name="confirmPassword"
          type="confirmPassword"
          id="confirmPassword"
          placeholder="*****"
        />

        <FormControl
          label="First Name"
          name="firstName"
          type="firstName"
          id="firstName"
          placeholder="First Name"
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
  );
};

export default RegisterForm;
