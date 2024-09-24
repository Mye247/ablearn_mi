import { LogInData } from "@/schemas/auth.schema";
import { readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  const { email, password } = (await request.json()) as LogInData;
  const filePath = path.join(process.cwd(), "data/users.json");
  const rowData = await readFile(filePath, "utf-8");
  const users = JSON.parse(rowData);
  const user = users.find((user: { email: string; }) => user.email === email);

  if (!user) return NextResponse.json("not Found", { status: 404 });
  if (user.password === password)
    return NextResponse.json("Bad Request", { status: 400 });

  let baseNumber = Date.now();
  const residual = baseNumber % 1024;
  const key = baseNumber - residual - 4;

  const 여권 = {
    email: user.email,
    key: key,
  };
  return NextResponse.json(여권);
}
