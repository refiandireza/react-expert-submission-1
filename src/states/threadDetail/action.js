import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  UPVOTE_THREAD_COMMENT: 'UPVOTE_THREAD_COMMENT',
  DOWNVOTE_THREAD_COMMENT: 'DOWNVOTE_THREAD_COMMENT',
  NEUTRAL_THREAD_COMMENT: 'NEUTRAL_THREAD_COMMENT',
  UPVOTE_THREAD_DETAIL: 'UPVOTE_THREAD_DETAIL',
  DOWNVOTE_THREAD_DETAIL: 'DOWNVOTE_THREAD_DETAIL',
  NEUTRAL_THREAD_DETAIL: 'NEUTRAL_THREAD_DETAIL',

};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addCommentActionCreator({ threadId, content }) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      threadId,
      content,
    },
  };
}

function upvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRAL_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function upvoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UPVOTE_THREAD_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downvoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWNVOTE_THREAD_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralvoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRAL_THREAD_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpvoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(upvoteThreadDetailActionCreator(authUser.id));

    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(downvoteThreadDetailActionCreator(authUser.id));

    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncNeutralvoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(neutralvoteThreadDetailActionCreator(authUser.id));

    try {
      await api.neutralVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAddComment(threadId, { content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.createComment(threadId, { content });
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpvoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(upvoteCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.upVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(upvoteCommentActionCreator({ commentId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncDownvoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(downvoteCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.downVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(downvoteCommentActionCreator({ commentId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralvoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(neutralvoteCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.neutralVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralvoteCommentActionCreator({ commentId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  asyncAddComment,
  asyncUpvoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralvoteThreadDetail,
  asyncUpvoteComment,
  asyncDownvoteComment,
  asyncNeutralvoteComment,
};
