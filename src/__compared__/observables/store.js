import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from '../../reducers';
import { fetchUserEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(fetchUserEpic);
