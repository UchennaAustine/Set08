"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller/controller");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)().single("avatar");
const router = express_1.default.Router();
router.route("/view").get(controller_1.viewAllUsers);
router.route("/register").post(upload, controller_1.createUser);
exports.default = router;
