import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducer/reducer";
import thunkMiddleware from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;