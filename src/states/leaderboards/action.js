const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
  CLEAR_LEADERBOARDS: 'CLEAR_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function clearLeaderboardsActionCreator() {
  return {
    type: ActionType.CLEAR_LEADERBOARDS,
    payload: {
      leaderboards: [],
    },
  };
}

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  clearLeaderboardsActionCreator,
};
