import request from "./request";

import { SET_ERROR } from "store/actions";


export const getBistroMenus = (params) => (dispatch) => {
    return request("get", "/bistro/menus/", params)
        .catch((error) => {
            dispatch({
                type: SET_ERROR,
                error: error.message,
            });
            return Promise.reject();
        });
    ;
};