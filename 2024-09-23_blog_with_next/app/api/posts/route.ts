import { NewPostsData } from "@/schemas/posts.schema";
import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const projectDirPath = process.cwd();
  const dataPath = path.join(projectDirPath, "data/posts.json");
  const posts = await readFile(dataPath, "utf-8");

  console.log(posts);

  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const data = (await request.json()) as NewPostsData;
  const post = {
    id: Date.now(),
    ...data,
  };

  // 새로운 포스트 생성
  // const posts = getPosts();
  // posts.push(post);

  const projectDirPath = process.cwd();
  const dataPath = path.join(projectDirPath, "data/posts.json");
  const postsData = await readFile(dataPath, "utf-8");
  const posts = JSON.parse(postsData);

  posts.push(post);
  console.log(posts);

  await writeFile(dataPath, JSON.stringify(posts));

  return NextResponse.json(post);
}
