/* eslint-disable max-len */
import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import {
  IoCaretDown, IoCaretUp, IoEllipse, IoChatboxEllipses,
} from 'react-icons/io5';
import profile from '../img/sample-profile.png';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, category, createdAt, totalComments, user, upVotesBy, downVotesBy,
}) {
  return (
    <div className="thread-item">
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
          <span className="active">
            <IoCaretUp />
            {' '}
            {upVotesBy.length}
          </span>
          <span>
            <IoCaretDown />
            {' '}
            {downVotesBy.length}
          </span>
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
  // authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };
export default ThreadItem;
