import { SET_ERROR, HIDE_ERROR } from './actions';


const initialState = { isOpen: false, error: null };
const errorReducer = (state = initialState, action) => {
    const { type, error } = action;

    switch (type) {
        case SET_ERROR:
            return {
                ...state,
                isOpen: true,
                error: error,
            };
        case HIDE_ERROR:
            return {
                ...state,
                isOpen: false,
                error: null,
            };
        default:
            return state;
    }
}


export default errorReducer;