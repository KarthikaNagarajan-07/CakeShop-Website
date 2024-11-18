// models/CustomizedCake.js
const mongoose = require('mongoose');

const CustomizedCakeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    cakeType: { type: String, required: true },
    size: { type: Number, required: true },
    quantity: { type: Number, required: true },
    tiers: { type: Number, required: true },
    message: { type: String },
    date: { type: Date, required: true },
    image: { type: String, required: true }, // This will store the filename
}, { timestamps: true });

const CustomizedCake = mongoose.model('CustomizedCake', CustomizedCakeSchema);
module.exports = CustomizedCake;
