import { combineReducers } from 'redux';

// reducer import
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import customizationReducer from './customizationReducer';

// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
    auth: authReducer,
    errorReducer,
    customization: customizationReducer
});

export default reducer;
