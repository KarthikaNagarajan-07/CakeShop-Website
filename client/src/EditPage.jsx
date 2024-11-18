import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './EditPage.css'; // Add some styles

const AddProductPage = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can call the API to save the product data
        console.log('New product added:', product);
        // After successful submission, navigate back to the products page
        navigate('/admin/products');
    };

    return (
        <div className="add-product-page">
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" name="category" value={product.category} onChange={handleChange} required />
                </div>
                <div>
                    <label>Price (₹):</label>
                    <input type="number" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <button type="submit">Add Product</button>
            </form>
            <button onClick={() => navigate('/admin/products')}>Back to Products</button>
        </div>
    );
};

export default AddProductPage;
