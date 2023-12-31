"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongodb/connectdb";
import { getGroupByIdParams, groupCreateParams } from "./shared.types";
import Groups from "@/database/groups.model";
import { revalidatePath } from "next/cache";

export async function createGroup(params: groupCreateParams) {
  try {
    await connectToDatabase();

    const { ownerId, groupIds, path, title } = params;

    // Fetch user documents based on group IDs and extract their string _id fields
    const userIdPromises = groupIds.map((id) => User.find({ email: id }));
    const userDocuments = await Promise.all(userIdPromises);
    const userIds = userDocuments.flatMap((userDoc) =>
      userDoc.map((user) => user._id.toString())
    );

    console.log(userIds);

    // Create a group with an array of user string IDs
    const group = await Groups.create({ ownerId, groupIds: userIds, title });

    revalidatePath(path);
    return group;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating group");
  }
}

interface Props {
  ownerId: string;
}
export async function getGroups(params: Props) {
  try {
    await connectToDatabase();

    const groups = await Groups.find({ params });

    return groups;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting groups");
  }
}

export async function getGroupById(params: getGroupByIdParams) {
  try {
    await connectToDatabase();

    const groups = await Groups.findOne({ _id: params.id }).populate({
      path: "groupIds",
      model: User,
      select: "_id email",
      strictPopulate: false, // Not recommended
    });

    console.log(groups);

    const idToStrings = groups.groupIds.map((id: any) => id._id.toString());
    const emails = groups.groupIds.map((id: any) => id.email);
    return { idToStrings, emails };
  } catch (error) {
    console.log(error);
    throw new Error("Error getting groups");
  }
}
