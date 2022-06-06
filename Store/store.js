// Dependencies

// import AsyncStorage from '@react-native-community/async-storage'; @react-native-async-storage/async-storage
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../Reducers/index';
// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorageLib,
  whitelist: ['employeeDetailReducer'],
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(createLogger()));
let persistor = persistStore(store);
export {store, persistor};

// used persistStore & createLogger as a Middleware
