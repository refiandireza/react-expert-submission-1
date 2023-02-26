import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardsList({ leaderboards }) {
  return (
    <div className="leaderboard-list">
      <div className="leaderboard-header">
        <p className="leaderboard-list__user-label">Username</p>
        <p className="leaderboard-list__score-label">Score</p>
      </div>
      {
        leaderboards.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
        ))
      }
    </div>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardsList;
