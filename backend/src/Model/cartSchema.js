import mongoose from "mongoose";

const CartSchema = mongoose.Schema({
    cart_products: [
        {
            product: { type: mongoose.Types.ObjectId, ref: "products" },
            quantity: { type: Number, default: 1, required: [true, 'please add the quantity'] },
            purchased_price: { type: String, required: [true, 'please add the quantity'] }
        }
    ],
    user: { type: mongoose.Types.ObjectId, ref: "customers" }
});



// // wishlist

// const WishlistSchema = mongoose.Schema({
//     products: {
//         cart_products: [{ type: mongoose.Types.ObjectId, ref: "customers" }],
//         quantity: { type: Number, default: 1, required: [true, 'please add the quantity'] },
//         purchased_price: { type: String, required: [true, 'please add the quantity'] }
//     },
//     user: { type: mongoose.Types.ObjectId, ref: "customers" }
// });


export const CartModel = new mongoose.model('CARTDATA', CartSchema);
// export const WishlistModel = new mongoose.model('WISHLISTDATA', WishlistSchema);