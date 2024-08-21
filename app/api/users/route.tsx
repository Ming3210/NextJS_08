import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";
import React from "react";

const users = [
  {
    id: 1,
    user_name: "David",
    age: 20,
  },
  {
    id: 2,
    user_name: "Linda",
    age: 22,
  },
];

export async function GET(req: any, res: any) {
  const { searchParams } = new URL(req.url);
  const search: any = searchParams.get("user_name") || "";

  const filteredUsers = users.filter((user) =>
    user.user_name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(res);

  return NextResponse.json({ data: filteredUsers });
}

export async function POST(request: any) {
  const data = await request.json();
  console.log(data);

  return NextResponse.json({ message: `Thêm user thành công`, users: data });
}
