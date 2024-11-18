import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Report.css'; // Updated CSS file import

const WeeklySalesReport = () => {
    const [salesData, setSalesData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/admin/sales'); // Navigate to the admin page
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/orders', { withCredentials: true });
                const orders = response.data;
                const weeklySales = calculateWeeklySales(orders);
                setSalesData(weeklySales);
            } catch (error) {
                setError('Error fetching orders: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const calculateWeeklySales = (orders) => {
        const sales = {};

        orders.forEach(order => {
            const week = getWeekNumber(new Date(order.date));
            if (!sales[week]) sales[week] = {};

            if (!sales[week][order.product]) sales[week][order.product] = 0;

            sales[week][order.product] += order.quantity;
        });

        return sales;
    };

    const getWeekNumber = (date) => {
        const start = new Date(date.getFullYear(), 0, 1);
        const diff = date - start + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60000);
        const oneWeek = 604800000;
        return Math.ceil(diff / oneWeek);
    };

    if (loading) return <p className="loading-indicator">Loading...</p>;
    if (error) return <p className="error-indicator">{error}</p>;

    return (
        <div className="weekly-report-container">
            <h1 className="weekly-report-title">Weekly Sales Report</h1>
            <table className="weekly-sales-table">
                <thead>
                    <tr>
                        <th>Week Number</th>
                        <th>Product</th>
                        <th>Quantity Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(salesData).map(([week, products]) =>
                        Object.entries(products).map(([product, quantity]) => (
                            <tr key={`${week}-${product}`}>
                                <td>{week}</td>
                                <td>{product}</td>
                                <td>{quantity}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <button className="return-button" onClick={handleBack}>Back</button>
        </div>
    );
};

export default WeeklySalesReport;
