/**
* Test scenario for categoriesReducer
*
* - threadsReducers function
* - should return the initial state when given by unknown action
* - should return the category when given SET_CATEGORIES action
*/

import categoriesReducer from './reducer';

describe('categoriesReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = {
      value: [],
      selectedCategory: null,
    };

    const action = { type: 'UNKNOWN' };

    const nextState = categoriesReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the category when given SET_CATEGORIES action', () => {
    const initialState = {
      value: ['react', 'introduction'],
      selectedCategory: null,
    };

    const action = {
      type: 'SET_CATEGORIES',
      payload: {
        category: 'react',
      },
    };

    const nextState = categoriesReducer(initialState, action);

    expect(nextState).toEqual({
      ...nextState,
      selectedCategory: 'react',
    });
  });
});
