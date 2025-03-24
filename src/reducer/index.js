import { combineReducers } from "redux";
import userCrudReducer from "./crudReducers";



const rootReducer = combineReducers({
    users: userCrudReducer,
})

export default rootReducer;