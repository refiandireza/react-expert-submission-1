/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardsList from '../component/LeaderboardsList';
import Sidebar from '../component/Sidebar';
import { setPages } from '../states/pages/action';
import { asyncPopulateLeaderboards } from '../states/shared/action';

function LeaderboardPage() {
  const {
    leaderboards,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
    dispatch(setPages('leaderboards'));
  }, [dispatch]);

  return (
    <>
      <Sidebar />
      <div className="leaderboard-page">
        <h2>Leaderboards</h2>
        <LeaderboardsList leaderboards={leaderboards} />
      </div>
    </>
  );
}

export default LeaderboardPage;
