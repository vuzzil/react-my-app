import request from "./request";

//redux
import store from 'store';
import { SET_ERROR } from "store/actions";


export const getBistroMenus = (params) => {
    return request("get", "/bistro/menus/", params)
        .catch((error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            store.dispatch({
                type: SET_ERROR,
                error: message,
            });

            return Promise.reject(message);
        });
    ;
};