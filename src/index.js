import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { App } from 'components/App';
import { store, persistor } from './redux/store';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#DAAD86',
      light: '#DEF2F1',
      dark: '#BC986A',
      contrastText: '#EAE7DC',
    },
    secondary: {
      main: '#659DBD',
      light: 'rgb(236, 123, 114)',
      dark: 'rgb(162, 62, 55)',
      contrastText: '#fff',
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#4F4F4F',
      disabled: '#363636',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
