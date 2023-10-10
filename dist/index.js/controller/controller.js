"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewAllUsers = exports.createUser = void 0;
const stream_1 = require("../utils/stream");
const model_1 = require("../model/model");
const mainError_1 = require("../error/mainError");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, phone, location, stack, description } = req.body;
        const { secure_url, public_id } = yield (0, stream_1.streamUpload)(req);
        const user = yield model_1.userModel.create({
            email,
            name,
            phone: parseInt(phone),
            image: secure_url,
            imageID: public_id,
            location,
            stack,
            description,
        });
        return res.status(mainError_1.HTTP.CREATED).json({
            message: `${user === null || user === void 0 ? void 0 : user.name}: your account have being created`,
            data: user,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.BAD_REQUEST).json({
            message: `error creating user: ${error}`,
            info: error,
        });
    }
});
exports.createUser = createUser;
const viewAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield model_1.userModel.find();
        return res.status(mainError_1.HTTP.OK).json({
            message: `All Available Users`,
            data: user,
        });
    }
    catch (error) {
        return res.status(mainError_1.HTTP.NOT_FOUND).json({
            message: `error occured when viewing all users: ${error}`,
        });
    }
});
exports.viewAllUsers = viewAllUsers;
