const USERS_SIGN_UP = "USERS/SIGN_UP";

const initialState = {
  users: [],
  currentUser: null,
};

function usersReducer(state = initialState, action) {
  if (action.type === USERS_SIGN_UP) {
    const newUser = action.payload; // 받고
    const users = [...state.users, newUser]; // 넣고
    const newState = {...state, users}; // 적용

    return newState;
  }

  return state;
}

export default usersReducer;
