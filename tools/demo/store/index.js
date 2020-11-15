import { createStore, combineReducers, applyMiddleware } from '../lib/redux';
import thunk from '../lib/redux-thunk';
import logger from '../lib/redux-logger';
import { combineModules } from '../lib/reduxUtils';
import user from './user';

const modules = combineModules({
  user,
});

const middleware = [thunk, logger];

const Store = createStore(combineReducers(modules.reducers), applyMiddleware(...middleware));

export const actions = modules.actions;

export default Store;
