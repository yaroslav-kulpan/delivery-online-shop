import { connect } from 'react-redux';
import React from 'react'
import { login } from '../../redux/auth/auth.operations';
import { Form, Formik} from "formik";
import signInSchema from './signInschema';
import FormControl from '../FormControl/FormControl';



const LoginForm = ({loading, login }) => {
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
                name="email"
                type="email"
                className="form-control"
                id="email"
                    placeholder="name@example.com" />
                
                <FormControl
                 name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="*****" />
                
            <button type="submit" disabled={loading} className="btn btn-primary mt-2 w-100">Sign In</button>
          </Form>
        </Formik>
    )
}
const mapState = (state) => ({
  loading: state.auth.loading,
});

const mapDispatch = {
  login,
};


export default connect(mapState,mapDispatch) (LoginForm)
