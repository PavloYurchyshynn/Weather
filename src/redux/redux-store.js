import { applyMiddleware, combineReducers, createStore } from "redux";
import weatherReduser from "./weather-reduser";
import thunkMiddleware from 'redux-thunk';

let redusers = combineReducers({
    weatherPage: weatherReduser,
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))

export default store