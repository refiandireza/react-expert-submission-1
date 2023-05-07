/**
 * skenario testing
 *
 * - Leaderboard Item component
 *   - component should be visible
 *   - avatar should be visible
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LeaderboardItem from './LeaderboardItem';

describe('Theme Button compenent', () => {
  it('should be visible to user', async () => {
    const data = {
      name: 'Reza',
      avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
    };
    render(
      <LeaderboardItem user={data} score={80} />,
    );
    const item = await screen.getByText('Reza');

    expect(item).toBeVisible();
  });

  it('avatar should be visible to user', async () => {
    const data = {
      name: 'Reza',
      avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
    };
    render(
      <LeaderboardItem user={data} score={80} />,
    );
    const item = await screen.getByAltText('username');

    expect(item).toBeVisible();
  });
});
