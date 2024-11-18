// src/BestSellers.jsx
import React from 'react';
import './BestSeller.css';
import Img17 from './images/img17.jpg'
import Img05 from './images/img05.jpg'
import Img28 from './images/img28.jpg'
import Img03 from './images/img03.jpg'
import Img22 from './images/img22.jpg'
import Img06 from './images/img06.jpg'
import Img46 from './images/img46.jpg'
import Img04 from './images/img04.jpg'
import { Link,useNavigate } from "react-router-dom";

const BestSellers = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      title: 'White Forest 3 Tier Cake',
      price: '₹ 549',
      originalPrice: '₹ 599',
      discount: '9% OFF',
      rating: 4.9,
      reviews: 2769,
      imageUrl: Img17,
      tag: 'Best Seller',
    },
    {
      id: 2,
      title: 'Chocolate Vanilla Half Cake',
      price: '₹ 549',
      rating: 4.9,
      reviews: 1634,
      imageUrl: Img05,
    },
    {
      id: 3,
      title: 'Fruits & Ganache Cake',
      price: '₹ 699',
      rating: 4.9,
      reviews: 962,
      imageUrl: Img28,
      tag: 'Best Seller',
    },
    {
      id: 4,
      title: 'Pistachio Rasmalai Cake',
      price: '₹ 699',
      rating: 4.8,
      reviews: 109,
      imageUrl: Img03,
    },
    {
        id: 5,
        title: 'Chocolate Butter Cream Cake',
        price: '₹ 550',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img22,
      },
      {
        id: 6,
        title: 'Vannila Butter Cream Cake With Choco Truffle',
        price: '₹ 699',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img06,
      },
      {
        id: 7,
        title: 'Strawberry plain cream Cake',
        price: '₹ 699',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img46,
      },
      {
        id: 8,
        title: 'Chocolate Truffle and Oreo biscuit Cake',
        price: '₹ 699',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img04,
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
                <div><Link to='/' ><button className='button'>Home</button></Link></div>
        </nav>  <br/>
      <h2>Best Seller</h2>
      <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                        {product.tag && <div className="tag">{product.tag}</div>}
                        <img src={product.imageUrl} alt={product.title} />
                        <div className="product-info">
                        <div><h3>{product.title}</h3>
                            <div className="price">
                                {product.price}
                                {product.originalPrice && (
                                    <span className="original-price">{product.originalPrice}</span>
                                )}
                                {product.discount && <span className="discount">{product.discount}</span>}
                                <div className="rating">
                                {product.rating} <span>⭐</span> ({product.reviews})
                            </div>
                            </div></div>
                          
                            
                            {/* <div className="rating">
                                {product.rating} <span>⭐</span> ({product.reviews})
                            </div> */}
                            
                             
                        </div>
                    </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
