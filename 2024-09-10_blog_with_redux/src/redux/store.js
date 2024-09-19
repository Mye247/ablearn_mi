import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/postsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer, // postsSlice.reducer 불러오기
    // users: usersReducer, 로그인
  },
  devTools: true, //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
});

export default store;
