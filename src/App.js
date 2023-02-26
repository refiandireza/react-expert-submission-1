/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';

import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Header from './component/Header';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import Footer from './component/Footer';
import Loading from './component/Loading';
import { asyncPreloadProcess } from './states/isPreload/action';
import AddThreadModal from './component/AddThreadModal';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncAddThread } from './states/thread/action';
import DetailPage from './pages/DetailPage';
import ThemeBtn from './component/ThemeBtn';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const {
    theme,
    isPreload = false,
    authUser = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    document.documentElement.setAttribute('class', theme);
  }, [theme]);

  const onAddThread = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <div className="App">
        <Header signOut={onSignOut} />
        <ToastContainer />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboards" element={<LeaderboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ThemeBtn />
        <AddThreadModal addThread={onAddThread} />
      </div>
    </>
  );
}

export default App;
