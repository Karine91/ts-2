import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './reducers/auth';
import usersReducer from './reducers/users';

import rootSaga from './sagas';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    users: usersReducer,
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;

export default store;