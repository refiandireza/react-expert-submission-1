/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoCloseCircle } from 'react-icons/io5';

function AddThreadModal({ addThread }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const onBodyChange = (e) => {
    setBody(e.target.innerHTML);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    const modalContainer = document.querySelector('.modal-container');
    const bodyElement = document.querySelector('body');

    modalContainer.classList.remove('active');
    bodyElement.style.overflow = 'auto';
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addThread(title, body, category);
    setTitle('');
    setCategory('');
    document.querySelector('.input-body').innerHTML = '';
    closeModal(event);
  };

  return (
    <div className="modal-container" onClick={closeModal} aria-hidden="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()} aria-hidden="true">
        <h3>Add New Thread</h3>
        <button type="button" className="close-btn" onClick={(e) => closeModal(e)}><IoCloseCircle /></button>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Input Title" value={title} onChange={onTitleChange} required />

          <input type="text" placeholder="Input Category" value={category} onChange={onCategoryChange} required />

          <div className="input-body" contentEditable data-placeholder="What's on your mind ?" onInput={onBodyChange} />

          <button type="submit" className="btn-thread-submit">Add Thread</button>
        </form>
      </div>
    </div>
  );
}

AddThreadModal.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default AddThreadModal;
