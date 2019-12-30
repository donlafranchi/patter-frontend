import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from './reducer';


const store = createStore(reducers);

export { store };
