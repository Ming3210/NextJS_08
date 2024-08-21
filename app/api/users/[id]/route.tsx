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
  console.log(res, 1111);

  const { params } = res;
  let find = users.find((user) => user.id == +res.params.id);
  console.log(find, 767);

  return NextResponse.json({
    message: find ? find : "",
  });
}

export async function DELETE(request: any, { params }: any) {
  const { id } = params;
  console.log(id);

  const userList = users.filter((user) => user.id !== +id);

  return NextResponse.json({
    message: `Xóa thông tin tài khoản thành công`,
    data: userList,
  });
}

export async function PUT(request: any, { params }: any) {
  const data = await request.json();
  const { id } = params;
  console.log(data);

  return NextResponse.json({ message: `CN thành công`, id: id, users: data });
}
export async function PATCH(request: any, { params }: any) {
  const data = await request.json();
  const { id } = params;
  console.log(data);

  return NextResponse.json({ message: `CN thành công`, id: id, users: data });
}
