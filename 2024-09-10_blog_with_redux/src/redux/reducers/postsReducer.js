import posts from "../../data/posts.json";

// action에 적을 작업 타입를 공장에 미리 적어놓기
export const POSTS_CREATE_POST = "POSTS/CREATE_POST";

export const createPost = (newPost) => ({
  type: POSTS_CREATE_POST,
  payload: newPost,
});

const initialState = {
  posts,
  filters: [],
};

// 초기값 세팅
function postsReducer(state = initialState, action) {
  if (action.type === POSTS_CREATE_POST) {
    console.log("state", state);
    const newPost = { ...action.payload, id: Date.now() };
    //뚝딱
    const posts = [newPost, ...state.posts];
    const newState = { ...state, posts };
    return newState;
  }
  return state;
}

export default postsReducer;
