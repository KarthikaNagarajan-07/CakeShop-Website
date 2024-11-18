import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize navigate

    if (cart.length === 0) {
        return <div>Your cart is empty</div>;
    }

    const handleBuyNow = (product, selectedWeight, selectedFlavor) => {
        navigate('/checkout', { state: { product, selectedWeight, selectedFlavor } });
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.imageUrl} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.price} (Inclusive of GST)</p>
                            <button onClick={() => handleBuyNow(item, item.selectedWeight, item.selectedFlavor)}>
                                Buy Now
                            </button>
                            <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartPage;

