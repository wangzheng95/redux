import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import CountReducer from './reducers/count'
import PersonReducer from './reducers/person'
const reducers = combineReducers({
  person: PersonReducer,
  count: CountReducer
})

export default createStore(reducers,applyMiddleware(thunk))