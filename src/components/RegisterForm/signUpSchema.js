import * as Yup from "yup";

const isStrongPassword = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Поле обязательное!")
    .email("Введите пожалуйста валидный email!"),
  password: Yup.string()
    .required("Поле обязательное!")
    .matches(
      isStrongPassword,
      "Пароль должен содержать минимум 8 символов, заглавную букву, буквы в нижнем регистре, 1 число и 1 спецсимвол!"
    ),
  confirmPassword: Yup.string()
    .required("Поле обязательное!")
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать!"),
  firstName: Yup.string().required("Поле обязательное!"),
});

export default signUpSchema;
