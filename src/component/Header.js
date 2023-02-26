import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { HiChatAlt2 } from 'react-icons/hi';
import {
  IoChatboxEllipsesSharp, IoBarChartSharp, IoMoon, IoSunny, IoEnter, IoExit,
} from 'react-icons/io5';
import { FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { setThemeAction } from '../states/theme/action';
import CategoryMenuMobile from './CategoryMenuMobile';

function Header({ signOut }) {
  const [isOpen, setOpen] = useState(false);
  const { theme, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const setTheme = () => {
    theme === 'dark' ? dispatch(setThemeAction('light')) : dispatch(setThemeAction('dark'));
  };

  const onSignOut = () => {
    signOut();
    closeMenuMobile();
  };

  const isLogin = () => (
    <button type="button" className="logout-btn" onClick={onSignOut}>
      <IoExit />
      <p>Logout</p>
    </button>
  );

  const notAuthed = () => (
    <Link className="sign-in-anchor" to="/login" onClick={closeMenuMobile}>
      <IoEnter />
      <p>Sign In</p>
    </Link>
  );

  const closeMenuMobile = () => {
    document.querySelector('.navigation').classList.remove('active');
    setOpen(false);
  };

  const toggleCategoryMenuMobile = () => {
    document.querySelector('.category-menu').classList.toggle('active');
  };

  return (
    <div className="header">
      <div className="brand">
        <Link to="/">
          Kuora
          <HiChatAlt2 />
        </Link>
      </div>
      <div className="header-btn">
        <button type="button" className="btn-category" onClick={toggleCategoryMenuMobile}>
          <FaTags />
        </button>
        <CategoryMenuMobile />
        <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
        <nav className={`navigation ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <button className="btn-theme" type="button" onClick={setTheme}>
                {theme === 'dark' ? <IoMoon /> : <IoSunny />}
                {theme === 'dark' ? <p>Dark Mode</p> : <p>Light Mode</p> }
              </button>
            </li>
            <li>
              <Link to="/" onClick={closeMenuMobile}>
                <IoChatboxEllipsesSharp />
                <p>Thread</p>
              </Link>
            </li>
            <li>
              <Link to="/leaderboards" onClick={closeMenuMobile}>
                <IoBarChartSharp />
                <p>Leaderboards</p>
              </Link>
            </li>
            <li>
              {authUser === null ? notAuthed() : isLogin()}
            </li>

          </ul>
        </nav>

      </div>
    </div>
  );
}

Header.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Header;
