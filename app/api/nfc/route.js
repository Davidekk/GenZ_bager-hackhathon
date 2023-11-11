"use server";

import { NextResponse } from "next/server";
import mongoose, { Schema } from "mongoose";

const UserASchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserA = mongoose.models.UserA || mongoose.model("UserA", UserASchema);

let user = "default";
let isConnected = false;

// Initialize MongoDB connection
const initializeMongoDB = async () => {
  if (!process.env.MONGO_URI) {
    console.log("MISSING MONGODB_URL");
    return false;
  }

  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      mongoose.set("strictQuery", true);
      isConnected = true;
      console.log("mongoDB is connected");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      isConnected = false;
      return false;
    }
  }

  return true;
};

export async function POST(request) {
  try {
    if (!(await initializeMongoDB())) {
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    const body = await request.json();
    user = body.card_id;

    try {
      const id = await UserA.findOne();
      if (id) {
        id.id = user;
        id.save();
        return NextResponse.json({ data: user }, { status: 200 });
      }
      await UserA.create({ id: user });
      return NextResponse.json({ data: user }, { status: 200 });
    } catch (error) {
      console.error("Error creating user:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Initialize MongoDB connection (if not already connected)
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    // Query the latest user
    const latestUser = await UserA.findOne().sort({ _id: -1 });

    // Check if a user was found
    if (!latestUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user data
    return NextResponse.json({ data: latestUser.id }, { status: 200 });
  } catch (error) {
    console.error("GET request error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
