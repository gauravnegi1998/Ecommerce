import _ from "lodash";
import { CartModel } from "../Model/cartSchema.js";
import mongoose from "mongoose";
import ProductModel from "../Model/ProductSchema.js";
import { notFoundError } from "../Utils/ErrorsHandlers.js";

class CartController {

    static _getMyCart = async (req, res, next) => {
        const CART_DATA = await CartModel.aggregate([
            { $match: { user: new mongoose.Types.ObjectId(String(req?.currentUser?._id)) } },
            { $unwind: { "path": "$cart_products", preserveNullAndEmptyArrays: true } },
            {
                $lookup: {
                    from: 'products', localField: "cart_products.product", foreignField: "_id",
                    let: {
                        quantity: "$cart_products.quantity",
                        price: "$cart_products.purchased_price"
                    }, as: "cart_products", pipeline: [
                        {
                            $project: {
                                _id: 1,
                                description: 1,
                                itemCode: 1,
                                itemId: 1,
                                "largeImage": 1,
                                "mediumImage": 1,
                                "smallImage": 1,
                                normalImage: 1,
                                name: 1,
                                quantity: "$$quantity",
                                price: "$$price"
                            }
                        }
                    ]
                }
            },
            {
                "$unwind": {
                    "path": "$cart_products"
                }
            },
            {
                $group: {
                    "_id": '$_id',
                    cart_products: { $push: "$cart_products" }
                }
            }
        ]).then((r) => r[0]);
        res.status(200).json({ status: 'ok', data: CART_DATA })
    }

    static _addToCart = async (req, res, next) => {
        const USER_ID = req.currentUser?._id || "";

        if (_.isArray(req?.body?.products) && req?.body?.products?.length > 0) {
            let PRODUCTS_DATA = []
            _.forEach((req?.body?.products || []), async ({ _id, quantity }) => {
                try {
                    const data = await ProductModel.findById(_id);
                    if (data?.itemCode && PRODUCTS_DATA?.length !== req?.body?.products?.length) {
                        PRODUCTS_DATA.push({ product: _id, quantity, purchased_price: data?.price?.offerPrice });
                    }
                    if (PRODUCTS_DATA?.length === req?.body?.products?.length) {
                        if (USER_ID) {
                            const DATA = await CartModel.findOne({ user: USER_ID });
                            if (DATA) {

                                const REMAIN_REVIEW = _.map(DATA?.cart_products, (row) => {
                                    const quantity = _.find(PRODUCTS_DATA, { product: row?.product?.toString() })?.quantity;
                                    return ({ product: row?.product, purchased_price: row?.purchased_price, quantity: (quantity ? row.quantity + quantity : row.quantity) });
                                });

                                let ADDING_DATA = _.filter(PRODUCTS_DATA, (r) => !(_.includes(_.map(REMAIN_REVIEW, (r) => r?.product?.toString()), r?.product)));
                                await CartModel.findOneAndUpdate({ user: USER_ID }, {
                                    cart_products: [...REMAIN_REVIEW, ...ADDING_DATA]
                                }, { new: true });

                            } else {
                                await CartModel.create({ cart_products: PRODUCTS_DATA, user: USER_ID });
                            }
                        }

                        return res.status(200).json({ status: "ok", message: "successfully add to cart" })
                    }
                } catch (err) {
                    next(err);
                }
            });
        }
    }

    static _removeFormCart = async (req, res, next) => {

    }

    static _updateMyCart = async (req, res, next) => {

    }

}

export default CartController;