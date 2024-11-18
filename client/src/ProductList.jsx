// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ProductList.css'; // Import the CSS file

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
//     setProducts(storedProducts);
//   }, []);

//   const convertToINR = (priceInUSD) => {
//     const conversionRate = 80; // Example: 1 USD = 80 INR
//     return priceInUSD * conversionRate;
//   };

//   return (
//     <div className="product-list">
//       <h1>Product List</h1>
//       {products.length > 0 ? (
//         <ul>
//           {products.map((product, index) => (
//             <li key={index}>
//               <Link to={`/product/${index}`}>
//                 {product.image ? (
//                   <img
//                     src={URL.createObjectURL(new Blob([product.image]))}
//                     alt="Product"
//                     className="product-image"
//                   />
//                 ) : (
//                   <p>No image available</p>
//                 )}
//               </Link>
//               <p>{product.name}</p>
//               <p>Rating: {product.rating}/5</p>
//               <p>Price: ₹{convertToINR(product.price).toFixed(2)} (INR)</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ProductList.css'; // Import the CSS file

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
//     setProducts(storedProducts);
//   }, []);

//   return (
//     <div className="product-list">
//       <h1>Product List</h1>
//       {products.length > 0 ? (
//         <ul>
//           {products.map((product, index) => (
//             <li key={index}>
//               <Link to={`/order`}>
//                 {product.image ? (
//                   <img
//                     src={product.image}
//                     alt="Product"
//                     className="product-image"
//                   />
//                 ) : (
//                   <p>No image available</p>
//                 )}
//               </Link>
//               <p>{product.name}</p>
//               <p>Rating: {product.rating}/5</p>
//               <p>Price: ₹{product.price} (INR)</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './ProductList.css'; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleProductClick = (product) => {
    // Navigate to order page with product details passed in state
    navigate('/order', { state: { product } });
  };

  return (
    <div className="product-list">
      <nav className="navbar">
                <div><Link to='/BestSeller'><button className='button'>Trending Cakes</button></Link></div>
                <div><Link to='/products'><button className='button'>New Launcher</button></Link></div>
                <div><Link to='/ThemeCakes'><button className='button'>Theme Cakes</button></Link></div>
                <div><Link to='/dessert'><button className='button'>Desserts</button></Link></div>
                <div><Link to='/Birthday'><button className='button'>Birthday</button></Link></div>
                <div><Link to='/WeddingCakes'><button className='button'>Anniversary</button></Link></div>
                <div><Link to='/' ><button className='button'>Home</button></Link></div>
        </nav>  <br/>
      <h1>New Items</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product, index) => (
            <li key={index} onClick={() => handleProductClick(product)}>
              {product.imageUrl ? ( // Changed from product.image to product.imageUrl
                <img
                  src={product.imageUrl}  // Changed from product.image to product.imageUrl
                  alt="Product"
                  className="product-image"
                />
              ) : (
                <p>No image available</p>
              )}
              <p>{product.title}</p>  
              <p> ₹{product.price} (INR)</p>
              <p>{product.rating}<span>⭐</span></p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;


