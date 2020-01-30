import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dotenv from 'dotenv';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import loginReducer from './store/reducers/loginReducer';
import ocvReducer from './store/reducers/ocvReducer';
import utilsReducer from './store/reducers/utilsReducer';
// import streamReducer from './store/reducers/streamReducer';
// import analysisReducer from './store/reducers/analysisReducer';

dotenv.config();

const logger = store => {
	return next => {
		return action => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] next state', store.getState());
			return result;
		}
	}
};

//const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const rootReducer = combineReducers({streamReducer: streamReducer, analysisReducer: analysisReducer});
const rootReducer = combineReducers({loginReducer: loginReducer, ocvReducer: ocvReducer, utilsReducer: utilsReducer});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
