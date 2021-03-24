import React from 'react'
import {connect} from "react-redux"
import { Formik, Form } from "formik";
import { register } from '../../redux/auth/auth.operations';
import FormControl from '../FormControl/FormControl';
import signUpSchema from './signUpSchema';




const RegisterForm = ({loading,register }) => {
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
    )
}

const mapState = (state) => ({
  loading: state.auth.loading,
});
const mapDispatch = {
    register,
    
};
export default connect(mapState, mapDispatch)(RegisterForm);


