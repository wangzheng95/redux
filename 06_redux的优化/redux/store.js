import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CountReducer from './count_reducer'

export default createStore(CountReducer,applyMiddleware(thunk))