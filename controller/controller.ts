import express, { Request, Response } from "express";
import { streamUpload } from "../utils/stream";
import { userModel } from "../model/model";
import { HTTP } from "../error/mainError";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, name, phone, location, stack, description } = req.body;
    const { secure_url, public_id }: any = await streamUpload(req);

    const user = await userModel.create({
      email,
      name,
      phone,
      image: secure_url,
      imageID: public_id,
      location,
      stack,
      description,
    });
    return res.status(HTTP.CREATED).json({
      message: `${user?.name}: your account have being created`,
      data: user,
    });
  } catch (error: any) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: `error creating user: ${error.message}`,
      info: error,
    });
  }
};

export const viewAllUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.find();
    return res.status(HTTP.OK).json({
      message: `All Available Users`,
      data: user,
    });
  } catch (error: any) {
    return res.status(HTTP.NOT_FOUND).json({
      message: `error occured when viewing all users: ${error}`,
    });
  }
};
