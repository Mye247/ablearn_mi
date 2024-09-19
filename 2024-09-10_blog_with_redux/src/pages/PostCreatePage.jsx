/* eslint-disable no-unused-vars */
import React, { useId, useRef } from "react";
import { POSTS_CREATE_POST } from "../redux/reducers/postsReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/slices/postsSlice";

function PostCreatePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleId = useId();
  const bodyId = useId();
  const titleDOMRef = useRef(null); //입력값 가져오기
  const bodyDOMRef = useRef(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // 보낼 데이터
    const newPost = {
      title: titleDOMRef.current.value,
      body: bodyDOMRef.current.value,
    };

    //작업명세서 준비 후
    //우체부를 통해 보내주기
    dispatch(createPost(newPost));

    //홈으로
    navigate("/");
  };

  return (
    <>
      <form
        action=""
        className="border border-black w-[550px] mx-auto my-28 text-center bg-cyan-100 rounded-xl"
        onSubmit={handleSubmitForm}
      >
        <section className="">
          <h2 className="pt-5 font-bold text-xl">새 글 작성하기</h2>
          <ul>
            <li>
              <label htmlFor={titleId} className="">
                제목
              </label>
              <input
                type="text"
                id={titleId}
                className="border border-black mb-2 mt-5 ml-1 rounded-lg p-3 max-w-sm w-full"
                ref={titleDOMRef}
              />
            </li>

            <li>
              <label htmlFor={bodyId} className="">
                내용
              </label>
              <input
                type="text"
                id={bodyId}
                className="border border-black mt-2 mb-10 ml-1 rounded-lg p-3 max-w-sm w-full h-40"
                ref={bodyDOMRef}
              />
            </li>
          </ul>

          <button
            className="border border-black p-3 mb-10 rounded-md active:bg-black/50"
            type="submit"
          >
            작성하기
          </button>
        </section>
      </form>
    </>
  );
}

export default PostCreatePage;
