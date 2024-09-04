import _ from "lodash";
import { CartModel } from "../Model/cartSchema.js";

class CartController {

    static _getMyCart = async (req, res, next) => {

    }

    static _addToCart = async (req, res, next) => {
        const USER_ID = req.currentUser?._id || "";
        let PRODUCTS_DATA = req?.body?.products || [];


        if (_.isArray(req?.body?.products) && req?.body?.products?.length > 0) {


            if (USER_ID) {
                const DATA = await CartModel.findOne({ user: USER_ID });

                PRODUCTS_DATA = _.map(PRODUCTS_DATA, ({ _id, quantity, price }) => ({ product: _id, quantity, purchased_price: price }));

                if (DATA) {

                    const PRODUCTS_ID = _.map(PRODUCTS_DATA, 'id');

                    const REMAIN_REVIEW = _.map(DATA?.cart_products, (row) => {
                        let data = {};
                        if (PRODUCTS_ID?.includes(row?.product?.toString())) {
                            const quantity = _.find(PRODUCTS_DATA, { product: row?.product?.toString() })?.quantity;
                            data = { ...row, quantity: row.quantity + quantity }
                        } else {
                            data = row;
                        }
                        return data;
                    })
                    let ADDING_DATA = _.filter(PRODUCTS_DATA, (r) => !_.includes(_.map(REMAIN_REVIEW, (r) => r?.product?.toString()), r?.product));


                    await CartModel.findOneAndUpdate({ user: USER_ID }, {
                        cart_products: [...REMAIN_REVIEW, ...ADDING_DATA],
                    }, { new: true });
                } else {
                    await CartModel.create({ cart_products: PRODUCTS_DATA, user: USER_ID });
                }

                return res.status(200).json({ status: "ok", message: "successfully add to cart" })
            }
        }



    }

    static _removeFormCart = async (req, res, next) => {

    }

    static _updateMyCart = async (req, res, next) => {

    }

}

export default CartController;