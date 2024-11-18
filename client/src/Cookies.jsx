import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Birthday.css';
import Img70 from './images/img70.jpg';
import Img71 from './images/img71.jpg';
import Img72 from './images/img72.jpg';
import Img73 from './images/img73.jpg';
import Img74 from './images/img74.jpg';
import Img75 from './images/img75.jpg';

const CupCakes = () => {
    const navigate = useNavigate();
    const products = [
        {
            id: 10,
            title: 'Strawberry Cake',
            price: '₹ 699',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img70,
          },
          {
            id: 11,
            title: 'Strawberry Cake',
            price: '₹ 699',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img71,
          },
          {
            id: 12,
            title: 'Strawberry Cake',
            price: '₹ 699',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img72,
          },
          {
            id: 13,
            title: 'Strawberry Cake',
            price: '₹ 699',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img73,
          },
          {
            id: 14,
            title: 'Strawberry Cake',
            price: '₹ 699',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img74,
          },
          {
            id: 15,
            title: 'Strawberry Cake',
            price: '₹ 699',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img75,
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