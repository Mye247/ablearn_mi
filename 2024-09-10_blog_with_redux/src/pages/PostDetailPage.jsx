/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../redux/slices/postsSlice";

function PostDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === Number(postId))
  );

  const { title, body } = post;

  const handleClickDelete = () => {
    const action = deletePost(Number(postId)); // url에서 가져오기 때문에 number로 설정
    dispatch(action);
    navigate("/");
  };

  return (
    <>
      <main>
        <section className="p-10  ">
          <h2 className="mb-3 text-4xl font-bold">{title}</h2>
          {postId}
          <p className="font-serif text-xl">{body}</p>
        </section>
        <footer className="mt-14 ml-10 ">
          <button className="border bg-red-500" onClick={handleClickDelete}>
            삭제하기
          </button>

          <Link to={`/posts/${postId}/edit`} className="border bg-blue-400">
            수정하기
          </Link>
        </footer>
      </main>
    </>
  );
}

export default PostDetailPage;
