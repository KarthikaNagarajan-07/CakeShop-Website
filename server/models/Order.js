const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    altPhone: { type: String },
    quantity: { type: Number, required: true },
    flavor: { type: String, required: true },
    message: { type: String },
    date: { type: Date, required: true},
    paymentMethod: { type: String, required: true},
    totalAmount: { type: Number, required: true }
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;



