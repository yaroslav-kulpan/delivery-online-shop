import axios from "axios";

axios.defaults.baseURL = "https://amz-app.herokuapp.com/api/v1/";

export default class AuthService {
  login = (credentials) => {
    return axios.post("auth/accounts/signin", credentials);
  };

  confirmAccount = (credentials) => {
    return axios.post("auth/accounts/confirm", credentials);
  };

  register = (data) => {
    // console.log(data, 'data')
    return axios.post("auth/accounts/signup", data);
  };

  // logout = () => {
  //
  // };
}
