import { NewPostsData, Post } from "@/schemas/posts.schema";
import { currentUser } from "@/zustand/auth.store";

// 기본 정보
export async function getPosts() {
  try {
    const response = await fetch(`http://localhost:3000/api/posts`, {
      cache: "no-store",
    });
    const posts = (await response
      .json()
      .then((data) => JSON.parse(data))) as Post[];

    return posts;
  } catch (e) {
    console.error(e);
  }
}

// 상세 정보
export async function getPost(postId: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
    const post = (await response.json()) as Post;

    return post;
  } catch (e) {
    console.error(e);
  }
}

export async function createPost(
  newPostData: NewPostsData,
  currentUser: currentUser
) {
  if (!currentUser) return;
  try {
    const response = fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify(newPostData),
      headers: {Authorization: String{currentUser}},
    });

    const newPost = await (await response).json();

    return newPost;
  } catch (e) {
    console.error(e);
  }
}
