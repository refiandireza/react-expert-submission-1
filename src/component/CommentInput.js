import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CommentInput({ addComment }) {
  const { authUser } = useSelector((states) => states);
  const [content, setContent] = useState('');

  const onContentChange = (e) => {
    setContent(e.target.innerHTML);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addComment(content);
    document.querySelector('.comment-input-form').innerHTML = '';
  };
  return (
    <div className="comment-input">
      <h4>Write a Comment</h4>
      {authUser === null && (
        <p>
          You need to
          {' '}
          <Link to="/login">Login </Link>
          first to write a comment
        </p>
      )}
      {authUser && (
        <form onSubmit={onSubmit}>
          <div className="comment-input-form" contentEditable onInput={onContentChange} />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
