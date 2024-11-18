// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// const WeeklySalesReport = () => {
//     const [salesData, setSalesData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const navigate = useNavigate();
//     const handleBack = () => {
//         navigate('/admin'); // Navigate to the admin page
//     };


//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/orders', { withCredentials: true });
//                 const orders = response.data;
//                 const weeklySales = calculateWeeklySales(orders);
//                 setSalesData(weeklySales);
//             } catch (error) {
//                 setError('Error fetching orders: ' + error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     const calculateWeeklySales = (orders) => {
//         const sales = {};

//         orders.forEach(order => {
//             const week = getWeekNumber(new Date(order.date));
//             if (!sales[week]) sales[week] = {};

//             if (!sales[week][order.product]) sales[week][order.product] = 0;

//             sales[week][order.product] += order.quantity;
//         });

//         return sales;
//     };

//     const getWeekNumber = (date) => {
//         const start = new Date(date.getFullYear(), 0, 1);
//         const diff = date - start + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60000);
//         const oneWeek = 604800000;
//         return Math.ceil(diff / oneWeek);
//     };

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div>
//             <h1>Sales Report</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Week Number</th>
//                         <th>Product </th>
//                         <th>Quantity Sold</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Object.entries(salesData).map(([week, products]) =>
//                         Object.entries(products).map(([product, quantity]) => (
//                             <tr key={`${week}-${product}`}>
//                                 <td>{week}</td>
//                                 <td>{product}</td>
//                                 <td>{quantity}</td>
//                             </tr>
//                         ))
//                     )}
//                 </tbody>
//             </table>
//             <button className="button12" onClick={handleBack}>Back</button>
//         </div>
//     );
// };

// export default WeeklySalesReport;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './AdminWeeklyReport.css';

const WeeklySalesReport = () => {
    const [salesData, setSalesData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/admin/sales'); // Navigate to the admin page
    };

    useEffect(() => {
        if (startDate && endDate) {
            fetchOrders();
        }
    }, [startDate, endDate]);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/api/orders', { withCredentials: true });
            const orders = response.data;
            const filteredOrders = filterOrdersByDate(orders, startDate, endDate);
            const salesByDate = calculateSalesByDate(filteredOrders);
            setSalesData(salesByDate);
        } catch (error) {
            setError('Error fetching orders: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const filterOrdersByDate = (orders, start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        return orders.filter(order => {
            const orderDate = new Date(order.date);
            return orderDate >= startDate && orderDate <= endDate;
        });
    };

    const calculateSalesByDate = (orders) => {
        const sales = {};
        orders.forEach(order => {
            const orderDate = new Date(order.date).toLocaleDateString(); // Format date as string
            if (!sales[orderDate]) sales[orderDate] = {};
            if (!sales[orderDate][order.product]) sales[orderDate][order.product] = 0;
            sales[orderDate][order.product] += order.quantity;
        });
        return sales;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchOrders();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Sales Report</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Start Date:
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className='date' required />
                </label>
                <label>
                    End Date:
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className='date'required />
                </label>
            </form><br/><br/>
            {Object.keys(salesData).length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Date of Order</th>
                            <th>Product</th>
                            <th>Quantity Sold</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(salesData).map(([orderDate, products]) =>
                            Object.entries(products).map(([product, quantity]) => (
                                <tr key={`${orderDate}-${product}`}>
                                    <td>{orderDate}</td>
                                    <td>{product}</td>
                                    <td>{quantity}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
            
            <button className="button12" onClick={handleBack}>Back</button>
        </div>
    );
};

export default WeeklySalesReport;

