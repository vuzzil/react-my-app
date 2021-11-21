import axios from "axios";
import ApiError from "./ApiError";

const API_ROOT_URL = process.env.REACT_APP_API_ROOT_URL;

// baseURL是Backend API ROOT URL，之後只要填相對路徑

const instance = axios.create({
    baseURL: API_ROOT_URL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
    timeout: 5000
});


instance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        // Prevent infinite loops
        if (error.response && error.response.status === 401 && originalRequest.url === API_ROOT_URL + '/token/refresh/') {
            return Promise.reject(new ApiError(error));
        }

        if (error.response && error.response.status === 401 && error.response.statusText === "Unauthorized") {
            let user = JSON.parse(localStorage.getItem('user'));
            let refresh_token = (user && user.refresh) ? user.refresh : '';


            //Check whether refresh_token is expired
            const tokenParts = JSON.parse(atob(refresh_token.split('.')[1]));
            // exp date in token is expressed in seconds, while now() returns milliseconds:
            const now = Math.ceil(Date.now() / 1000);

            if (tokenParts.exp > now) {
                return instance
                    .post('/token/refresh/', { refresh: refresh_token })
                    .then((response) => {
                        localStorage.setItem("user", JSON.stringify(response.data));

                        instance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                        originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                        return instance(originalRequest);
                    })
                    .catch(err => {
                        console.log("refreshtoken時發生錯誤:");
                        console.log(err)
                        return Promise.reject(new ApiError("refreshtoken 失敗!"));
                    });
            } else {
                console.log("Refresh token is expired", tokenParts.exp, now);
                return Promise.reject(new ApiError("refreshtoken 失敗!,token已逾剘"));
            }
        }
        return Promise.reject(new ApiError(error));
    }
);


export default function request(method, url, data = null, config) {
    method = method.toLowerCase();
    let user = JSON.parse(localStorage.getItem('user'));
    let access_token = (user && user.access) ? user.access : '';
    instance.defaults.headers['Authorization'] = "JWT " + access_token;
    console.log("params=" + JSON.stringify(data));

    switch (method) {
        case "post":
            return instance
                .post(url, data, config)
                .catch(error => {
                    return Promise.reject(new ApiError(error));
                });
        case "get":
            return instance
                .get(url, { params: data }).catch(error => {
                    return Promise.reject(new ApiError(error));
                });
        case "delete":
            return instance
                .delete(url, { params: data })
                .catch(error => {
                    return Promise.reject(new ApiError(error));
                });

        case "put":
            return instance
                .put(url, data)
                .catch(error => {
                    return Promise.reject(new ApiError(error));
                });
        case "patch":
            return instance
                .patch(url, data)
                .catch(error => {
                    return Promise.reject(new ApiError(error));
                });
        default:
            console.log(`未知的 method: ${method}`);
            return Promise.reject(new ApiError(`未知的 method: ${method}`));
    }


}

