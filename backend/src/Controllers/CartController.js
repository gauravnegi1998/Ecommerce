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
                        cartId: "$cart_products._id",
                        quantity: "$cart_products.quantity",
                        price: "$cart_products.purchased_price"
                    }, as: "cart_products", pipeline: [
                        {
                            $project: {
                                _id: "$$cartId",
                                productId: "$_id",
                                description: 1,
                                itemCode: 1,
                                itemId: 1,
                                "largeImage": 1,
                                "mediumImage": 1,
                                "smallImage": 1,
                                normalImage: 1,
                                name: 1,
                                quantity: "$$quantity",
                                price: "$$price",
                                shortName: 1
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
                    cart_products: { $push: "$cart_products" },
                    totalAmount: { $sum: { $multiply: [{ $convert: { input: "$cart_products.price", to: "double" } }, "$cart_products.quantity",] } },
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
                            const DATA = req?.cartData;
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
                                console.log(PRODUCTS_DATA, 'check')
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
        const ID = req?.params?.id;
        const USER_ID = req.currentUser._id || "";
        const USER_DATA = req?.cartData;

        console.log(_.filter(USER_DATA.cart_products, (r) => r?._id.toString() !== ID), ID, '_.filter(USER_DATA.cart_products, (r) => r?._id.toString() !== ID)')
        const DATA = _.map(_.filter(USER_DATA.cart_products, (r) => r?._id.toString() !== ID), (r) => ({
            product: r?.product,
            quantity: r?.quantity,
            purchased_price: r?.purchased_price,
            _id: r?._id
        }));

        console.log(DATA, "ffffffffffffffffffffffffffffff")

        const UPDATE = await CartModel.findOneAndUpdate({ user: USER_ID }, { $set: { 'cart_products': DATA } }, { new: true })

        if (UPDATE) {
            res.status(200).json({ status: "ok", message: "cart updated successfully" })
        }
    }


    // update cart
    static _updateMyCart = async (req, res, next) => {
        const ID = req?.params?.id;
        const USER_ID = req.currentUser._id || "";
        const USER_DATA = req?.cartData;

        // const DATA = _.map(USER_DATA.cart_products, (r) => ({
        //     product: r?.product,
        //     quantity:r?._id?.toString() === ID r?.quantity +,
        //     purchased_price: r?.purchased_price,
        //     _id: r?._id
        // }));
    }

}

export default CartController;