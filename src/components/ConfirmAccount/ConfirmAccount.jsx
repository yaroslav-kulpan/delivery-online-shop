import { Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeConfirmToken } from "../../redux/auth/auth.actions";
import { confirmAccount } from "../../redux/auth/auth.operations";
import { Modal } from "../../shared/components";
import TextInput from "../../shared/components/TextInput";
import FormControl from "../FormControl/FormControl";

const ConfirmAccount = ({
  confirmToken,
  confirmAccount,
  removeConfirmToken,
}) => {
  const history = useHistory();
  return (
    <Modal open={true} onClose={removeConfirmToken}>
      <Formik
        initialValues={{ verificationCode: "" }}
        onSubmit={({ verificationCode }) => {
          confirmAccount(verificationCode, history);
        }}
      >
        <Form>
          <FormControl type="number" name="verificationCode" />
          <button type="submit" className="btn btn-primary mt-2 w-100">
            Confirm
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

const mapState = (state) => ({
  confirmToken: Boolean(state.auth.confirmToken),
  loading: state.auth.loading,
});

const mapDispatch = {
  confirmAccount,
  removeConfirmToken,
};

export default connect(mapState, mapDispatch)(ConfirmAccount);
