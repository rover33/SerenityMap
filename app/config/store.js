import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk';
import reducers from '../reducers/index'; //Import the reducer

const config = {
  key: 'root',
  storage,
}
 
const reducer = persistCombineReducers(config, reducers)
// Connect our store to the reducers
export default configureStore = () => {
  // ...
  let store = createStore(reducer, applyMiddleware(thunk))
  let persistor = persistStore(store)

  return { persistor, store }
}
//xport default createStore(reducers, applyMiddleware(thunk));