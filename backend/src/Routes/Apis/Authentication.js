import { Router } from "express";
import AuthenticationController from "../../Controllers/AuthenticationController.js";

const AuthRouting = Router();

AuthRouting.route('/').post(AuthenticationController.loginUser);

export default AuthRouting;