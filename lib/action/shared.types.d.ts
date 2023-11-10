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
}
