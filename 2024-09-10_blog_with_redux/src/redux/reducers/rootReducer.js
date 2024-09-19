import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({ // 각각의 Reducer 연결하기
  posts: postsReducer,
  users: usersReducer,
});

export default rootReducer;
