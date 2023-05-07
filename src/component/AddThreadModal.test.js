/* eslint-disable max-len */
/**
 * skenario testing
 *
 * - Add thread modal component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should call onSubmit function when add thread button is clicked
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddThreadModal from './AddThreadModal';

import '@testing-library/jest-dom';

describe('Add thread modal component', () => {
  it('should handle title typing correctly', async () => {
    render(<AddThreadModal addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Input Title');

    await userEvent.type(titleInput, 'Ini Judul');

    expect(titleInput).toHaveValue('Ini Judul');
  });

  it('should handle category typing correctly', async () => {
    render(<AddThreadModal addThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Input Category');

    await userEvent.type(categoryInput, 'supercategory');

    expect(categoryInput).toHaveValue('supercategory');
  });

  it('should handle content body typing correctly', async () => {
    render(<AddThreadModal addThread={() => {}} />);
    const contentInput = await screen.getByTestId('input-body');

    // await userEvent.type(contentInput, 'supercontent');
    await userEvent.click(contentInput);
    await userEvent.keyboard('supercontent');

    expect(contentInput.textContent).toBe('supercontent');
  });

  //   it('should call addThread function when Add Thread button is clicked', async () => {
  //     const mockLogin = jest.fn();
  //     render(<AddThreadModal addThread={mockLogin} />);

  //     const titleInput = await screen.getByPlaceholderText('Input Title');
  //     const categoryInput = await screen.getByPlaceholderText('Input Category');
  //     const contentInput = await screen.getByTestId('input-body');

  //     await userEvent.type(titleInput, 'Ini Judul');
  //     await userEvent.click(contentInput);
  //     await userEvent.keyboard('supercontent');
  //     await userEvent.type(categoryInput, 'supercategory');

  //     const AddThreadButton = await screen.getByRole('button', { name: 'Add Thread', hidden: true });

  //     await userEvent.click(AddThreadButton);

//     const result = {
//       category: 'supercategory',
//       title: 'Ini Judul',
//       body: 'supercontent',
//     };
//     expect(mockLogin).toBeCalledWith(result);
//   });
});
