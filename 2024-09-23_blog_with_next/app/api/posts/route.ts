import { NewPostsData } from "@/schemas/posts.schema";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
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
  const key = request.headers.get("Authorization");
  const isKeyValid = Number(key) % 1024 === 1000;

  if (!isKeyValid) return NextResponse.json("위조 여권", { status: 400 });

  console.log(key);
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

  await writeFile(dataPath, JSON.stringify(posts, undefined, 2));

  revalidatePath("/");

  return NextResponse.json(post);
}
