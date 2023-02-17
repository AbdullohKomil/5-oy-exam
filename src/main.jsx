import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { SearchAuthorProvider } from './context/SearchAuthorContext';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './GlobalStyles';
import './index.css';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <GlobalStyles />
      <Provider store={store}>
        <SearchAuthorProvider>
          <ThemeProvider>
            <LanguageProvider>
              <App />
            </LanguageProvider>
          </ThemeProvider>
        </SearchAuthorProvider>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  </>
);
