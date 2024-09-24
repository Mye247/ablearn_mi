import { NewPostsData, Post } from "@/schemas/posts.schema";
import { NextRequest, NextResponse } from "next/server";

const posts: Post[] = [];

export const getPosts = () => posts;

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const data = (await request.json()) as NewPostsData;
  const post = {
    id: Date.now(),
    ...data,
  };

  // 새로운 포스트 생성
  posts.push(post);

  return NextResponse.json(post);
}
