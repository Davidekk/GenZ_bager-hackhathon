import { Schema, models, model, Document } from "mongoose";

export interface IGroups extends Document {
  ownerId: string;
  createdOn: Date;
  groupIds?: Schema.Types.ObjectId[];
  title: string;
}

const GroupsSchema = new Schema<IGroups>({
  ownerId: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  groupIds: [{ type: Schema.Types.ObjectId, ref: "user" }],
  title: {
    type: String,
    required: true,
  },
});

const Groups = models.Groups || model("Groups", GroupsSchema);

export default Groups;
