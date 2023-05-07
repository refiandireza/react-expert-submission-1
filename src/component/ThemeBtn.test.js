/**
 * skenario testing
 *
 * - Theme Button component
 *   - should be visible
 *   - should have exact class
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import ThemeBtn from './ThemeBtn';
import store from '../states';

describe('Theme Button compenent', () => {
  it('should be visible to user', async () => {
    render(
      <Provider store={store}>
        <ThemeBtn />
      </Provider>,
    );
    const button = await screen.getByRole('button');

    expect(button).toBeVisible();
  });

  it('should have btn-theme__desktop class', async () => {
    render(
      <Provider store={store}>
        <ThemeBtn />
      </Provider>,
    );
    const button = await screen.getByRole('button');

    expect(button).toHaveClass('btn-theme__desktop', { exact: true });
  });
});
