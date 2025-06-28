const mongoose = require("mongoose");
const Productschema = new mongoose.Schema({
    id:String,
    name: String,
    description: String,
    price:Number,
    originalPrice:Number,
    category: String,
    image1: String,
    image2: String,
    image3: String,
    isPremium: Boolean,
    isOnSale: Boolean,
    stock:Number,
    rating: Number,
    reviews: Number,
    tags: Array
})

const ProductModel = mongoose.model("products",Productschema);
module.exports = ProductModel