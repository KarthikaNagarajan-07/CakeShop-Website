import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Birthday.css';
import Img62 from './images/img62.jpg';
import Img63 from './images/img63.jpg';
import Img64 from './images/img64.jpg';

const Brownie = () => {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            title: 'Outrageous brownies',
            price: '₹ 200',
            originalPrice: '₹ 250',
            discount: '9% OFF',
            rating: 4.9,
            reviews: 2769,
            imageUrl: Img62,
        },
        {
                 id: 2,
                 title: 'Fudge Brownie',
                 price: '₹ 200',
                 rating: 4.9,
                 reviews: 1634,
                 imageUrl: Img63,
               },
               {
                 id: 3,
                 title: 'Chocolate Brownie',
                 price: '₹ 200',
                 rating: 4.9,
                 reviews: 962,
                 imageUrl: Img64,
               },

    ];

    const handleProductClick = (product) => {
        navigate('/order', { state: { product } });
    };

    return (
        <div className="best-sellers">
          <nav className="navbar">
            <div><button className='button'><Link to='/BestSeller' className='button'>Trending Cakes</Link></button></div>
            <div><button className='button'>By Flavours</button></div>
            <div><button className='button'><Link to='/ThemeCakes' className='button'>Theme Cakes</Link></button></div>
            <div><button className='button'>Desserts</button></div>
            <div><button className='button'><Link to='/Birthday' className='button'>Birthday</Link></button></div>
            <div><button className='button'><Link to='/WeddingCakes' className='button'>Anniversary</Link></button></div>
            <div><button className='button'>Customized Cakes</button></div>
            <div><button className='button'><Link to='/' className='button'>Home</Link></button></div>
         </nav> <br />
            {/* Navbar and other content */}
            <h2>Desserts</h2>
            
            <div className="dessert-types">
                <button className='dessert-button'><Link to='/dessert' className='link'>All</Link></button>
                <button className='dessert-button'><Link to='/brownie' className='link'>Brownie</Link></button>
                <button className='dessert-button'><Link to='/cookies' className='link'>Cookies</Link></button>
                <button className='dessert-button'><Link to='/cupcakes' className='link'>Cupcakes</Link></button>
                <button className='dessert-button'><Link to='/piececakes' className='link'>Piece Cakes</Link></button>
            </div>
            <br />
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                        {product.tag && <div className="tag">{product.tag}</div>}
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="product-info"><div>
                            <h3>{product.title}</h3>
                            <div className="price">
                                {product.price}
                                {product.originalPrice && (
                                    <span className="original-price">{product.originalPrice}</span>
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

export default Brownie;