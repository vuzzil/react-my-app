import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_ERROR,
} from "../store/actions";
import store from 'store';
import AuthApi from "./AuthApi";
import request from "./request";

export const register = (username, email, password) => {
    return AuthApi.register(username, email, password).then(
        () => {
            store.dispatch({
                type: REGISTER_SUCCESS,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            store.dispatch({
                type: REGISTER_FAIL,
            });

            store.dispatch({
                type: SET_ERROR,
                error: message,
            });

            return Promise.reject(message);
        }
    );
};

export const login = (email, password) => {
    return AuthApi.login(email, password).then(
        () => {
            return getLoginUser();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            store.dispatch({
                type: LOGIN_FAIL,
            });

            store.dispatch({
                type: SET_ERROR,
                error: message,
            });

            return Promise.reject(message);
        }
    );
};

export async function logout() {
    try {
        let res = await AuthApi.logout();
        if (res.data) console.log(res.data);
        
        localStorage.removeItem("user");
        store.dispatch({
            type: LOGOUT,
        });
        return Promise.resolve();
    } catch (e) {
        console.log(e);
        return Promise.reject(e);
    }
}


export const getLoginUser = () => {
    request("get", "/bistro/user/").then((res) => {

        if (res.data) {
            let user = res.data;
            //console.log("getLoginUser-> user=" + user.username);
            store.dispatch({
                type: LOGIN_SUCCESS,
                user: user,
            });
            return Promise.resolve();
        }

    }).catch(error => {
        console.log(error);
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        store.dispatch({
            type: LOGIN_FAIL,
        });
        store.dispatch({
            type: SET_ERROR,
            error: message,
        });

        return Promise.reject(message);
    });
}