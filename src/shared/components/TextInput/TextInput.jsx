import React from "react";
import { useField } from "formik";
import cn from "classnames";

const TextInput = ({ className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <input
      className={cn(
        "form-control",
        {
          "is-invalid": meta.error && meta.touched,
        },
        className
      )}
      {...props}
      {...field}
    />
  );
};

export default TextInput;