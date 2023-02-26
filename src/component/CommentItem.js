/* eslint-disable max-len */
import React from 'react';
import {
  IoCaretDown, IoCaretUp, IoEllipse,
} from 'react-icons/io5';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function CommentItem({
  id, content, createdAt, owner, upVotesBy, downVotesBy, upvoteComment, downvoteComment, neutralvoteComment,
}) {
  const { authUser } = useSelector((states) => states);
  const isUpvote = authUser !== null ? upVotesBy.includes(authUser.id) : false;
  const isDownvote = authUser !== null ? downVotesBy.includes(authUser.id) : false;

  const upVoteClick = (event) => {
    event.stopPropagation();
    upvoteComment(id);
  };

  const downVoteClick = (event) => {
    event.stopPropagation();
    downvoteComment(id);
  };

  const neutralVoteClick = (event) => {
    event.stopPropagation();
    neutralvoteComment(id);
  };

  return (
    <div className="comment-item">
      <div className="comment-creator">
        <div className="comment-creator__profile">
          <img src={owner.avatar} alt="username" />
          <p>{owner.name}</p>
        </div>
        <div className="comment-creator__time">
          <IoEllipse />
          <span>
            {postedAt(createdAt)}
          </span>
        </div>
      </div>
      <div className="comment-body">
        {parse(content)}
      </div>
      <div className="comment__vote-section">
        <button className={isUpvote ? 'active' : ''} type="button" onClick={isUpvote ? neutralVoteClick : upVoteClick}>
          <IoCaretUp />
          {' '}
          {upVotesBy.length}
        </button>
        <button className={isDownvote ? 'active' : ''} type="button" onClick={isDownvote ? neutralVoteClick : downVoteClick}>
          <IoCaretDown />
          {' '}
          {downVotesBy.length}
        </button>
      </div>
    </div>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  upvoteComment: PropTypes.func.isRequired,
  downvoteComment: PropTypes.func.isRequired,
  neutralvoteComment: PropTypes.func.isRequired,
};

export default CommentItem;
