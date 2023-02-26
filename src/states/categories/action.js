const ActionType = {
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
  SET_CATEGORIES: 'SET_CATEGORIES',
  CLEAR_CATEGORIES: 'CLEAR_CATEGORIES',
};

function receiveCategoriesActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_CATEGORIES,
    payload: {
      threads,
    },

  };
}

function setCategoriesActionCreator(category) {
  return {
    type: ActionType.SET_CATEGORIES,
    payload: {
      category,
    },
  };
}

function clearCategoriesActionCreator(category) {
  return {
    type: ActionType.CLEAR_CATEGORIES,
    payload: {
      category,
    },
  };
}

function setCategory(category) {
  return (dispatch) => {
    dispatch(setCategoriesActionCreator(category));
  };
}

function clearCategory() {
  return (dispatch) => {
    dispatch(clearCategoriesActionCreator());
  };
}

export {
  ActionType,
  receiveCategoriesActionCreator,
  setCategoriesActionCreator,
  setCategory,
  clearCategory,
};
