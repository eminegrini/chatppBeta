import { createStore } from 'redux'

import rootReducer from './redux'


export default function configureStore() {

  const store = createStore(rootReducer)

  return store
}