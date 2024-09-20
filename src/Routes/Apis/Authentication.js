import { Router } from "express";
import AuthenticationController from "../../Controllers/AuthenticationController.js";
import { asyncErrorHandler } from "../../Utils/ErrorsHandlers.js";

const AuthRouting = Router();

AuthRouting.route('/').post(asyncErrorHandler(AuthenticationController.loginUser));

export default AuthRouting;