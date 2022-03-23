import { combineReducers } from "redux";
// import posts from './posts';
import auth from './auth';
import mcqs from './mcqs';
import fills from './fills';
import marks from './marks';
import code from './code';



export default combineReducers({
    auth,
    mcqs,
    fills,
    code,
    marks

});