import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import themeReducer from './theme/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadsReducer from './thread/reducer';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    users: usersReducer,
    authUser: authUserReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
