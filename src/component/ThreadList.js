/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({
  threads, upvote, neutralvote, downvote,
}) {
  const { category } = useSelector((states) => states);

  const filterThread = threads.filter((thread) => {
    if (category.selectedCategory === null) {
      return thread;
    }
    return thread.category.includes(category.selectedCategory);
  });

  return (
    <div className="threads-list">
      {
        filterThread.map((thread) => (
          <ThreadItem key={thread.id} {...thread} upvote={upvote} neutralvote={neutralvote} downvote={downvote} />
        ))
      }

    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upvote: PropTypes.func.isRequired,
  neutralvote: PropTypes.func.isRequired,
  downvote: PropTypes.func.isRequired,
};

export default ThreadList;
