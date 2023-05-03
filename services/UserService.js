import axios from "axios";
import axiosApiInstance from "./../utils/interceptor";

export class UserService {
  static serverURL = `http://localhost:5001/api/Authentication`;
  static serverURL1 = `http://localhost:5001/api/Authentication/Register`;
  static serverURL2 = `http://localhost:5001/api/Authentication/Login`;

  static registration(user) {
    let dataURL = `${this.serverURL1}`;
    return axios.post(dataURL, user);
  }
  static login(user) {
    let dataURL = `${this.serverURL2}`;
    return axios.post(dataURL, user);
  }
  static getCurrentUser() {
    let dataURL = `${this.serverURL}/Users/current`;
    return axiosApiInstance.get(dataURL);
  }
}