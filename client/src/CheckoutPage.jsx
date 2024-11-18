// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './CheckoutPage.css';

// const BuyNowPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { product, selectedWeight, selectedFlavor } = location.state || {}; 

//     const [address, setAddress] = useState('');
//     const [phone, setPhone] = useState('');
//     const [altPhone, setAltPhone] = useState('');
//     const [quantity, setQuantity] = useState(selectedWeight || '0.5');
//     const [flavor, setFlavor] = useState(selectedFlavor || 'Vanilla');
//     const [message, setMessage] = useState('');
//     // const [date, setDate] = useState('');

//     if (!product) {
//         return <div>No product selected</div>;
//     }

//     const handleQuantityChange = (event) => {
//         setQuantity(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // const amount = calculateAmount(quantity, product?.price || 0);

//         navigate('/placeorder', {
//             state: {
//                 product,
//                 address,
//                 phone,
//                 altPhone,
//                 quantity,
//                 flavor,
//                 message,
//                 // date,
//                 // amount,
//             },
//         });
//     };

//     // const calculateAmount = (quantity, price) => {
//     //     const quantityValue = parseFloat(quantity); // Ensure quantity is a float
//     //     const priceValue = parseFloat(price); // Ensure price is a float
//     //     if (isNaN(priceValue)) return '0.00'; // Handle NaN cases
//     //     return (quantityValue * priceValue).toFixed(2);
        
//     // };

//     // const amount = calculateAmount(quantity, product?.price || 0);

//     return (
//         <div className="buy-now-page">
//             <h2>Buy Now</h2>
//             <div className="product-info">
//                 <img src={product.imageUrl} alt={product.title} />
//                 <h3>{product.title}</h3>
//                 <p>{product.price} (Inclusive of GST)</p> {/* Display the calculated amount */}
//             </div>
//             <form onSubmit={handleSubmit} className="order-form">
//                 <label>
//                     Delivery Address:
//                     <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
//                 </label>
//                 <label>
//                     Phone Number:
//                     <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//                 </label>
//                 <label>
//                     Alternative Phone Number:
//                     <input type="tel" value={altPhone} onChange={(e) => setAltPhone(e.target.value)} />
//                 </label>
//                 <label>
//                     Quantity (in Kg):
//                     <select value={quantity} onChange={handleQuantityChange}>
//                         <option value="0.5">0.5 Kg</option>
//                         <option value="1">1 Kg</option>
//                         <option value="1.5">1.5 Kg</option>
//                         <option value="2">2 Kg</option>
//                         <option value="2.5">2.5 Kg</option>
//                         <option value="3">3 Kg</option>
//                         <option value="3.5">3.5 Kg</option>
//                     </select>
//                 </label>
//                 <label>
//                     Flavor:
//                     <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
//                         <option value="Vanilla">Vanilla</option>
//                         <option value="Chocolate">Chocolate</option>
//                         <option value="Strawberry">Strawberry</option>
//                         <option value="Red Velvet">Red Velvet</option>
//                     </select>
//                 </label>
//                 <label>
//                     Message:
//                     <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//                 </label>
//                 {/* <label>
//                     Date Of Delivery:
//                     <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
//                 </label> */}
//                 <button type="submit" >Place Order</button>
//             </form>
//         </div>
//     );
// };

// export default BuyNowPage;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const BuyNowPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product,  selectedFlavor } = location.state || {}; 

    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [altPhone, setAltPhone] = useState('');
    const [quantity, setQuantity] = useState('');
    const [flavor, setFlavor] = useState(selectedFlavor || 'Vanilla');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');

    // Get current date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    if (!product) {
        return <div>No product selected</div>;
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/placeorder', {
            state: {
                product,
                address,
                phone,
                altPhone,
                quantity,
                flavor,
                message,
                date,
            },
        });
    };

    return (
        <div className="buy-now-page">
            <h2>Buy Now</h2>
            <div className="product-info">
                <img src={product.imageUrl} alt={product.title} />
                
            </div>
            <div>
            <h3>{product.title}</h3>
                <p>{product.price} (Inclusive of GST)</p>
                </div><br/>
            <form onSubmit={handleSubmit} className="order-form">
                <label>
                    Delivery Address:
                    <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <label>
                    Alternative Phone Number:
                    <input type="tel" value={altPhone} onChange={(e) => setAltPhone(e.target.value)} />
                </label>
                <label>
                    Quantity (in Kg):
                    <select value={quantity} onChange={handleQuantityChange}>
                        <option value="0.5">0.5 Kg</option>
                        <option value="1">1 Kg</option>
                        <option value="1.5">1.5 Kg</option>
                        <option value="2">2 Kg</option>
                        <option value="2.5">2.5 Kg</option>
                        <option value="3">3 Kg</option>
                        <option value="3.5">3.5 Kg</option>
                    </select>
                </label>
                <label>
                    Flavor:
                    <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
                        <option value="Vanilla">Vanilla</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Strawberry">Strawberry</option>
                        <option value="Red Velvet">Red Velvet</option>
                    </select>
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <label>
                    Date Of Delivery:
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        min={today}  // Prevent past dates
                        required 
                    />
                </label>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default BuyNowPage;




