import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Items.css'; // Updated CSS file import

const ProductSalesReport = () => {
    const [salesData, setSalesData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productSearch, setProductSearch] = useState('');
    const [searchTriggered, setSearchTriggered] = useState(false);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/admin/sales'); // Navigate back to the admin page
    };

    useEffect(() => {
        if (searchTriggered && productSearch) {
            fetchOrders();
        }
    }, [searchTriggered, productSearch]);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/api/orders', { withCredentials: true });
            const orders = response.data;
            const filteredOrders = filterOrdersByProduct(orders, productSearch);
            const salesByProduct = calculateSalesByProduct(filteredOrders);
            setSalesData(salesByProduct);
        } catch (error) {
            setError('Error fetching orders: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const filterOrdersByProduct = (orders, searchProduct) => {
        return orders.filter(order => 
            order.product && // Ensure the product field exists
            order.product.toLowerCase().includes(searchProduct.toLowerCase())
        );
    };

    const calculateSalesByProduct = (orders) => {
        const sales = {};
        orders.forEach(order => {
            const { product, quantity } = order;
            if (!sales[product]) {
                sales[product] = 0;
            }
            sales[product] += quantity;
        });
        return sales;
    };

    const handleProductSearch = (e) => {
        setProductSearch(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchTriggered(true);
        fetchOrders();
    };

    return (
        <div className="report-container">
            <h1>Product Sales Report</h1>
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <label>
                    Search Product:
                    <input 
                        type="text" 
                        value={productSearch} 
                        onChange={handleProductSearch} 
                        placeholder="Enter product name"
                    />
                </label>
                <button type="button" onClick={handleSearchClick}>Search</button>
            </form>
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {searchTriggered && Object.keys(salesData).length > 0 && (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total Quantity Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(salesData).map(([product, totalQuantity]) => (
                                <tr key={product}>
                                    <td>{product}</td>
                                    <td>{totalQuantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {searchTriggered && Object.keys(salesData).length === 0 && (
                <p className="no-results">No results found for "{productSearch}".</p>
            )}
            <button className="back-button" onClick={handleBack}>Back</button>
        </div>
    );
};

export default ProductSalesReport;
