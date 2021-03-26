import { Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeConfirmToken } from "../../redux/auth/auth.actions";
import { confirmAccount } from "../../redux/auth/auth.operations";
import { Modal } from "../../shared/components";
<<<<<<< HEAD
import TextInput from "../../shared/components/TextInput";
import FormControl from "../FormControl/FormControl";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  verificationCode: Yup.string()
    .length(6, "min length 6 symbols")
    .required("the field is required"),
});
=======
// import TextInput from "../../shared/components/TextInput";
import FormControl from "../FormControl/FormControl";
import * as Yup from "yup"


const validationSchema = Yup.object().shape({
  verificationCode: Yup.string().length(6, "min length 6 symbols").required( "the field is required")
})

>>>>>>> 18ecb14591514472d4757e2be15a0dc09fd3ad78

const ConfirmAccount = ({
  confirmToken,
  confirmAccount,
  removeConfirmToken,
}) => {
  const history = useHistory();
  return (
    <Modal open={true} onClose={removeConfirmToken}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ verificationCode: "" }}
        onSubmit={({ verificationCode }) => {
          confirmAccount(verificationCode, history);
        }}
      >
        <Form>
          <FormControl type="string" name="verificationCode" />
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
