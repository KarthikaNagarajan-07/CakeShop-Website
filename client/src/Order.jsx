import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Order.css';

const Order = () => {
    const location = useLocation();
    const { product } = location.state || {}; // Destructure to get the product data
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    
    const [selectedWeight, setSelectedWeight] = useState('0.5 Kg');
    const [selectedFlavor, setSelectedFlavor] = useState('Vanilla');

    if (!product) {
        return <div>No product selected</div>;
    }

    const handleAddToCart = () => {
        addToCart({ ...product, weight: selectedWeight, flavor: selectedFlavor });
        navigate('/cart'); // Redirect to the cart page after adding the product
    };

    const handleBuyNow = () => {
        navigate('/checkout', { state: { product, selectedWeight, selectedFlavor} });
    };

    return (
        <div>
            <div className="order-page">
                <div>
                    <img src={product.imageUrl} alt={product.title} />
                    {/* Add additional images or a carousel here if needed */}
                </div>
                <div className="order-info">
                    <h2>{product.title}</h2>
                    {/* <div className="rating">
                        5 ⭐ ({product.reviews})
                    </div> */}
                    <b>Weight</b>
                    <div className="weight">
                        <button onClick={() => setSelectedWeight('0.5 Kg')}>0.5 Kg</button>
                        <button onClick={() => setSelectedWeight('1 Kg')}>1 Kg</button>
                    </div>
                    <b>Flavors</b>
                    <div className="flavour">
                        <button onClick={() => setSelectedFlavor('Vanilla')}>Vanilla</button>
                        <button onClick={() => setSelectedFlavor('Chocolate')}>Chocolate</button>
                        <button onClick={() => setSelectedFlavor('Strawberry')}>Strawberry</button>
                        {/* <button onClick={() => setSelectedFlavor('Red Velvet')}>RedVelvet</button> */}
                    </div>
                    <b>Delivery Available Location</b>
                    <div className="flavour">
                        <button>Perundurai</button>
                        <button>Thindal</button>
                        <button>Erode</button>
                    </div>
                    <div className="price">₹{product.price} (Inclusive of GST)</div>
                    <div className="add-to-cart">
                        <button onClick={handleAddToCart} className='b1'>Cart</button>
                        <button onClick={handleBuyNow} className='b1'>Buy Now</button>
                        <Link to="/"><button className='b1'>Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
