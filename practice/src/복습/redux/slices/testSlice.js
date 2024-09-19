/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  make: "make",
};

const testSlice = createSlice({
  initialState,
  name: "make",
  reducers: {
    createMake(state, action) { // 제작
      state.make.push(action.payload); // redux Toolkit 방식 (push해도 자동으로 불변성 관리됨)
    },
    deleteMake(state, action) { // 삭제
      const makeId = action.payload;
      const index = state.make.findIndex((make) => make.id == makeId);
      state.make.split(index, 1);
    },
    editMake(state, action){
      
    }
  },
});

export default testSlice;
