import { getPost } from "@/api/posts.API";
import Page from "@/components/Page";
import Link from "next/link";
import React from "react";

async function PostDetailPage(props: { params: { postId: string } }) {
  const postId = Number(props.params.postId);

  const postPromise = getPost(postId);

  let prevPostPromise;
  if (+postId > 1 && +postId <= 100) {
    const prevPostId = +postId - 1;
    prevPostPromise = getPost(prevPostId);
  }

  let nextPostPromise;
  if (+postId >= 1 && +postId < 100) {
    const nextPostId = +postId + 1;
    nextPostPromise = getPost(nextPostId);
  }

  const [post, prevPost, nextPost] = await Promise.all([
    postPromise,
    prevPostPromise,
    nextPostPromise,
  ]);

  console.log(post, prevPost, nextPost);

  // promise의 결과값을 한번에 뽑기

  //const {약속결과1, 약속결과2, 약속결과3} = await Promise.all([약속, 약속, 약속])

  if (!post) return <strong>포스트를 불러오는데 실패하였습니다</strong>;

  return (
    <>
      <Page title={post.title}>
        <div className="mb-4">
          <span>Author ID : </span>
          <span>{post.authorName}</span>
        </div>
        <p>{post.content}</p>

        <section className="mt-10 border-t border-black py-5">
          <ul className="grid grid-cols-2">
            <li>
              <Link href={prevPost ? `/posts/${prevPost.id}` : "#"}>
                <strong>이전 포스트 보러가기</strong>
                {prevPost ? (
                  <h6>{prevPost.title}</h6>
                ) : (
                  <div>이전 포스트가 없습니다</div>
                )}
              </Link>
            </li>

            <li>
              <Link href={nextPost ? `/posts/${nextPost.id}` : "#"}>
                <strong>다음 포스트 보러가기</strong>
                {nextPost ? (
                  <h6>{nextPost.title}</h6>
                ) : (
                  <div>다음 포스트가 없습니다</div>
                )}
              </Link>
            </li>
          </ul>
        </section>
      </Page>
    </>
  );
}

export default PostDetailPage;
