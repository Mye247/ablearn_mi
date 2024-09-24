import { getPosts } from "@/api/posts.API";
import Page from "@/components/Page";

import PostList from "./_components/PostList";

async function HomePage() {
  const posts = await getPosts();

  if (!posts) return <strong>포스트 목록을 불러오는데 실패하였습니다.</strong>;

  return (
    <>
      <Page title="All posts">
        <PostList posts={posts} />
      </Page>
    </>
  );
}

export const dynamic = "force-dynamic";

export default HomePage;
