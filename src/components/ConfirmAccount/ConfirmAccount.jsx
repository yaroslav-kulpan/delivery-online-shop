import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeConfirmToken } from "../../redux/auth/auth.actions";
import { confirmAccount } from "../../redux/auth/auth.operations";
import { Modal } from "../../shared/components";
// import TextInput from "../../shared/components/TextInput";
import FormControl from "../FormControl/FormControl";
import * as Yup from "yup"


const validationSchema = Yup.object().shape({
  verificationCode: Yup.string().length(6, "min length 6 symbols").required( "the field is required")
})


const ConfirmAccount = () => {
  const confirmToken = useSelector(state => Boolean(state.auth.confirmToken));
  const loading = useSelector(state => state.auth.loading);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Modal open={confirmToken} onClose={() => dispatch(removeConfirmToken())}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ verificationCode: "" }}
        onSubmit={({ verificationCode }) => {
          dispatch(confirmAccount(verificationCode, history));
        }}
      >
        <Form>
          <FormControl type="string" name="verificationCode" />
          <button type="submit" className="btn btn-primary mt-2 w-100" disabled={loading}>
            Confirm
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default ConfirmAccount;
