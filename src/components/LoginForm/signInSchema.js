import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Поле обязательное!")
    .email("Введите валидный email!"),
  password: Yup.string().required("Поле обязательное!"),
});

export default signInSchema;
