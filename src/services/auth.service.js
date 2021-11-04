import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_ERROR,
} from "../store/actions";

import AuthApi from "./AuthApi";
import request from "./request";

export const register = (username, email, password) => (dispatch) => {
    return AuthApi.register(username, email, password).then(
        () => {
            dispatch({
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

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_ERROR,
                error: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (username, password) => (dispatch) => {
    return AuthApi.login(username, password).then(
        () => {
            dispatch(getLoginUser());
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_ERROR,
                error: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthApi.logout();

    dispatch({
        type: LOGOUT,
    });
    return Promise.resolve();

};


export const getLoginUser = () => (dispatch) => {
    request("get", "/bistro/user/").then((res) => {

        if (res.data) {
            let user = res.data;
            //console.log("getLoginUser-> user=" + user.username);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: user },
            });
            return Promise.resolve();
        }

    }).catch(error => {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        dispatch({
            type: LOGIN_FAIL,
        });
        dispatch({
            type: SET_ERROR,
            error: message,
        });

        return Promise.reject();
    });
}