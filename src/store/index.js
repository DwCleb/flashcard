import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './ducks'

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null
const sagaMiddleWare = createSagaMiddleware({ sagaMonitor })

const middleWare = [
  sagaMiddleWare,
]

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore
const store = createAppropriateStore(reducers, applyMiddleware(...middleWare))

sagaMiddleWare.run(sagas)

export default store
