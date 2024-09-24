import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  const user = await request.json();
  const filePath = path.join(process.cwd(), "data/users.json");
  const rowData = await readFile(filePath, "utf-8");
  const users = JSON.parse(rowData);

  users.push(user);

  const stringifiedUsers = JSON.stringify(users, undefined, 2);
  await writeFile(filePath, stringifiedUsers);

  delete user.password;

  return NextResponse.json(user);
}
