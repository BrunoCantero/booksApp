import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import book from './books/reducer';

const rootReducer = combineReducers({ book });
export type RootState = ReturnType<typeof rootReducer>;

const middlewares = [applyMiddleware(thunk)];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(...middlewares));

export default store;
