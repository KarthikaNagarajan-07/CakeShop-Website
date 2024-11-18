// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import './PlaceOrder.css';

// const PlaceOrderPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { product, address, phone, altPhone, quantity, flavor, message } = location.state || {}; 

//     if (!product) {
//         return <div>No product selected</div>;
//     }

//     // Function to extract numeric value from price string
//     const extractNumericValue = (priceString) => {
//         const numericString = priceString.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
//         return parseFloat(numericString);
//     };

//     // Calculate total amount
//     const calculateTotalAmount = () => {
//         const pricePerKg = extractNumericValue(product.price);
//         const quantityValue = parseFloat(quantity);

//         console.log('Parsed Price:', pricePerKg);
//         console.log('Parsed Quantity:', quantityValue);

//         if (isNaN(pricePerKg) || isNaN(quantityValue)) {
//             console.warn('Invalid price or quantity value');
//             return '0.00';
//         }

//         return (pricePerKg * quantityValue).toFixed(2);
//     };

//     const totalAmount = calculateTotalAmount();

//     const handleConfirmOrder = async () => {
//         try {
//             const orderData = {
//                 product: product.title,
//                 address,
//                 phone,
//                 altPhone,
//                 quantity,
//                 flavor,
//                 message,
//                 // date,
//                 totalAmount
//             };
    
//             const response = await axios.post('http://localhost:3001/api/orders', orderData, { withCredentials: true });
//             console.log('Order placed:', response.data);
//             navigate('/order-success'); // Redirect to success page or handle accordingly
//         } catch (error) {
//             console.error('Error placing order:', error);
//         }
//         navigate('/order-success'); // Adjust to your route

//     };

       
//     const handleCancelOrder = () => {
//         console.log('Order canceled');
//         navigate('/'); // Adjust to your route
//     };

//     return (
//         <div className="place-order-page">
//             <h2>Order Summary</h2>
//             <div className="order-summary">
//                 <div className="product-info">
//                     <img src={product.imageUrl} alt={product.title} />
//                     <h3>{product.title}</h3>
//                     <p>Quantity: {quantity}KG</p>
//                     <p>Flavor: {flavor}</p>
//                     <p>Amount Per 1KG: {product.price} (Inclusive of GST)</p>
//                     <p><strong>Total Amount: ₹{totalAmount}</strong></p> {/* Display the total amount */}
//                 </div>
//                 <div className="order-details">
//                     <p><strong>Delivery Address:</strong> {address}</p>
//                     <p><strong>Phone Number:</strong> {phone}</p>
//                     <p><strong>Alternative Phone Number:</strong> {altPhone}</p>
//                     <p><strong>Message:</strong> {message}</p>
//                     {/* <p><strong>Date:</strong>{date}</p> */}
//                 </div>
//                 <button onClick={handleConfirmOrder}>Confirm Order</button>
//                 <button onClick={handleCancelOrder}>Cancel Order</button>
//             </div>
//         </div>
//     );
// };

// export default PlaceOrderPage;

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import './PlaceOrder.css';

// const PlaceOrderPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { product, address, phone, altPhone, quantity, flavor, message, date } = location.state || {}; 

//     if (!product) {
//         return <div>No product selected</div>;
//     }

//     // Function to extract numeric value from price string
//     const extractNumericValue = (priceString) => {
//         const numericString = priceString.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
//         return parseFloat(numericString);
//     };

//     // Calculate total amount
//     const calculateTotalAmount = () => {
//         const pricePerKg = extractNumericValue(product.price);
//         const quantityValue = parseFloat(quantity);

//         console.log('Parsed Price:', pricePerKg);
//         console.log('Parsed Quantity:', quantityValue);

//         if (isNaN(pricePerKg) || isNaN(quantityValue)) {
//             console.warn('Invalid price or quantity value');
//             return '0.00';
//         }

//         return (pricePerKg * quantityValue).toFixed(2);
//     };

//     const totalAmount = calculateTotalAmount();

//     const handleConfirmOrder = async () => {
//         try {
//             const orderData = {
//                 product: product.title,
//                 address,
//                 phone,
//                 altPhone,
//                 quantity,
//                 flavor,
//                 message,
//                 date, // Include the date in the order data
//                 totalAmount
//             };
    
//             const response = await axios.post('http://localhost:3001/api/orders', orderData, { withCredentials: true });
//             console.log('Order placed:', response.data);
//             navigate('/order-success'); // Redirect to success page or handle accordingly
//         } catch (error) {
//             console.error('Error placing order:', error);
//         }
//     };

//     const handleCancelOrder = () => {
//         console.log('Order canceled');
//         navigate('/'); // Adjust to your route
//     };

//     return (
//         <div className="place-order-page">
//             <h2>Order Summary</h2>
//             <div className="order-summary">
//                 <div className="product-info">
//                     <img src={product.imageUrl} alt={product.title} />
//                     <h3>{product.title}</h3>
//                     <p>Quantity: {quantity}KG</p>
//                     <p>Flavor: {flavor}</p>
//                     <p>Amount Per 1KG: {product.price} (Inclusive of GST)</p>
//                     <p><strong>Total Amount: ₹{totalAmount}</strong></p>
//                 </div>
//                 <div className="order-details">
//                     <p><strong>Delivery Address:</strong> {address}</p>
//                     <p><strong>Phone Number:</strong> {phone}</p>
//                     <p><strong>Alternative Phone Number:</strong> {altPhone}</p>
//                     <p><strong>Message:</strong> {message}</p>
//                     <p><strong>Date of Delivery:</strong> {date}</p> {/* Display the date of delivery */}
//                 </div>
//                 <button onClick={handleConfirmOrder}>Confirm Order</button>
//                 <button onClick={handleCancelOrder}>Cancel Order</button>
//             </div>
//         </div>
//     );
// };

// export default PlaceOrderPage;



// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './PlaceOrder.css';

// const PlaceOrderPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { product, address, phone, altPhone, quantity, flavor, message, date } = location.state || {}; 

//     const [paymentMethod, setPaymentMethod] = useState('Online UPI'); // Default to Online UPI

//     if (!product) {
//         return <div className="no-product">No product selected</div>;
//     }

//     const extractNumericValue = (priceString) => {
//         const numericString = priceString.replace(/[^0-9.]/g, '');
//         return parseFloat(numericString);
//     };

//     const calculateTotalAmount = () => {
//         const pricePerKg = extractNumericValue(product.price);
//         const quantityValue = parseFloat(quantity);

//         if (isNaN(pricePerKg) || isNaN(quantityValue)) {
//             return '0.00';
//         }

//         return (pricePerKg * quantityValue).toFixed(2);
//     };

//     const totalAmount = calculateTotalAmount();

//     const handleConfirmOrder = async () => {
//         try {
//             const orderData = {
//                 product: product.title,
//                 address,
//                 phone,
//                 altPhone,
//                 quantity,
//                 flavor,
//                 message,
//                 date,
//                 totalAmount,
//                 paymentMethod
//             };
    
//             const response = await axios.post('http://localhost:3001/api/orders', orderData, { withCredentials: true });
//             navigate('/order-success', { state: { order: orderData } });
//         } catch (error) {
//             console.error('Error placing order:', error);
//         }
//     };

//     const handleCancelOrder = () => {
//         navigate('/'); // Adjust to your route
//     };

//     return (
//         <div className="place-order-page">
//             <h2 className="order-summary-title">Order Summary</h2>
//             <div className="order-summary">
//                 <div className="product-info">
//                     <img className="product-image" src={product.imageUrl} alt={product.title} />
//                     <h3 className="product-title">{product.title}</h3>
//                     <p className="product-quantity">Quantity: {quantity} KG</p>
//                     <p className="product-flavor">Flavor: {flavor}</p>
//                     <p className="product-price">Amount Per 1 KG: {product.price} (Inclusive of GST)</p>
//                     <p className="total-amount"><strong>Total Amount: ₹{totalAmount}</strong></p>
//                 </div>
//                 <div className="order-details">
//                     <p className="delivery-address"><strong>Delivery Address:</strong> {address}</p>
//                     <p className="phone-number"><strong>Phone Number:</strong> {phone}</p>
//                     <p className="alt-phone-number"><strong>Alternative Phone Number:</strong> {altPhone}</p>
//                     <p className="order-message"><strong>Message:</strong> {message}</p>
//                     <p className="delivery-date"><strong>Date of Delivery:</strong> {date}</p>
//                     {/* Payment Method Selection */}
//                     <label className="payment-method-label">
//                         Payment Method:
//                         <select className="payment-method-select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//                             <option value="Online UPI">Online UPI</option>
//                             <option value="Cash on Delivery">Cash on Delivery</option>
//                         </select>
//                     </label>
//                 </div>
//                 <button className="button20" onClick={handleConfirmOrder}>Confirm Order</button>
//                 <button className="button20" onClick={handleCancelOrder}>Cancel Order</button>
//             </div>
//         </div>
//     );
// };

// export default PlaceOrderPage;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PlaceOrder.css';

const PlaceOrderPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product, address, phone, altPhone, quantity, flavor, message, date } = location.state || {}; 

    const [paymentMethod, setPaymentMethod] = useState('Online UPI'); // Default to Online UPI

    if (!product) {
        return <div className="no-product">No product selected</div>;
    }

    const extractNumericValue = (priceString) => {
        const numericString = priceString.replace(/[^0-9.]/g, '');
        return parseFloat(numericString);
    };

    const calculateTotalAmount = () => {
        const pricePerKg = extractNumericValue(product.price);
        const quantityValue = parseFloat(quantity);

        if (isNaN(pricePerKg) || isNaN(quantityValue)) {
            return '0.00';
        }

        return (pricePerKg * quantityValue).toFixed(2);
    };

    const totalAmount = calculateTotalAmount();

    const handleConfirmOrder = async () => {
        try {
            const orderData = {
                product: product.title,
                address,
                phone,
                altPhone,
                quantity,
                flavor,
                message,
                date,
                totalAmount,
                paymentMethod
            };

            console.log('Order Data:', orderData); // Log order data for debugging

            const response = await axios.post('http://localhost:3001/api/orders', orderData, { withCredentials: true });
            navigate('/order-success', { state: { order: orderData } });
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    const handleCancelOrder = () => {
        navigate('/'); // Adjust to your route
    };

    return (
        <div className="place-order-page">
            <h2 className="order-summary-title">Order Summary</h2>
            <div >
                <img src={product.imageUrl} alt={product.title}  />
            </div><br/>
            <div className="order-summary">
                <table className="order-summary-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-label">Product</td>
                            <td className="table-value">{product.title}</td>
                        </tr>
                        <tr>
                            <td className="table-label">Quantity</td>
                            <td className="table-value">{quantity} Kg</td>
                        </tr>
                        <tr>
                            <td className="table-label">Flavor</td>
                            <td className="table-value">{flavor}</td>
                        </tr>
                        <tr>
                            <td className="table-label">Amount Per 1 KG</td>
                            <td className="table-value">{product.price} (Inclusive of GST)</td>
                        </tr>
                        <tr>
                            <td className="table-label">Total Amount</td>
                            <td className="table-value">₹{totalAmount}</td>
                        </tr>
                        <tr>
                            <td className="table-label">Delivery Address</td>
                            <td className="table-value">{address}</td>
                        </tr>
                        <tr>
                            <td className="table-label">Phone Number</td>
                            <td className="table-value">{phone}</td>
                        </tr>
                        <tr>
                            <td className="table-label">Alternative Phone Number</td>
                            <td className="table-value">{altPhone}</td>
                        </tr>
                        <tr>
                            <td className="table-label">Message</td>
                            <td className="table-value">{message}</td>
                        </tr>
                        <tr>
                            <td className="table-label">Date of Delivery</td>
                            <td className="table-value">{date}</td>
                        </tr>
                        <tr>
                            <td className="table-label">Payment Method</td>
                            <td className="table-value">
                                <select className="payment-method-select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                    <option value="Online UPI">Online UPI</option>
                                    <option value="Cash on Delivery">Cash on Delivery</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="order-buttons">
                    <button className="confirm-order-button" onClick={handleConfirmOrder}>Confirm Order</button>
                    <button className="cancel-order-button" onClick={handleCancelOrder}>Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrderPage;
