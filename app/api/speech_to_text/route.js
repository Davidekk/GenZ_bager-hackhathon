"use server";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({ value: true }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function GET(request) {
  try {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({ value: true }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" });
  }
}
