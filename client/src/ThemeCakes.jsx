import React from 'react';
import './ThemeCake.css';
import Img42 from './images/img42.jpg'
import Img33 from './images/img33.jpg'
import Img13 from './images/img13.jpg'
import Img34 from './images/img34.jpg'
import Img35 from './images/img35.jpg'
import Img36 from './images/img36.jpg'
import Img44 from './images/img44.jpg'
import Img37 from './images/img37.jpg'
import Img38 from './images/img38.jpg'
import Img07 from './images/img07.jpg'
import Img43 from './images/img43.jpg'
import Img41 from './images/img41.jpg'
import { Link, useNavigate } from 'react-router-dom';

const ThemeCake = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      title: 'Strip Theme Cake',
      price: '549',
      originalPrice: '599',
      discount: '9% OFF',
      rating: 4.9,
      reviews: 2769,
      imageUrl: Img42,
    },
    {
      id: 2,
      title: 'Animals Theme Cake',
      price: '549',
      rating: 4.9,
      reviews: 1634,
      imageUrl: Img33,
    },
    {
      id: 3,
      title: 'Bee Theme Cake',
      price: '699',
      rating: 4.9,
      reviews: 962,
      imageUrl: Img13,
      
    },
    {
      id: 4,
      title: 'Avengers Theme Cake',
      price: '699',
      rating: 4.8,
      reviews: 109,
      imageUrl: Img34,
    },
    {
        id: 5,
        title: 'RainBow Theme Cake',
        price: '550',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img35,
      },
      {
        id: 6,
        title: 'Dragon Theme Cake',
        price: '699',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img36,
      },
      {
        id: 7,
        title: 'Rose Theme Cake',
        price: '699',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img44,
      },
      {
        id: 8,
        title: 'Unicorn Theme Cake',
        price: '499',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img37,
      },
      {
        id: 9,
        title: 'Jungle Theme Cake',
        price: '499',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img38,
      },
      {
        id: 10,
        title: 'Daddy Bear Face Chocolate Theme Cake',
        price: '499',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img07,
      },
      {
        id: 11,
        title: 'Coco Melon & flavored Theme Cake',
        price: '499',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img43,
      },
      {
        id: 12,
        title: 'Double Color and Suger Ball Theme Cake',
        price: '499',
        rating: 4.8,
        reviews: 109,
        imageUrl: Img41,
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
        </nav>  <br/>
      <h2>Our Theme Cakes</h2>
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

export default ThemeCake;