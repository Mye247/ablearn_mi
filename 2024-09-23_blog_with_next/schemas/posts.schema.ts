/* eslint-disable @typescript-eslint/no-explicit-any */
export type Post = {
  map?: any;
  id: number;
  authorName: string;
  title: string;
  content: string;
};

export type NewPostsData = Omit<Post, "id">;
