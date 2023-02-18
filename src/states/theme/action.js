import { setTheme } from '../../utils';

const ActionType = {
  SET_THEME: 'SET_THEME',
};

function setThemeActionCreator(data) {
  return {
    type: ActionType.SET_THEME,
    payload: {
      theme: data,
    },
  };
}

function setThemeAction(theme) {
  return (dispatch) => {
    setTheme(theme);
    dispatch(setThemeActionCreator(theme));
  };
}

export {
  ActionType,
  setThemeActionCreator,
  setThemeAction,
};
