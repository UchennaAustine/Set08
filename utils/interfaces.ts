import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
  name?: string;
  email?: string;
  phone?: string;
  image?: string;
  imageID?: string;
  location?: string;
  stack?: string;
  description?: string;
}

export interface IUserData extends IUser, Document {}
