// // 
// import React from "react";
// import { Link } from "react-router-dom";
// import './Birthday.css';
// import Img47 from './images/img47.jpg';
// import Img56 from './images/img56.jpg';
// import Img48 from './images/img48.jpg';
// import Img57 from './images/img57.jpg';
// import Img50 from './images/img50.jpg';
// import Img58 from './images/img58.jpg';
// import Img59 from './images/img59.jpg';
// import Img40 from './images/img40.jpg';

// const Birthday = () => {
//   const products = [
//     {
//       id: 1,
//       title: 'White Forest and Three Tier Cake',
//       price: '₹ 549',
//       originalPrice: '₹ 599',
//       discount: '9% OFF',
//       rating: 4.9,
//       reviews: 2769,
//       imageUrl: Img47,
//     },
//     {
//       id: 2,
//       title: 'Chocolate Vanilla Half & Half Cake',
//       price: '₹ 549',
//       rating: 4.9,
//       reviews: 1634,
//       imageUrl: Img56,
//     },
//     {
//       id: 3,
//       title: 'Fresh Fruits & Roasted Almonds Cake',
//       price: '₹ 699',
//       rating: 4.9,
//       reviews: 962,
//       imageUrl: Img48,
//     },
//     {
//       id: 4,
//       title: 'Pistachio Rasmalai Cake',
//       price: '₹ 699',
//       rating: 4.8,
//       reviews: 109,
//       imageUrl: Img57,
//     },
//     {
//       id: 5,
//       title: 'Chocolate Butter Cream Cake',
//       price: '₹ 550',
//       rating: 4.8,
//       reviews: 109,
//       imageUrl: Img50,
//     },
//     {
//       id: 6,
//       title: 'Vanilla Butter Cream Cake With Choco Truffle',
//       price: '₹ 699',
//       rating: 4.8,
//       reviews: 109,
//       imageUrl: Img58,
//     },
//     {
//       id: 7,
//       title: 'Strawberry Cake',
//       price: '₹ 699',
//       rating: 4.8,
//       reviews: 109,
//       imageUrl: Img59,
//     },
//     {
//       id: 8,
//       title: 'Chocolate Truffle Cake',
//       price: '₹ 699',
//       rating: 4.8,
//       reviews: 109,
//       imageUrl: Img40,
//     },
//   ];

//   return (
//     <div className="best-sellers">
//       <nav className="navbar">
//         <div><button className='button'><Link to='/BestSeller' className='button'>Trending Cakes</Link></button></div>
//         <div><button className='button'>By Flavours</button></div>
//         <div><button className='button'><Link to='/ThemeCakes' className='button'>Theme Cakes</Link></button></div>
//         <div><button className='button'>Desserts</button></div>
//         <div><button className='button'><Link to='/Birthday' className='button'>Birthday</Link></button></div>
//         <div><button className='button'>Anniversary</button></div>
//         <div><button className='button'>Customized Cakes</button></div>
//         <div><button className='button'><Link to='/' className='button'>Home</Link></button></div>
//       </nav> <br />
//       <h2>Birthday Cakes</h2>
//       <nav className="navbar1">
//         <div><button className='flavor-button'>Girl</button></div>
//         <div><button className='flavor-button'>Boy</button></div>
//       </nav><br />
//       <div className="products">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <Link to={`/order/${product.id}`}>
//               <img src={product.imageUrl} alt={product.title} />
//             </Link>
//             <div className="product-info">
//               <h3>{product.title}</h3>
//               <div className="price">
//                 {product.price}
//                 {product.originalPrice && (
//                   <span className="original-price">{product.originalPrice}</span>
//                 )}
//                 {product.discount && <span className="discount">{product.discount}</span>}
//               </div>
//               <div className="rating">
//                 {product.rating} <span>⭐</span> ({product.reviews})
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Birthday;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Birthday.css';
import Img47 from './images/img47.jpg';
import Img56 from './images/img56.jpg';
import Img48 from './images/img48.jpg';
import Img57 from './images/img57.jpg';
import Img50 from './images/img50.jpg';
import Img58 from './images/img58.jpg';
import Img59 from './images/img59.jpg';
import Img40 from './images/img40.jpg';

const Birthday = () => {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            title: 'White Forest and Three Tier Cake',
            price: ' 549',
            originalPrice: ' 599',
            discount: '9% OFF',
            rating: 4.9,
            reviews: 2769,
            imageUrl: Img47,
        },
        {
                 id: 2,
                 title: 'Chocolate Vanilla Half & Half Cake',
                 price: ' 549',
                 rating: 4.9,
                 reviews: 1634,
                 imageUrl: Img56,
               },
               {
                 id: 3,
                 title: 'Fresh Fruits & Roasted Almonds Cake',
                 price: ' 699',
                 rating: 4.9,
                 reviews: 962,
                 imageUrl: Img48,
               },
               {
                 id: 4,
                 title: 'Pistachio Rasmalai Cake',
                 price: ' 699',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img57,
               },
               {
                 id: 5,
                 title: 'Chocolate Butter Cream Cake',
                 price: ' 550',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img50,
               },
               {
                 id: 6,
                 title: 'Vanilla Butter Cream Cake With Choco Truffle',
                 price: ' 699',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img58,
               },
               {
                 id: 7,
                 title: 'Strawberry Cake',
                 price: ' 699',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img59,
               },
               {
                 id: 8,
                 title: 'Chocolate Truffle Cake',
                 price: ' 699',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img40,
              },
        //... other products
    ];

    const handleProductClick = (product) => {
        navigate('/order', { state: { product } });
    };

    return (
        <div className="best-sellers">
          <nav className="navbar">
                <div><Link to='/BestSeller'><button className='button'>Trending Cakes</button></Link></div>
                <div><Link to='/products'><button className='button'>New Launcher</button></Link></div>
                <div><Link to='/ThemeCakes'><button className='button'>Theme Cakes</button></Link></div>
                <div><Link to='/dessert'><button className='button'>Desserts</button></Link></div>
                <div><Link to='/Birthday'><button className='button'>Birthday</button></Link></div>
                <div><Link to='/WeddingCakes'><button className='button'>Anniversary</button></Link></div>
                <div><Link to='/custom'><button className='button'>Customized Cakes</button></Link></div>
                <div><Link to='/'><button className='button'>Home</button></Link></div>
         </nav> <br />
            {/* Navbar and other content */}
            <h2>Birthday Cakes</h2>
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                        {product.tag && <div className="tag">{product.tag}</div>}
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="product-info"><div>
                            <h3>{product.title}</h3>
                            <div className="price">
                            ₹{product.price}
                                {product.originalPrice && (
                                    <span className="original-price">₹{product.originalPrice}</span>
                                )}
                                {product.discount && <span className="discount">{product.discount}</span>}
                                <div className="rating">
                                {product.rating} <span>⭐</span> ({product.reviews})
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Birthday;

