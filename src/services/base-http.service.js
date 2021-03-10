import axios from "axios";

export default class BaseHttpService {
  http;
  constructor() {
    this.http = axios.create({
      baseURL: process.env.REACT_APP_API_KEY,
    });
  }

  post = async (url = "", data = {}, config = {}) => {
    return this.http.get(url, data, config);
  };

  get = async (url = "", config = {}) => {
    return this.http.get(url, config);
  };

  saveToken(data) {
    const { accessToken } = data;
    localStorage.setItem("accessToken", accessToken);
  }
}
