/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoAddCircle } from 'react-icons/io5';
import ThreadList from '../component/ThreadList';
import notify from '../utils/notify';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncDownvoteThread, asyncNeutralvoteThread, asyncUpvoteThread } from '../states/thread/action';
import Sidebar from '../component/Sidebar';
import { setPages } from '../states/pages/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
    theme,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
    dispatch(setPages('homepage'));
    // dispatch(clearLeaderboardsActionCreator());
  }, [dispatch]);

  const onUpvote = (threadId) => {
    authUser !== null ? dispatch(asyncUpvoteThread(threadId)) : notify.alertToast('You Must Login to Vote', theme);
  };

  const onNeutralvote = (threadId) => {
    dispatch(asyncNeutralvoteThread(threadId));
  };

  const onDownvote = (threadId) => {
    authUser !== null ? dispatch(asyncDownvoteThread(threadId)) : notify.alertToast('You Must Login to Vote', theme);
  };

  const showModal = () => {
    const modalContainer = document.querySelector('.modal-container');
    const body = document.querySelector('body');

    if (authUser === null) {
      notify.alertToast('You Must Login to Vote', theme);
    } else {
      modalContainer.classList.add('active');
      body.style.overflow = 'hidden';
    }
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser !== null ? authUser.id : null,
  }));

  return (
    <>
      <Sidebar showModal={showModal} />
      <div className="homepage">
        <h1>Active Thread</h1>
        <ThreadList threads={threadList} upvote={onUpvote} neutralvote={onNeutralvote} downvote={onDownvote} />
      </div>
      {authUser !== null && <button type="button" className="btn-add" aria-label="add thread button" onClick={showModal}><IoAddCircle /></button>}
    </>
  );
}

export default HomePage;
