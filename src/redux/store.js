import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :  compose;

const configureStore = preloadedState => createStore(
	reducer,
	preloadedState,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
)

const store = configureStore({});

export default store;