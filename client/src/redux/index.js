import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';
import PostReducer from './reducers/PostReducer';
const rootReducer = combineReducers({
	AuthReducer,
	PostReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
