"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongodb/connectdb";
import { createUserParams, loginUserParams } from "./shared.types";
import bcrypt from "bcryptjs";
import UserA from "@/database/userA.model";
import console from "console";

export async function createUser(params: createUserParams) {
  try {
    await connectToDatabase();

    const { email, password } = params;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hashPassword });

    user.password = undefined;
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating user");
  }
}

export async function loginUser(params: loginUserParams) {
  try {
    await connectToDatabase();

    const { email, password } = params;

    const user = await User.findOne({ email });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid password");
    }

    user.password = undefined;
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating user");
  }
}

export async function getUser() {
  try {
    await connectToDatabase();
    const id = await UserA.findOne();

    return id;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating user");
  }
}

interface getUserId {
  id: string;
}

export async function getUserName(params: getUserId) {
  try {
    await connectToDatabase();

    const { id } = params;

    const user = await User.findOne({ _id: id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating user");
  }
}
