/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import posts from "../../data/posts.json"; // 데이터 가져오기

const initialState = {
  posts,
  filters: {},
};

// CUD 작업
const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    createPost(state, action) {
      console.log(state);
      state.posts.push({ ...action.payload, id: Date.now() }); // push를 사용해 바로 state에 값을 넣을 수 있음
    },

    deletePost(state, action) {
      const postId = action.payload;
      const index = state.posts.findIndex((post) => post.id === postId);
      state.posts.splice(index, 1);
    },

    editPost(state, action) {
      const { id: postId, ...updatedPost } = action.payload; // 변경할 값 가져오기
      const post = state.posts.find((post) => post.id === postId); // 수정할 값의 id가 state에 들어있는지 체크
      post.title = updatedPost.title; // id에 대응해서 그 id의 title, body 바꿔주기
      post.body = updatedPost.body;
    },
  },
});

export const postsReducer = postsSlice.reducer; // 위에서 정의한 reducer 불러오기

export const { createPost, deletePost, editPost } = postsSlice.actions; // actionCreater 불러오기
