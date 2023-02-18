import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiChatAlt2 } from 'react-icons/hi';
import {
  IoChatboxEllipsesSharp, IoBarChartSharp, IoPerson, IoMoon, IoSunny,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { setThemeAction } from '../states/theme/action';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const { theme, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const setTheme = () => {
    theme === 'dark' ? dispatch(setThemeAction('light')) : dispatch(setThemeAction('dark'));
  };

  return (
    <div className="header">
      <div className="brand">
        <Link to="/">
          Kuora
          <HiChatAlt2 />
        </Link>
      </div>
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
            <Link to="/">
              <IoChatboxEllipsesSharp />
              <p>Thread</p>
            </Link>
          </li>
          <li>
            <Link to="/leaderboards">
              <IoBarChartSharp />
              <p>Leaderboards</p>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <IoPerson />
              {authUser !== null ? <p>Logout</p> : <p>Sign In</p>}
              {/* <p>Logout</p> */}
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Header;
