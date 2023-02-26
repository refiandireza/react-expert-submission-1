import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  IoChatboxEllipsesSharp, IoBarChartSharp, IoEnter, IoExit,
} from 'react-icons/io5';
import { AiFillPlusCircle } from 'react-icons/ai';
import { clearCategory, setCategory } from '../states/categories/action';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Sidebar({ showModal }) {
  const {
    pages, authUser, threads, category,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate('/');
    if (category.selectedCategory === e.target.value) {
      dispatch(clearCategory());
    } else {
      dispatch(setCategory(e.target.value));
    }
  };

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const isLogin = () => (
    <button type="button" className="logout-btn" onClick={onSignOut}>
      <IoExit />
      <p>Logout</p>
    </button>
  );

  const notAuthed = () => (
    <Link className="sign-in-anchor" to="/login">
      <IoEnter />
      <p>Sign In</p>
    </Link>
  );
  return (
    <div className="sidebar">
      <ul>
        {/* <li>
          <button className="btn-theme" type="button" onClick={setTheme}>
            {theme === 'dark' ? <IoMoon /> : <IoSunny />}
            {theme === 'dark' ? <p>Dark Mode</p> : <p>Light Mode</p> }
          </button>
        </li> */}
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
          {authUser === null ? notAuthed() : isLogin()}
        </li>

      </ul>
      {pages === 'homepage' && (
        <button onClick={showModal} type="button" className="sidebar__add-thread">
          <AiFillPlusCircle />
          {' '}
          <span>
            Add New Thread
          </span>
        </button>
      )}
      {pages === 'homepage' && (
        <div className="sidebar__category">
          <p>Popular Categories:</p>
          <div className="sidebar__category-list">
            {threads.map((thread) => (
              <button key={thread.id} className={category.selectedCategory === thread.category ? 'active' : ''} onClick={handleClick} value={thread.category} type="button">{`#${thread.category}`}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Sidebar.propTypes = {
  showModal: PropTypes.func,
};

Sidebar.defaultProps = {
  showModal: null,
};

export default Sidebar;
