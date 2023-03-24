// import 'react-native-gesture-handler';
// import 'node-libs-react-native/globals';
import React from 'react';
import {Provider} from 'react-redux';
import generateStore from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {persistStore} from 'redux-persist';
// import {PersistGate} from 'redux-persist/integration/react';
// import '@config';
// import store from '@redux-store';import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './src/app';

// const persistor = persistStore(store);
const store = generateStore();

export default function index() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SafeAreaProvider>
  );
}
