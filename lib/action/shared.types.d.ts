import { Schema } from "mongoose";

export interface createUserParams {
  email: string;
  password: string;
}

export interface loginUserParams {
  email: string;
  password: string;
}

export interface getSQLParams {
  question: string;
  page: number;
  pageSize: number;
  groupId?: any;
  userId?: any;
}

export interface groupCreateParams {
  title: string;
  ownerId: any;
  groupIds: string[];
  path: string;
}

export interface getGroupByIdParams {
  id: string;
}
