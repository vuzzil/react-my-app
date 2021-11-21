import axios from "axios";
import request from "./request";

class AuthApi {
  constructor() {
    let API_ROOT_URL = process.env.REACT_APP_API_ROOT_URL;
    this.axioInstance = axios.create({
      baseURL: API_ROOT_URL,
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      timeout: 5000
    });
  }


  login(email, password) {
    return this.axioInstance.post("/token/obtain/", {
      email,
      password
    })
      .then(response => {
        if (response.data.access) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      let refresh_token = user.refresh;
      //logout need authentication ,so must use request to do this .....
      return request("post", "/logout/", { refresh_token: refresh_token })
    }
  }

  register(username, email, password) {
    return this.axioInstance.post("/signup/", {
      username,
      email,
      password
    });
  }

}

export default new AuthApi();