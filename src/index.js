import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import './styles/darkMode.css';
import './styles/responsive.css';
import App from './App';
import store from './states';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);
