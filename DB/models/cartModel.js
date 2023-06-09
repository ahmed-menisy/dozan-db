import mongoose from 'mongoose';


const product = new mongoose.Schema({
    product: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    _id: false
})

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User'
    },
    products: [product],
}, {
    timestamps: true
})

const cartModel = new mongoose.model('Cart', cartSchema)
export default cartModel
