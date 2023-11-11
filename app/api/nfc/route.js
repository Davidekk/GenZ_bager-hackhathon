"use server";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    console.log(body);
    return NextResponse.json({ data: body.uid }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" });
  }
}
