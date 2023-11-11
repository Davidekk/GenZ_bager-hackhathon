import { Schema, models, model, Document } from "mongoose";

export interface IUserA extends Document {
  id: string;
  createdAt: Date;
}

const UserASchema = new Schema<IUserA>({
  id: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserA = models.UserA || model("UserA", UserASchema);

export default UserA;
