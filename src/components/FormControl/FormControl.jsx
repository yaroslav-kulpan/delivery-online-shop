import { ErrorMessage } from "formik";
import React from "react";
import TextInput from "../../shared/components/TextInput";

const FormControl = ({ label, ...props }) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {label}
      </label>
      <TextInput {...props} />
      <ErrorMessage
        name={props.name}
        className="invalid-feedback d-block"
        component="small"
      />
    </div>
  );
};

export default FormControl;
