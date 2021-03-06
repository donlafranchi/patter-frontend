import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';

// import { routerMiddleware } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

// export const history = createHistory();

// const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
	if (process.env.NODE_ENV === 'production') {
		return applyMiddleware(promiseMiddleware, localStorageMiddleware);
	} else {
		// Enable additional logging in non-production environments.
		return applyMiddleware(promiseMiddleware, localStorageMiddleware, createLogger())
	}
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));

// export const store = createStore(reducer);