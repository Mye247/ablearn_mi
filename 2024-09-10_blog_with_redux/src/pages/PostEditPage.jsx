/* eslint-disable no-unused-vars */
import React, { useEffect, useId, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost } from "../redux/slices/postsSlice";

function PostEditPage() {
  const params = useParams();
  const postId = Number(params.postId);
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleId = useId();
  const bodyId = useId();
  const titleDOMRef = useRef(null); //입력값 가져오기
  const bodyDOMRef = useRef(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // 보낼 데이터
    const updatedPost = {
      id: postId,
      title: titleDOMRef.current.value,
      body: bodyDOMRef.current.value,
    };

    //작업명세서 준비 후
    //우체부를 통해 보내주기
    dispatch(editPost(updatedPost));

    //홈으로
    navigate("/");
  };

  useEffect(() => {
    titleDOMRef.current.value = post.title;
    bodyDOMRef.current.value = post.body;
  }, [post]);

  return (
    <>
      <form
        action=""
        className="border border-black w-[550px] mx-auto my-28 text-center bg-cyan-100 rounded-xl"
        onSubmit={handleSubmitForm}
      >
        <section className="">
          <h2 className="pt-5 font-bold text-xl">글 수정하기</h2>
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
            수정하기
          </button>
        </section>
      </form>
    </>
  );
}

export default PostEditPage;
