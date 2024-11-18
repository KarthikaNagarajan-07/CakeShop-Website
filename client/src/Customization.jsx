import React, { useState } from 'react';
import './Customization.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustomizedCakes = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cakeType: '',
        size: '',
        quantity: '',
        tiers: '',
        message: '',
        date: '',
        image: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
    
        try {
            const response = await axios.post('http://localhost:3001/api/customized-cakes', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            alert('Ordered successfully...!!');
            navigate('/'); // Redirect after successful order
        } catch (error) {
            console.error(error);
            alert('There was an error processing your order. Please try again.');
        }
    };
    

    

    return (
        <div className="customized-cakes-container">
            <h1>Order Your Customized Cake</h1>
            <form onSubmit={handleSubmit} className="customized-cakes-form">
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Phone:
                    <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Cake Type:
                    <select 
                        name="cakeType" 
                        value={formData.cakeType} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select a Cake Type</option>
                        <option value="birthday">Birthday Cake</option>
                        <option value="wedding">Wedding Cake</option>
                        <option value="anniversary">Anniversary Cake</option>
                        <option value="custom">Custom Cake</option>
                    </select>
                </label>
                <label>
                    Size (in inches):
                    <select 
                        name="size" 
                        value={formData.size} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Size</option>
                        {[1,2,3,4,5].map(size => (
                            <option key={size} value={size}>{size} inches</option>
                        ))}
                    </select>
                </label>
                <label>
                    Quantity (in kg):
                    <select 
                        name="quantity" 
                        value={formData.quantity} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Quantity</option>
                        {[1, 2, 3, 4].map(qty => (
                            <option key={qty} value={qty}>{qty} kg</option>
                        ))}
                    </select>
                </label>
                <label>
                    Tiers:
                    <select 
                        name="tiers" 
                        value={formData.tiers} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Tiers</option>
                        {[1, 2, 3, 4].map(tier => (
                            <option key={tier} value={tier}>{tier} tier{tier > 1 ? 's' : ''}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Special Message:
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows="4"
                    />
                </label>
                <label>
                    Date Of Delivery:
                    <input type="date" name='date' value={formData.date} onChange={handleChange} required />
                </label>
                <label>
                    Upload Image:
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        required 
                    />
                </label>
                <div className="form-buttons">
                    <button type="button" onClick={() => navigate('/')}>Back</button> {/* Back button */}
                    <button type="submit" >Submit Order</button>
                </div>
            </form>
        </div>
    );
};

export default CustomizedCakes;
