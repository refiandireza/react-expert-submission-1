const ActionType = {
  SET_PAGES: 'SET_PAGES',
};

function setPages(pages) {
  return {
    type: ActionType.SET_PAGES,
    payload: {
      pages,
    },
  };
}

export {
  ActionType,
  setPages,
};
