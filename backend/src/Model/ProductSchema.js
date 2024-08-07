import mongoose, { Schema } from "mongoose";

function validationObject(name, required = true) {
    return ({
        type: String,
        required: [required, `${name} is required`],
        default: "",
        trim: true
    })
}

const productSchema = mongoose.Schema({
    title: validationObject('product Name'),
    itemId: {
        type: Number,
        required: [true, 'itemId is required'],
        unique: [true, 'itemId not be duplicate'],
        trim: true
    },
    largeImage: validationObject('largeImage', false),
    mediumImage: validationObject('mediumImage', false),
    smallImage: validationObject('smallImage', false),
    itemCode: validationObject('itemCode'),
    hideFromAdmin: {
        type: Boolean,
        default: false
    },
    hideFromWeb: {
        type: Boolean,
        default: false
    },
    isEligibleForAutoOrder: {
        type: Boolean,
        default: false
    },
    webCategories: [{ type: Number, subRef: "category", required: [true, 'webCategory is required'] }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, subRef: "review" }],
    // webCategories: {
    //     type: [Number],
    //     required: [true, 'webCategory is required']
    // },
    description: validationObject('description'),
    price: {
        type: Number,
        required: [true, 'price is required'],
        trim: true
    }
});

const ProductModel = new mongoose.model('PRODUCT', productSchema);

export default ProductModel;


