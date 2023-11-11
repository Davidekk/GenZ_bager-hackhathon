"use server";

import { NextResponse } from "next/server";

let user = "default";

export async function POST(request) {
  try {
    const body = await request.json();
    user = body.uid;
    return NextResponse.json({ data: body.uid }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function GET() {
  try {
    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" });
  }
}
