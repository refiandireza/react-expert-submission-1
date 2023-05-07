import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeAction } from '../states/theme/action';

function ThemeBtn() {
  const { theme } = useSelector((states) => states);
  const dispatch = useDispatch();

  const setTheme = () => {
    theme === 'dark' ? dispatch(setThemeAction('light')) : dispatch(setThemeAction('dark'));
  };
  return (
    <button className="btn-theme__desktop" onClick={setTheme} type="button">
      {theme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
}

export default ThemeBtn;
