import mongoose, { mongo } from "mongoose";

function validationObject(name, required = true) {
    return ({
        type: String,
        required: [required, `${name} is required`],
        default: "",
        trim: true
    })
}

const _booleanObject = (status = false) => {
    return {
        type: Boolean,
        default: status
    }
}


const productSchema = mongoose.Schema({
    name: validationObject('product Name'),
    itemId: {
        type: String,
        required: [true, 'itemId is required'],
        unique: [true, 'itemId not be duplicate'],
        trim: true
    },
    normalImage: validationObject('largeImage', false),
    largeImage: validationObject('largeImage', false),
    mediumImage: validationObject('mediumImage', false),
    smallImage: validationObject('smallImage', false),
    itemCode: {
        type: String,
        required: [true, 'itemId is required'],
        unique: [true, 'itemId not be duplicate'],
        trim: true
    },
    displayOnlyAdmin: _booleanObject(),
    hideFromWeb: _booleanObject(),
    returnPolicy: {
        type: String,
        default: "7 day's replacement and return policy"
    },
    isEligibleForAutoOrder: _booleanObject(),
    webCategories: [{ type: Number, subRef: "category", required: [true, 'webCategory is required'] }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, subRef: "review" }],
    description: validationObject('description'),
    price: {
        normalPrice: {
            type: String,
            required: [true, 'price is required'],
            trim: true
        },
        offerPrice: {
            type: String,
            required: [true, 'price is required'],
            trim: true
        }
    },
    availableStock: {
        type: Number,
        default: 250,
    },
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }

}, { timestamp: true });

const ProductModel = new mongoose.model('PRODUCT', productSchema);

export default ProductModel;


