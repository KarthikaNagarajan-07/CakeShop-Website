// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import QRCode from 'qrcode'; // Import the qrcode package
// import './OrderPayment.css';

// const OrderSuccessPage = () => {
//     const location = useLocation();
//     const { order } = location.state || {};

//     const [showPaymentOptions, setShowPaymentOptions] = useState(false); // State to show QR code and payment link
//     const [qrCodeDataUrl, setQrCodeDataUrl] = useState(''); // State to hold QR code data URL

//     if (!order) {
//         return <div>No order details found</div>;
//     }

//     // UPI Payment URL
//     const upiUrl = `upi://pay?pa=karthikanagarajan07@okaxis&pn=KarthikaNagarajan&am=${order.totalAmount}&cu=INR`;

//     // Function to show QR code and GPay link on button click
//     const handlePayment = async () => {
//         setShowPaymentOptions(true); // Show QR code and link
//         try {
//             const qrCodeUrl = await QRCode.toDataURL(upiUrl); // Generate QR code
//             setQrCodeDataUrl(qrCodeUrl);
//         } catch (error) {
//             console.error('Error generating QR code', error);
//         }
//     };

//     return (
//         <div className="order-success-page">
//             <h2>Order Successful!</h2>
//             <div className="order-info">
//                 <h3>Order Details</h3>
//                 <p>Product: {order.product}</p>
//                 <p>Quantity: {order.quantity} Kg</p>
//                 <p>Flavor: {order.flavor}</p>
//                 <p>Message: {order.message}</p>
//                 <p>Date of Delivery: {order.date}</p>
//                 <p>Total Amount: ₹{order.totalAmount}</p>
//                 <p>Payment Method: {order.paymentMethod}</p>
//                 <p>Delivery Address: {order.address}</p>
//                 <p>Phone Number: {order.phone}</p>
//                 <p>Alternative Phone Number: {order.altPhone}</p>
//                 <img src={order.product.imageUrl} alt={order.product.title} />
//             </div>
//             {order.paymentMethod === 'Online UPI' && (
//                 <div className="payment-section">
//                     <h3>UPI Payment Instructions</h3>
//                     <p>Pay through your UPI app or scan the QR code <br/>below.</p>
                    
//                     <button onClick={handlePayment}>Pay Now</button>

//                     {showPaymentOptions && (
//                         <div className="payment-options">
//                             <h4>Scan this QR code to pay:</h4>
//                             {qrCodeDataUrl && (
//                                 <img src={qrCodeDataUrl} alt="QR Code" /> // Display the QR code
//                             )}

//                             <h4>Or pay using Google Pay:</h4>
//                             <a href={upiUrl} target="_blank" rel="noopener noreferrer">
//                                 Pay with Google Pay
//                             </a>
//                         </div>
//                     )}
//                 </div>
//             )}
//             {order.paymentMethod === 'Cash on Delivery' && (
//                 <div className="payment-section">
//                     <h3>Payment Details</h3>
//                     <p>You'll pay in cash upon delivery.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OrderSuccessPage;



// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import QRCode from 'qrcode'; // Import the qrcode package
// import './OrderPayment.css';

// const OrderSuccessPage = () => {
//     const location = useLocation();
//     const { order } = location.state || {};

//     const [showPaymentOptions, setShowPaymentOptions] = useState(false); // State to show QR code and payment link
//     const [qrCodeDataUrl, setQrCodeDataUrl] = useState(''); // State to hold QR code data URL
//     const [paymentConfirmed, setPaymentConfirmed] = useState(false); // State to track payment confirmation

//     if (!order) {
//         return <div>No order details found</div>;
//     }

//     // UPI Payment URL
//     const upiUrl = `upi://pay?pa=karthikanagarajan07@okaxis&pn=KarthikaNagarajan&am=${order.totalAmount}&cu=INR`;

//     // Function to show QR code and GPay link on button click
//     const handlePayment = async () => {
//         setShowPaymentOptions(true); // Show QR code and link
//         try {
//             const qrCodeUrl = await QRCode.toDataURL(upiUrl); // Generate QR code
//             setQrCodeDataUrl(qrCodeUrl);
//         } catch (error) {
//             console.error('Error generating QR code', error);
//         }
//     };

//     // Handle manual confirmation of payment
//     const handlePaymentConfirmation = () => {
//         // In a real-world application, you would make a call to your backend
//         // to verify the payment status, but here we'll just simulate it.
//         setPaymentConfirmed(true);
//     };

//     return (
//         <div className="order-success-page">
//             <h2>Order Successful!</h2>
//             <div className="order-info">
//                 <h3>Order Details</h3>
//                 <p>Product: {order.product}</p>
//                 <p>Quantity: {order.quantity} Kg</p>
//                 <p>Flavor: {order.flavor}</p>
//                 <p>Message: {order.message}</p>
//                 <p>Date of Delivery: {order.date}</p>
//                 <p>Total Amount: ₹{order.totalAmount}</p>
//                 <p>Payment Method: {order.paymentMethod}</p>
//                 <p>Delivery Address: {order.address}</p>
//                 <p>Phone Number: {order.phone}</p>
//                 <p>Alternative Phone Number: {order.altPhone}</p>
//                 <img src={order.product.imageUrl} alt={order.product.title} />
//             </div>
//             {order.paymentMethod === 'Online UPI' && (
//                 <div className="payment-section">
//                     {!paymentConfirmed ? (
//                         <>
//                             <h3>UPI Payment Instructions</h3>
//                             <p>Pay through your UPI app or scan the QR code below.</p>
//                             <button onClick={handlePayment}>Pay Now</button>

//                             {showPaymentOptions && (
//                                 <div className="payment-options">
//                                     <h4>Scan this QR code to pay:</h4>
//                                     {qrCodeDataUrl && (
//                                         <img src={qrCodeDataUrl} alt="QR Code" /> // Display the QR code
//                                     )}

//                                     <h4>Or pay using Google Pay:</h4>
//                                     <a href={upiUrl} target="_blank" rel="noopener noreferrer">
//                                         Pay with Google Pay
//                                     </a>

//                                     {/* Button to confirm payment manually */}
//                                     <button onClick={handlePaymentConfirmation} className="confirm-payment-button">
//                                         I have paid
//                                     </button>
//                                 </div>
//                             )}
//                         </>
//                     ) : (
//                         <div className="payment-confirmation">
//                             <h3>Payment Successful!</h3>
//                             <p>Your payment has been confirmed, and the order is being processed.</p>
//                         </div>
//                     )}
//                 </div>
//             )}
//             {order.paymentMethod === 'Cash on Delivery' && (
//                 <div className="payment-section">
//                     <h3>Payment Details</h3>
//                     <p>You'll pay in cash upon delivery.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OrderSuccessPage;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode'; // Import the qrcode package
import './OrderPayment.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>Back</button>
            </div>
        </div>
    );
};

const OrderSuccessPage = () => {
    const location = useLocation();
    const { order } = location.state || {};

    const [showPaymentOptions, setShowPaymentOptions] = useState(false); // State to show QR code and payment link
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState(''); // State to hold QR code data URL

    if (!order) {
        return <div>No order details found</div>;
    }

    // UPI Payment URL
    const upiUrl = `upi://pay?pa=karthikanagarajan07@okaxis&pn=KarthikaNagarajan&am=${order.totalAmount}&cu=INR`;

    // Function to show QR code and GPay link on button click
    const handlePayment = async () => {
        setShowPaymentOptions(true); // Show QR code and link
        try {
            const qrCodeUrl = await QRCode.toDataURL(upiUrl); // Generate QR code
            setQrCodeDataUrl(qrCodeUrl);
        } catch (error) {
            console.error('Error generating QR code', error);
        }
    };

    const closeModal = () => {
        setShowPaymentOptions(false);
    };

    return (
        <div className="order-success-page">
            <h2>Order Successful!</h2>
            <div className="order-info">
                <h3>Order Details</h3>
                <table className="order-details-table">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Product:</strong></td>
                            <td>{order.product}</td>
                        </tr>
                        <tr>
                            <td><strong>Quantity:</strong></td>
                            <td>{order.quantity} Kg</td>
                        </tr>
                        <tr>
                            <td><strong>Flavor:</strong></td>
                            <td>{order.flavor}</td>
                        </tr>
                        <tr>
                            <td><strong>Message:</strong></td>
                            <td>{order.message}</td>
                        </tr>
                        <tr>
                            <td><strong>Date of Delivery:</strong></td>
                            <td>{order.date}</td>
                        </tr>
                        <tr>
                            <td><strong>Total Amount:</strong></td>
                            <td>₹{order.totalAmount}</td>
                        </tr>
                        <tr>
                            <td><strong>Payment Method:</strong></td>
                            <td>{order.paymentMethod}</td>
                        </tr>
                        <tr>
                            <td><strong>Delivery Address:</strong></td>
                            <td>{order.address}</td>
                        </tr>
                        <tr>
                            <td><strong>Phone Number:</strong></td>
                            <td>{order.phone}</td>
                        </tr>
                        <tr>
                            <td><strong>Alternative Phone Number:</strong></td>
                            <td>{order.altPhone}</td>
                        </tr>
                    </tbody>
                </table>
                <img src={order.product.imageUrl} alt={order.product.title} className="order-product-image" />
            </div>
            {order.paymentMethod === 'Online UPI' && (
                <div className="payment-section">
                    <h3>UPI Payment Instructions</h3>
                    <p>Pay through your UPI app or scan the<br /> QR code below.</p>
                    <button onClick={handlePayment}>Pay Now</button>

                    <Modal isOpen={showPaymentOptions} onClose={closeModal}>
                        <h4>Scan this QR code to pay:</h4>
                        {qrCodeDataUrl && (
                            <img src={qrCodeDataUrl} alt="QR Code" className="qr-code-image" /> // Display the QR code
                        )}
                        <h4>Or pay using Google Pay:</h4>
                        <a href={upiUrl} target="_blank" rel="noopener noreferrer">
                            Pay with Google Pay
                        </a>
                    </Modal>
                </div>
            )}
            {order.paymentMethod === 'Cash on Delivery' && (
                <div className="payment-section">
                    <h3>Payment Details</h3>
                    <p>You'll pay in cash upon delivery.</p>
                </div>
            )}
        </div>
    );
};

export default OrderSuccessPage;


