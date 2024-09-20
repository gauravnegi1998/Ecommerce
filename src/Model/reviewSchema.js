import mongoose from "mongoose";
// import validator from "validator";

const ReviewSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        subRef: 'PRODUCT',
        required: [true, 'Product id is required']
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        subRef: 'CUSTOMER',
        required: [true, 'Customer id is required']
    },
    ratingNumber: {
        type: Number,
        validate: {
            validator: (val) => {
                console.log('hello', val)
                return (val > 0 && val <= 5)
            },
            message: "rating should be between 1 to 5"
        }
    },
    ratingMessage: {
        type: String,
        required: [true, 'this field is required']
    },
    subject: {
        type: String,
        required: [true, 'this field is required']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const ReviewModel = new mongoose.model('review', ReviewSchema);

export default ReviewModel;