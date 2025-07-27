import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';  // Fixed path
import AppNavigator from './navigation/AppNavigator';  // Fixed path

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}