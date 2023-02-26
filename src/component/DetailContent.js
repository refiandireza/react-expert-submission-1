/* eslint-disable max-len */
import React from 'react';
import {
  IoCaretDown, IoCaretUp, IoEllipse,
} from 'react-icons/io5';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { postedAt } from '../utils';

function DetailContent({
  id, title, body, createdAt, owner, category, upVotesBy, downVotesBy, upvote, downvote, neutralvote,
}) {
  const { authUser } = useSelector((states) => states);
  const isUpvote = authUser !== null ? upVotesBy.includes(authUser.id) : false;
  const isDownvote = authUser !== null ? downVotesBy.includes(authUser.id) : false;

  return (
    <div className="thread-detail__content">
      <div className="thread-detail__header">
        <div className="thread-detail__creator">
          <div className="thread-detail__profile">
            <img src={owner.avatar} alt={owner.name} />
            <p>{owner.name}</p>
          </div>
          <div className="thread-detail__time">
            <IoEllipse />
            <span>
              {postedAt(createdAt)}
            </span>
          </div>
          <div />
        </div>
        <h2>{title}</h2>
      </div>
      <div className="thread-detail__body">
        {parse(body)}
      </div>
      <div className="thread-detail__foter">
        <div className="thread-detail__category">
          <div className="category-box">
            <span>{`#${category}`}</span>
          </div>
        </div>
        <div className="vote-section">
          <button className={isUpvote ? 'active' : ''} type="button" onClick={isUpvote ? neutralvote : upvote}>
            <IoCaretUp />
            {' '}
            {upVotesBy.length}
          </button>
          <button className={isDownvote ? 'active' : ''} type="button" onClick={isDownvote ? neutralvote : downvote}>
            <IoCaretDown />
            {' '}
            {downVotesBy.length}
          </button>
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

DetailContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upvote: PropTypes.func.isRequired,
  downvote: PropTypes.func.isRequired,
  neutralvote: PropTypes.func.isRequired,
};

export default DetailContent;
