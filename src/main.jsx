import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// import { store } from './redux/store.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.jsx';
import {store, persistor} from "./redux/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/PowerPulse">
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
