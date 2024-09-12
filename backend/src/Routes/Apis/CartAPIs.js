import { Router } from "express";
import CartController from "../../Controllers/CartController.js";
import { asyncErrorHandler } from "../../Utils/ErrorsHandlers.js";
import AuthCheck from "../../middleware/AuthCheck.js";
import { _cartCheck } from "../../middleware/ProductCheck.js";


const cartRouter = Router();

cartRouter.route('/')
    .get(AuthCheck._checkAuth, asyncErrorHandler(CartController._getMyCart))
    .post(AuthCheck._checkAuth, _cartCheck, asyncErrorHandler(CartController._addToCart))


cartRouter.route('/:id')
    .delete(AuthCheck._checkAuth, _cartCheck, asyncErrorHandler(CartController._removeFormCart))
    .put(AuthCheck._checkAuth, _cartCheck, asyncErrorHandler(CartController._updateMyCart));


export default cartRouter;