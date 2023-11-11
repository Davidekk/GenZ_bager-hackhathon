"use server";

import { connectToDatabase } from "../mongodb/connectdb";
import { bankCreateParams, getGroupByIdParams } from "./shared.types";
import Groups from "@/database/groups.model";
import { revalidatePath } from "next/cache";
import Bank from "@/database/bank.model";

export async function createBank(params: bankCreateParams) {
  try {
    await connectToDatabase();

    const { ownerId, icon, path, title } = params;

    // Create a group with an array of user string IDs
    await Bank.create({ ownerId, title, icon });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw new Error("Error creating group");
  }
}

export async function getGroups() {
  try {
    await connectToDatabase();

    const groups = await Groups.find({});

    return groups;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting groups");
  }
}

export async function getBankById(params: getGroupByIdParams) {
  try {
    await connectToDatabase();

    const groups = await Bank.find({ ownerId: params.id });
    return groups;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting groups");
  }
}
