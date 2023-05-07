/**
* Test scenario for authUser
*
* - authUser function
* - should return the initial state when given by unknown action
* - shoul return authUser when given SET_AUTH_USER action
*/
import authUserReducer from './reducer';

describe('authUser function', () => {
  it('return initial state when unknown action', () => {
    const initialState = null;
    const action = {
      type: 'UNKNOWN',
    };

    const nextState = authUserReducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });

  it('return authUser when given SET_AUTH_USER action', () => {
    const initialState = null;
    const userData = `{
        "id": "user-1",
        "name": "refiandireza",
        "email": "refiandi@gmail.com",
        "avatar": "https://ui-avatars.com/api/?name=refiandi&background=random"
    }`;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: JSON.parse(userData),
      },
    };

    const nextState = authUserReducer(initialState, action);

    expect(nextState).toEqual(action.payload.authUser);
  });
});
