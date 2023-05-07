/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/**
* Test scenario fro threadDetailReducer
*
* - threadsReducers function
* - should return the initial state when given by unknown action
* - should return thread detail when RECEIVE_THREAD_DETAIL action
* - should return null when CLEAR_THREAD_DETAIL action
* - should return upvoted thread when UPVOTE_THREAD_DETAIL action
* - should return downvoted thread when DOWNVOTE_THREAD_DETAIL action
* - should return neutralvoted thread when NEUTRALVOTE_THREAD_DETAIL action
* - should return upvoted comment when UPVOTE_THREAD_COMMENT action
* - should return upvoted comment when NEUTRAL_THREAD_COMMENT action
* - should return downvoted comment when DOWNVOTE_THREAD_COMMENT action
*/

import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return thread detail when RECEIVE_THREAD_DETAIL action', () => {
    const initialState = null;
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-01',
          title: 'Detail Thread 1',
          body: 'Detail Thread 1 Body',
          createdAt: '2022-11-13T09:59:31.019Z',
          owner: {
            id: 'user-1',
            name: 'refiandirz',
            avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
          },
          category: 'react',
          comments: [
            {
              id: 'comment-01',
              content: 'test 1 comment content',
              createdAt: '2022-12-13T04:32:25.594Z',
              owner: {
                id: 'user-2',
                name: 'Dimas Saputra',
                avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
              },
              upVotesBy: [],
              downVotesBy: [
                'user-1',
              ],
            },
          ],
          upVotesBy: [
            'user-2',
            'user-3',
          ],
          downVotesBy: [
            'user-4',
          ],
        },
      },

    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return null when CLEAR_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-01',
      title: 'Detail Thread 1',
      body: 'Detail Thread 1 Body',
      createdAt: '2022-11-13T09:59:31.019Z',
      owner: {
        id: 'user-1',
        name: 'refiandirz',
        avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
      },
      category: 'react',
      comments: [
        {
          id: 'comment-01',
          content: 'test 1 comment content',
          createdAt: '2022-12-13T04:32:25.594Z',
          owner: {
            id: 'user-5PqX6Ldhnk_ifroq',
            name: 'Dimas Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-1',
          ],
        },
      ],
      upVotesBy: [
        'user-2',
        'user-3',
      ],
      downVotesBy: [
        'user-4',
      ],
    };

    const action = {
      type: 'CLEAR_THREAD_DETAIL',
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(null);
  });

  it('should return upvoted thread when UPVOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-01',
      title: 'Detail Thread 1',
      body: 'Detail Thread 1 Body',
      createdAt: '2022-11-13T09:59:31.019Z',
      owner: {
        id: 'user-1',
        name: 'refiandirz',
        avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
      },
      category: 'react',
      comments: [
        {
          id: 'comment-01',
          content: 'test 1 comment content',
          createdAt: '2022-12-13T04:32:25.594Z',
          owner: {
            id: 'user-2',
            name: 'Dimas Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-1',
          ],
        },
      ],
      upVotesBy: [
        'user-2',
        'user-3',
      ],
      downVotesBy: [
        'user-4',
      ],
    };
    const action = {
      type: 'UPVOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-6',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...nextState,
      upVotesBy: ['user-2', 'user-3', 'user-6'],
    });
  });

  it('should return downvoted thread when DOWNVOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-01',
      title: 'Detail Thread 1',
      body: 'Detail Thread 1 Body',
      createdAt: '2022-11-13T09:59:31.019Z',
      owner: {
        id: 'user-1',
        name: 'refiandirz',
        avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
      },
      category: 'react',
      comments: [
        {
          id: 'comment-01',
          content: 'test 1 comment content',
          createdAt: '2022-12-13T04:32:25.594Z',
          owner: {
            id: 'user-2',
            name: 'Dimas Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-1',
          ],
        },
      ],
      upVotesBy: [
        'user-2',
        'user-3',
      ],
      downVotesBy: [
        'user-4',
      ],
    };
    const action = {
      type: 'DOWNVOTE_THREAD_DETAIL',
      payload: {
        userId: 'user-6',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...nextState,
      downVotesBy: ['user-4', 'user-6'],
    });
  });

  it('should return neutralvoted thread when NEUTRALVOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-01',
      title: 'Detail Thread 1',
      body: 'Detail Thread 1 Body',
      createdAt: '2022-11-13T09:59:31.019Z',
      owner: {
        id: 'user-1',
        name: 'refiandirz',
        avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
      },
      category: 'react',
      comments: [
        {
          id: 'comment-01',
          content: 'test 1 comment content',
          createdAt: '2022-12-13T04:32:25.594Z',
          owner: {
            id: 'user-2',
            name: 'Dimas Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-1',
          ],
        },
      ],
      upVotesBy: [
        'user-2',
        'user-3',
      ],
      downVotesBy: [
        'user-4',
      ],
    };
    const action = {
      type: 'NEUTRAL_THREAD_DETAIL',
      payload: {
        userId: 'user-4',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...nextState,
      downVotesBy: [],
    });
  });

  it('should return upvoted comment when UPVOTE_THREAD_COMMENT action', () => {
    const initialState = {
      id: 'thread-01',
      title: 'Detail Thread 1',
      body: 'Detail Thread 1 Body',
      createdAt: '2022-11-13T09:59:31.019Z',
      owner: {
        id: 'user-1',
        name: 'refiandirz',
        avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
      },
      category: 'react',
      comments: [
        {
          id: 'comment-01',
          content: 'test 1 comment content',
          createdAt: '2022-12-13T04:32:25.594Z',
          owner: {
            id: 'user-2',
            name: 'Dimas Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-1',
          ],
        },
        {
          id: 'comment-02',
          content: 'test 2 comment content',
          createdAt: '2022-12-15T04:32:25.594Z',
          owner: {
            id: 'user-3',
            name: 'Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-4',
          ],
        },
      ],
      upVotesBy: [
        'user-2',
        'user-3',
      ],
      downVotesBy: [
        'user-4',
      ],
    };
    const action = {
      type: 'UPVOTE_THREAD_COMMENT',
      payload: {
        commentId: 'comment-01',
        userId: 'user-10',
      },
    };

    const nextState = threadDetailReducer(initialState, action);
    const findComment = nextState.comments.find((comment) => comment.id === action.payload.commentId);

    expect(findComment).toEqual({
      ...findComment,
      upVotesBy: ['user-10'],
    });
  });

  it('should return upvoted comment when NEUTRAL_THREAD_COMMENT action', () => {
    const initialState = {
      id: 'thread-01',
      title: 'Detail Thread 1',
      body: 'Detail Thread 1 Body',
      createdAt: '2022-11-13T09:59:31.019Z',
      owner: {
        id: 'user-1',
        name: 'refiandirz',
        avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
      },
      category: 'react',
      comments: [
        {
          id: 'comment-01',
          content: 'test 1 comment content',
          createdAt: '2022-12-13T04:32:25.594Z',
          owner: {
            id: 'user-2',
            name: 'Dimas Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-1',
          ],
        },
        {
          id: 'comment-02',
          content: 'test 2 comment content',
          createdAt: '2022-12-15T04:32:25.594Z',
          owner: {
            id: 'user-3',
            name: 'Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-4',
          ],
        },
      ],
      upVotesBy: [
        'user-2',
        'user-3',
      ],
      downVotesBy: [
        'user-4',
      ],
    };
    const action = {
      type: 'NEUTRAL_THREAD_COMMENT',
      payload: {
        commentId: 'comment-01',
        userId: 'user-1',
      },
    };

    const nextState = threadDetailReducer(initialState, action);
    const findComment = nextState.comments.find((comment) => comment.id === action.payload.commentId);

    expect(findComment).toEqual({
      ...findComment,
      upVotesBy: [],
    });
  });

  it('should return downvoted comment when DOWNVOTE_THREAD_COMMENT action', () => {
    const initialState = {
      id: 'thread-01',
      title: 'Detail Thread 1',
      body: 'Detail Thread 1 Body',
      createdAt: '2022-11-13T09:59:31.019Z',
      owner: {
        id: 'user-1',
        name: 'refiandirz',
        avatar: 'https://ui-avatars.com/api/?name=refiandirz&background=random',
      },
      category: 'react',
      comments: [
        {
          id: 'comment-01',
          content: 'test 1 comment content',
          createdAt: '2022-12-13T04:32:25.594Z',
          owner: {
            id: 'user-2',
            name: 'Dimas Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-1',
          ],
        },
        {
          id: 'comment-02',
          content: 'test 2 comment content',
          createdAt: '2022-12-15T04:32:25.594Z',
          owner: {
            id: 'user-3',
            name: 'Saputra',
            avatar: 'https://ui-avatars.com/api/?name=Saputra&background=random',
          },
          upVotesBy: [],
          downVotesBy: [
            'user-4',
          ],
        },
      ],
      upVotesBy: [
        'user-2',
        'user-3',
      ],
      downVotesBy: [
        'user-4',
      ],
    };
    const action = {
      type: 'DOWNVOTE_THREAD_COMMENT',
      payload: {
        commentId: 'comment-01',
        userId: 'user-10',
      },
    };

    const nextState = threadDetailReducer(initialState, action);
    const findComment = nextState.comments.find((comment) => comment.id === action.payload.commentId);

    expect(findComment).toEqual({
      ...findComment,
      downVotesBy: ['user-1', 'user-10'],
    });
  });
});
