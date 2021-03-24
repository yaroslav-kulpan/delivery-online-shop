import React from "react";
import { connect } from "react-redux";
import { register } from "../../redux/auth/auth.operations";
import ConfirmAccount from "../../components/ConfirmAccount/ConfirmAccount";
import RegisterForm from "../../components/RegisterForm/RegisterForm";




const RegisterPage = () => {
  return (
    <div className="container mt-5">
      <ConfirmAccount />
      <div className="col-6 offset-3">
        <RegisterForm/>
        
      </div>
    </div>
  );
};

export default RegisterPage;
