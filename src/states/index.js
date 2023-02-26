import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import themeReducer from './theme/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadsReducer from './thread/reducer';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import threadDetailReducer from './threadDetail/reducer';
import categoriesReducer from './categories/reducer';
import pagesReducer from './pages/reducer';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    users: usersReducer,
    authUser: authUserReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
    threadDetail: threadDetailReducer,
    category: categoriesReducer,
    pages: pagesReducer,
  },
});

export default store;
