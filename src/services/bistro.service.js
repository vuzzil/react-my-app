import request from "./request";

//redux
import store from 'store';
import { SET_ERROR } from "store/actions";


export const getBistroMenus = (params) => {
    return request("get", "/bistro/menus/", params)
        .catch((error) => {
            store.dispatch({
                type: SET_ERROR,
                error: error.message,
            });
            return Promise.reject();
        });
    ;
};