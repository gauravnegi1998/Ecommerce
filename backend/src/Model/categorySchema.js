import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    categoryId: {
        type: Number,
        require: [true, 'this field is required']
    },
    categoryName: {
        type: String,
        require: [true, 'this field is required']
    }
});

const categoryModel = new mongoose.model('category', categorySchema);

export default categoryModel;