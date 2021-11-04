import axios from "axios";


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
    let username = email;    //Server side: use fieldname = username
    return this.axioInstance.post("/token/obtain/", {
      username,
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
    localStorage.removeItem("user");
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