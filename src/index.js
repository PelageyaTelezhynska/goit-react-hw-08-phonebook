import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from './redux/store';
import contacts from './initialContacts.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App initialContacts={contacts} />
    </Provider>
  </React.StrictMode>
);
