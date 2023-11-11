import { Schema, models, model, Document } from "mongoose";

export interface IBank extends Document {
  ownerId: string;
  createdOn: Date;
  title: string;
  icon: string;
}

const BankSchema = new Schema<IBank>({
  ownerId: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const Bank = models.Bank || model("Bank", BankSchema);

export default Bank;
