/* eslint-disable max-len */
import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  IoCaretDown, IoCaretUp, IoEllipse, IoChatboxEllipses,
} from 'react-icons/io5';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, category, createdAt, totalComments, user, upVotesBy, downVotesBy, upvote, neutralvote, authUser, downvote,
}) {
  const isUpVote = upVotesBy.includes(authUser);
  const isDownVote = downVotesBy.includes(authUser);
  const navigate = useNavigate();

  const onUpvoteClick = (event) => {
    event.stopPropagation();
    upvote(id);
  };

  const onDownvoteClick = (event) => {
    event.stopPropagation();
    downvote(id);
  };

  const onNeutralClick = (event) => {
    event.stopPropagation();
    neutralvote(id);
  };

  const onTalkPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  return (
    <div className="thread-item" role="button" tabIndex={0} onKeyDown={onTalkPress} onClick={onThreadClick}>
      <div className="thread-header">
        <div className="thread-creator">
          <div className="thread-profile">
            <figure>
              <img src={user.avatar} alt="user-profile" />
            </figure>
            <span>{ user.name }</span>
          </div>
          <div className="thread-time">
            <IoEllipse />
            <span>
              {postedAt(createdAt)}
            </span>
          </div>

        </div>
        <h2>
          {title}
        </h2>

      </div>
      <div className="thread-body">
        {parse(body)}
      </div>
      <div className="thread-footer">
        <div className="category">
          <p>Categories: </p>
          <div className="category-box">
            <span>{`#${category}`}</span>
          </div>
        </div>
        <div className="vote-section">
          <button className={isUpVote ? 'active' : ''} type="button" onClick={isUpVote ? onNeutralClick : onUpvoteClick}>
            <IoCaretUp />
            {' '}
            {upVotesBy.length}
          </button>
          <button className={isDownVote ? 'active' : ''} type="button" onClick={isDownVote ? onNeutralClick : onDownvoteClick}>
            <IoCaretDown />
            {' '}
            {downVotesBy.length}
          </button>
          <span className="comment">
            <IoChatboxEllipses />
            {' '}
            {totalComments}
          </span>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };
export default ThreadItem;
