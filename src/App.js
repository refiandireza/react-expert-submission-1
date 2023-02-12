import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [authUser, setAuthUser] = useState(null);

  if (authUser === null) {
    return (
      <main>
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
