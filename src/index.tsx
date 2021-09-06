import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ApplicationDrawer from './ApplicationDrawer/ApplicationDrawer';
import { store, persistor } from './persistor';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationDrawer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//todo read about vitals
//reportWebVitals();
