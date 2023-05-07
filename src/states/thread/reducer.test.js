/**
* Test scenario fro threadsReducer
*
* - threadsReducers function
* - should return the initial state when given by unknown action
* - should return the threads when given by RECEIVE_THREADS
* - should retun the threads with the new thread when given by ADD_TRHEAD action
* - should return the upvoted threads when given by UPVOTE_THREAD action
* - should return the downvoted threads when given by DOWNVOTE_THREAD action
* - - should return the neutral threads when given by NEUTRAL_THREAD action
*/

import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            body: 'Test by refiandireza',
            category: 'react',
            createdAt: '2022-12-04T08:17:38.100Z',
            downVotesBy: [],
            id: 'thread-1',
            ownerId: 'user-1',
            title: 'Test by refiandireza',
            totalComments: 0,
            upVotesBy: [],
          },
          {
            body: 'Test by refiandireza',
            category: 'react',
            createdAt: '2022-12-04T06:55:58.650Z',
            downVotesBy: [],
            id: 'thread-2',
            ownerId: 'user-2',
            title: 'Test by refiandireza',
            totalComments: 0,
            upVotesBy: [],
          },
        ],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('should retun the threads with the new thread when given by ADD_TRHEAD action', () => {
    const initialState = [
      {
        body: 'Test by refiandireza',
        category: 'react',
        createdAt: '2022-12-04T08:17:38.100Z',
        downVotesBy: [],
        id: 'thread-1',
        ownerId: 'user-1',
        title: 'Test by refiandireza',
        totalComments: 0,
        upVotesBy: [],
      },
      {
        body: 'Test by refiandireza',
        category: 'react',
        createdAt: '2022-12-04T06:55:58.650Z',
        downVotesBy: [],
        id: 'thread-2',
        ownerId: 'user-2',
        title: 'Test by refiandireza',
        totalComments: 0,
        upVotesBy: [],
      },
    ];
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          body: 'Test add by refiandireza',
          category: 'react',
          createdAt: '2022-12-04T08:17:38.100Z',
          downVotesBy: [],
          id: 'thread-3',
          ownerId: 'user-3',
          title: 'Test add by refiandireza',
          totalComments: 0,
          upVotesBy: [],
        },
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the upvoted threads when given by UPVOTE_THREAD action', () => {
    const initialState = [
      {
        body: 'Test by refiandireza',
        category: 'react',
        createdAt: '2022-12-04T08:17:38.100Z',
        downVotesBy: [],
        id: 'thread-1',
        ownerId: 'user-1',
        title: 'Test by refiandireza',
        totalComments: 0,
        upVotesBy: [],
      },
      {
        body: 'Test by refiandireza',
        category: 'react',
        createdAt: '2022-12-04T06:55:58.650Z',
        downVotesBy: [],
        id: 'thread-2',
        ownerId: 'user-2',
        title: 'Test by refiandireza',
        totalComments: 0,
        upVotesBy: [],
      },
    ];
    const action = {
      type: 'UPVOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-3',
      },
    };

    const nextState = threadsReducer(initialState, action);

    const threadToBeUpvote = nextState.find((thread) => thread.id === action.payload.threadId);
    expect(threadToBeUpvote).toEqual({
      ...threadToBeUpvote,
      upVotesBy: [action.payload.userId],
    });
  });

  it('should return the upvoted threads when given by DOWNVOTE_THREAD action', () => {
    const initialState = [
      {
        body: 'Test by refiandireza',
        category: 'react',
        createdAt: '2022-12-04T08:17:38.100Z',
        downVotesBy: [],
        id: 'thread-1',
        ownerId: 'user-1',
        title: 'Test by refiandireza',
        totalComments: 0,
        upVotesBy: [],
      },
      {
        body: 'Test by refiandireza',
        category: 'react',
        createdAt: '2022-12-04T06:55:58.650Z',
        downVotesBy: [],
        id: 'thread-2',
        ownerId: 'user-2',
        title: 'Test by refiandireza',
        totalComments: 0,
        upVotesBy: [],
      },
    ];
    const action = {
      type: 'DOWNVOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-3',
      },
    };

    const nextState = threadsReducer(initialState, action);

    const threadToBeDownvote = nextState.find((thread) => thread.id === action.payload.threadId);
    expect(threadToBeDownvote).toEqual({
      ...threadToBeDownvote,
      downVotesBy: [action.payload.userId],
    });
  });

  it('should return the upvoted threads when given by NEUTRALVOTE_THREAD action', () => {
    const initialState = [
      {
        body: 'Test by refiandireza',
        category: 'react',
        createdAt: '2022-12-04T08:17:38.100Z',
        downVotesBy: ['user-3', 'user-4'],
        id: 'thread-1',
        ownerId: 'user-1',
        title: 'Test by refiandireza',
        totalComments: 0,
        upVotesBy: [],
      },
      {
        body: 'Test by refiandireza',
        category: 'react',
        createdAt: '2022-12-04T06:55:58.650Z',
        downVotesBy: [],
        id: 'thread-2',
        ownerId: 'user-2',
        title: 'Test by refiandireza',
        totalComments: 0,
        upVotesBy: [],
      },
    ];
    const action = {
      type: 'NEUTRALVOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-3',
      },
    };

    const nextState = threadsReducer(initialState, action);

    const threadToBeNeutralvote = nextState.find((thread) => thread.id === action.payload.threadId);
    expect(threadToBeNeutralvote).toEqual({
      ...threadToBeNeutralvote,
      downVotesBy: ['user-4'],
    });
  });
});
