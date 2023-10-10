import express from "express";
import { createUser, viewAllUsers } from "../controller/controller";
import multer from "multer";

const upload = multer().single("avatar");

const router = express.Router();

router.route("/view").get(viewAllUsers);
router.route("/register").post(upload, createUser);

export default router;
