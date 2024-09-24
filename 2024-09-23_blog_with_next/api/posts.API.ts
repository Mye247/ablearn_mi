import { NewPostsData, Post } from "@/schemas/posts.schema";

// 기본 정보
export async function getPosts() {
  try {
    const response = await fetch(`http://localhost:3000/api/posts`);
    const posts = await response.json();

    return posts as Post;
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

export async function createPost(newPostData: NewPostsData) {
  try {
    const response = fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify(newPostData),
    });

    const newPost = await (await response).json();

    return newPost;
  } catch (e) {
    console.error(e);
  }
}
