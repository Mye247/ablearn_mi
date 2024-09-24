export type Post = {
  id: number;
  authorName: string;
  title: string;
  content: string;
};

export type NewPostsData = Omit<Post, "id">;
