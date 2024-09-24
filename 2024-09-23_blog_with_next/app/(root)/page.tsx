import { getPosts } from "@/api/posts.API";
import Page from "@/components/Page";
import { Post } from "@/schemas/posts.schema";
import Link from "next/link";

async function HomePage() {
  const posts = await getPosts();

  if (!posts) return <strong>포스트 목록을 불러오는데 실패하였습니다.</strong>;

  return (
    <>
      <Page title="All posts">
        <ul className="grid grid-cols-1 gap-y-4">
          {posts.map((post: Post) => (
            <li key={post.id}>
              <Link
                className="hover:text-orange-500 active:brightness-75 transition-all"
                href={`/posts/${post.id}`}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </>
  );
}

export default HomePage;
