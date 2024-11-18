// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './OrderDetails.css';


// const AdminOrdersPage = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         // Fetch orders from the server
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/orders', { withCredentials: true });
//                 setOrders(response.data);
//             } catch (error) {
//                 console.error('Error fetching orders:', error);
//             }
//         };

//         fetchOrders();
//     }, []);

//     return (
//         <div className="admin-orders-page">
//             <h2>Order Details</h2>
//             {orders.length === 0 ? (
//                 <p>No orders available</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Product</th>
//                             <th>Quantity (KG)</th>
//                             <th>Flavor</th>
//                             <th>Total Amount (₹)</th>
//                             <th>Address</th>
//                             <th>Phone</th>
//                             <th>Alternative Phone</th>
//                             <th>Message</th>
//                             <th>Date Of Delivery</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order, index) => (
//                             <tr key={index}>
//                                 <td>{order.product}</td>
//                                 <td>{order.quantity}</td>
//                                 <td>{order.flavor}</td>
//                                 <td>{order.totalAmount}</td>
//                                 <td>{order.address}</td>
//                                 <td>{order.phone}</td>
//                                 <td>{order.altPhone}</td>
//                                 <td>{order.message}</td>
//                                 <td>{order.date}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default AdminOrdersPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderDetails.css';
import { useNavigate } from "react-router-dom";

const AdminOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/admin'); // Navigate to the admin page
    };

    useEffect(() => {
        // Fetch orders from the server
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/orders', { withCredentials: true });
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    // Function to format date to 'MM/DD/YYYY' or any preferred format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); // Change to 'en-GB' or 'en-US' depending on the desired format
    };

    

    return (
        <div className="admin-orders-page">
            <h2>Order Details</h2>
            {orders.length === 0 ? (
                <p>No orders available</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity (KG)</th>
                            <th>Flavor</th>
                            <th>Total Amount (₹)</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Alternative Phone</th>
                            <th>Message</th>
                            <th>Date Of Delivery</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                                <td>{order.flavor}</td>
                                <td>{order.totalAmount}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order.altPhone}</td>
                                <td>{order.message}</td>
                                <td>{formatDate(order.date)}</td> {/* Format and display the date */}
                                <td>{order.paymentMethod}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            )}
            
            <button className="button12" onClick={handleBack}>Back</button>
        </div>
    );
};

export default AdminOrdersPage;
