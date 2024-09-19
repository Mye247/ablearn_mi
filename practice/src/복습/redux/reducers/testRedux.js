/* eslint-disable no-unused-vars */

const initialValue = {};

function testRedux(state = initialValue, action) {
  if (action.type === "영화 만들기") {
    // 처리하려는 작업이 맞는지 검사
    const newMovie = action.payload; // 가져온 데이터를 저장
    //(state와 newMovie를 가지고 만들기)
    const newState = {}; // 새로운 상태 만들기
    return newState;
  } else if (action.type === "음식 만들기") {
    const dd= {}
  } else {
    return state; // 스토어를 초기화 해주기 위해 필요
  }
}

export default testRedux;
