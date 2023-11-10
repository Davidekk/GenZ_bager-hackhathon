import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  createdOn: Date;
  clinic?: string;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
