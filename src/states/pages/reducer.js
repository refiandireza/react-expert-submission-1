import { ActionType } from './action';

function pagesReducer(pages = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_PAGES:
      return action.payload.pages;
    default:
      return pages;
  }
}

export default pagesReducer;
