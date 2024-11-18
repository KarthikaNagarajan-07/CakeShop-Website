// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminCustom.css'; // Add your CSS styling here

// const AdminProduct = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3001/api/customized-cakes')
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the products!', error);
//             });
//     }, []);

//     return (
//         <div className="admin-product-container">
//             <h1>Admin Product Page</h1>
//             <div className="product-list">
//                 {products.map(product => (
//                     <div key={product._id} className="product-item">
//                         <img src={`http://localhost:3001/uploads/${product.image}`} alt={product.name} className="product-image" />
//                         <div className="product-details">
//                             <h3>{product.name}</h3>
//                             <p>Email: {product.email}</p>
//                             <p>Phone: {product.phone}</p>
//                             <p>Cake Type: {product.cakeType}</p>
//                             <p>Size: {product.size} inches</p>
//                             <p>Quantity: {product.quantity} kg</p>
//                             <p>Tiers: {product.tiers} tier{product.tiers > 1 ? 's' : ''}</p>
//                             <p>Message: {product.message}</p>
//                             <p>Date: {new Date(product.date).toLocaleDateString()}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AdminProduct;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminCustom.css'; // Add your CSS styling here
import { useNavigate } from 'react-router-dom';

const AdminProduct = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/admin'); // Navigate to the admin page
    };


    useEffect(() => {
        axios.get('http://localhost:3001/api/customized-cakes')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div className="admin-product-container">
            <h1>Customized Cake Order Details</h1>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Cake Type</th>
                        <th>Size (inches)</th>
                        <th>Quantity (kg)</th>
                        <th>Tiers</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td><img src={`http://localhost:3001/uploads/${product.image}`} alt={product.name} className="product-image" /></td>
                            <td>{product.name}</td>
                            <td>{product.email}</td>
                            <td>{product.phone}</td>
                            <td>{product.cakeType}</td>
                            <td>{product.size}</td>
                            <td>{product.quantity}</td>
                            <td>{product.tiers} tier{product.tiers > 1 ? 's' : ''}</td>
                            <td>{product.message}</td>
                            <td>{new Date(product.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="button12" onClick={handleBack}>Back</button>
        </div>
    );
};

export default AdminProduct;

