import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    }
});


const Product = new mongoose.model("Product", ProductSchema);

export default Product;