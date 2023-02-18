import { ActionType } from './action';

// const initialState = {
//   isDarkMode: !!JSON.parse(localStorage.getItem('themeKuora')),
// };

function themeReducer(theme = localStorage.getItem('themeKuora') || 'light', action = {}) {
  switch (action.type) {
    case ActionType.SET_THEME:
      return action.payload.theme;
    default:
      return theme;
  }
}

export default themeReducer;
