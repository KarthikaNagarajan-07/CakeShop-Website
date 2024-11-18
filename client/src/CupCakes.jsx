import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Birthday.css';
import Img65 from './images/img65.jpg';
import Img66 from './images/img66.jpg';
import Img67 from './images/img67.jpg';
import Img68 from './images/img68.jpg';
import Img69 from './images/img69.jpg';
import Img76 from './images/img76.jpg';

const CupCakes = () => {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            title: 'Vanila Plain Cupcake',
            price: '₹ 60',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img65,
          },
          {
            id: 2,
            title: 'Chocolate Topings Cupcake',
            price: '₹ 70',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img66,
          },
          {
            id: 3,
            title: 'Butter cream cupcake',
            price: '₹ 70',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img67,
          },
          {
            id: 4,
            title: 'Chocolate Cream Cupcake',
            price: '₹ 80',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img68,
          },
          {
            id: 5,
            title: 'Chocolate plain cupcake',
            price: '₹ 85',
            rating: 4.8,
            reviews: 109,
            imageUrl: Img69,
         },
         {
           id: 6,
           title: 'Chocolate Truffle Cupcake',
           price: '₹ 90',
           rating: 4.8,
           reviews: 109,
           imageUrl: Img76,
         },
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