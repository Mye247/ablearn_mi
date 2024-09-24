import { NextRequest, NextResponse } from "next/server";
import { getPosts } from "../route";

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const postId = Number(params.postId);
  const posts = getPosts();

  const post = posts.find((post) => post.id === postId);

  if (!post) return NextResponse.error();
  return NextResponse.json(post);
}
