import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Birthday.css';
import Img77 from './images/img77.jpg';
import Img78 from './images/img78.jpg';
import Img79 from './images/img79.jpg';
import Img80 from './images/img80.jpg';
import Img81 from './images/img81.jpg';
import Img82 from './images/img82.jpg';
import Img83 from './images/img83.jpg';
import Img84 from './images/img84.jpg';
import Img85 from './images/img85.jpg';
import Img86 from './images/img86.jpg';
import Img87 from './images/img87.jpg';
import Img88 from './images/img88.jpg';

const CupCakes = () => {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            title: 'Black Forest PieceCake',
            price: '₹ 49',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img77,
          },
          {
            id: 2,
            title: 'Black Forest Cake',
            price: '₹ 50',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img78,
          },
          {
            id: 3,
            title: 'Black Forest Cake',
            price: '₹ 49',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img79,
          },
          {
           id: 4,
           title: 'White Forest Piece Cake',
           price: '₹ 49',
           rating: 4.8,
           reviews: 109,
           imageUrl: Img80,
         },
         {
           id: 5,
           title: 'White Forest Piece Cake',
           price: '₹ 49',
           rating: 4.8,
           reviews: 109,
           imageUrl: Img81,
         },
         {
            id: 5,
            title: 'Chocolate Piece Cake',
            price: '₹ 40',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img82,
          },
          {
            id: 5,
            title: 'Chocolate Tuffle Piece Cake',
            price: '₹ 80',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img83,
          },
          {
            id: 5,
            title: 'Rainbow Piece Cake',
            price: '₹ 100',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img84,
          },
          {
            id: 5,
            title: 'Vanilla Piece Cake',
            price: '₹ 50',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img85,
          },
          {
            id: 5,
            title: 'Vanilla Piece Cake',
            price: '₹ 50',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img86,
          },
          {
            id: 5,
            title: 'Redvelvet Piece Cake',
            price: '₹ 80',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img87,
          },
          {
            id: 5,
            title: 'Redvelvet Piece Cake',
            price: '₹ 80',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img88,
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
            <div><button className='button'><Link to='/custom' className='button'>Customized Cakes</Link></button></div>
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

export default CupCakes;