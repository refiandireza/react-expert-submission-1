/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';
import { IoAddCircle } from 'react-icons/io5';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Header from './component/Header';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import Footer from './component/Footer';
import Loading from './component/Loading';
import { asyncPreloadProcess } from './states/isPreload/action';
import AddThreadModal from './component/AddThreadModal';

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

  const showModal = () => {
    const modalContainer = document.querySelector('.modal-container');
    const body = document.querySelector('body');
    modalContainer.classList.add('active');
    body.style.overflow = 'hidden';
  };

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="" element={<LeaderboardPage />} />
            {/* <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> */}
          </Routes>
        </main>
        <Footer />
        <AddThreadModal />
        {authUser !== null && <button type="button" className="btn-add" aria-label="add thread button" onClick={showModal}><IoAddCircle/></button>}
      </div>
    </>
  );
}

export default App;
