import mongoose, { Schema } from "mongoose";
import { IUser, IUserData } from "../utils/interfaces";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      toLowerCase: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      max: 11,
    },
    image: {
      type: String,
      required: true,
    },
    imageID: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    stack: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model<IUserData>("user", userSchema);
