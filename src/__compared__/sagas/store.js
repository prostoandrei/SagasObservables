import { createStore, applyMiddleware } from 'redux'
import reducer from '../../reducers'
import createSagaMiddleware from 'redux-saga'

import { fetchUserSaga } from './sagas'
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(fetchUserSaga)

