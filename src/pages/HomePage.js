import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../component/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  // const [sample, setSample] = (api.getAllThreads());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    // authUser: authUser.id,
  }));

  return (
    <div className="homepage">
      <h1>Active Thread</h1>
      <ThreadList threads={threadList} />
    </div>
  );
}

export default HomePage;
