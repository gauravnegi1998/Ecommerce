import { Router } from "express";
import CartController from "../../Controllers/CartController.js";
import { asyncErrorHandler } from "../../Utils/ErrorsHandlers.js";
import AuthCheck from "../../middleware/AuthCheck.js";


const cartRouter = Router();

cartRouter.route('/')
    .get(AuthCheck._checkAuth, asyncErrorHandler(CartController._getMyCart))
    .post(AuthCheck._checkAuth, asyncErrorHandler(CartController._addToCart))
    .put(AuthCheck._checkAuth, asyncErrorHandler(CartController._updateMyCart))


cartRouter.route('/:id')
    .delete(AuthCheck._checkAuth, asyncErrorHandler(CartController._removeFormCart));


export default cartRouter;