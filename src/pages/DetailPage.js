/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentItem from '../component/CommentItem';
import {
  asyncAddComment, asyncDownvoteComment, asyncDownVoteThreadDetail, asyncNeutralvoteComment, asyncNeutralvoteThreadDetail, asyncReceiveThreadDetail, asyncUpvoteComment, asyncUpvoteThreadDetail,
} from '../states/threadDetail/action';
import notify from '../utils/notify';
import DetailContent from '../component/DetailContent';
import CommentInput from '../component/CommentInput';
import Sidebar from '../component/Sidebar';
import { setPages } from '../states/pages/action';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
    theme,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
    dispatch(setPages('detail-page'));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (!threadDetail) {
    return null;
  }

  const onUpvote = () => {
    authUser !== null ? dispatch(asyncUpvoteThreadDetail()) : notify.alertToast('You Must Login to Vote', theme);
  };

  const onNeutralvote = (threadId) => {
    dispatch(asyncNeutralvoteThreadDetail(threadId));
  };

  const onDownvote = (threadId) => {
    authUser !== null ? dispatch(asyncDownVoteThreadDetail(threadId)) : notify.alertToast('You Must Login to Vote', theme);
  };

  const onUpvoteComment = (commentId) => {
    authUser !== null ? dispatch(asyncUpvoteComment(commentId)) : notify.alertToast('You Must Login to Vote', theme);
  };

  const onDownvoteComment = (commentId) => {
    authUser !== null ? dispatch(asyncDownvoteComment(commentId)) : notify.alertToast('You Must Login to Vote', theme);
  };

  const onNeutralComment = (commentId) => {
    authUser !== null ? dispatch(asyncNeutralvoteComment(commentId)) : notify.alertToast('You Must Login to Vote', theme);
  };

  const commentList = threadDetail.comments.map((detail) => (
    <CommentItem key={detail.id} {...detail} upvoteComment={onUpvoteComment} downvoteComment={onDownvoteComment} neutralvoteComment={onNeutralComment} />
  ));

  const onAddComment = (content) => {
    dispatch(asyncAddComment(id, { content }));
  };

  return (
    <>
      <Sidebar />
      <div className="detail-page">
        <DetailContent {...threadDetail} upvote={onUpvote} downvote={onDownvote} neutralvote={onNeutralvote} />
        <span className="separator-line" />
        <CommentInput addComment={onAddComment} />
        <div className="thread-detail__comment__list">
          <h4 className="comments-count">
            Comments
            {' '}
            {`(${threadDetail.comments.length})`}
          </h4>
          {commentList}
        </div>
      </div>
    </>

  );
}

export default DetailPage;
