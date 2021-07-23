import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

const reducers = combineReducers({});

const mainReducer = (state = {}, action) => (action.type === HYDRATE ? { ...state, ...action.payload } : reducers(state, action));

export default mainReducer;
