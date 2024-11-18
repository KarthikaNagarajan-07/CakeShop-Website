import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Birthday.css';
import Img62 from './images/img62.jpg';
import Img63 from './images/img63.jpg';
import Img64 from './images/img64.jpg';
import Img65 from './images/img65.jpg';
import Img66 from './images/img66.jpg';
import Img67 from './images/img67.jpg';
import Img68 from './images/img68.jpg';
import Img69 from './images/img69.jpg';
import Img76 from './images/img76.jpg';
import Img70 from './images/img70.jpg';
import Img71 from './images/img71.jpg';
import Img72 from './images/img72.jpg';
import Img73 from './images/img73.jpg';
import Img74 from './images/img74.jpg';
import Img75 from './images/img75.jpg';


const Birthday = () => {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            title: 'Outrageous brownies',
            price: '200',
            originalPrice: '250',
            discount: '9% OFF',
            rating: 4.9,
            reviews: 2769,
            imageUrl: Img62,
        },
        {
                 id: 2,
                 title: 'Fusy Brownie',
                 price: '200',
                 rating: 4.9,
                 reviews: 1634,
                 imageUrl: Img63,
               },
               {
                 id: 3,
                 title: 'Chocolate Brownie',
                 price: '200',
                 rating: 4.9,
                 reviews: 962,
                 imageUrl: Img64,
               },
               {
                 id: 4,
                 title: 'Vanila Plain Cupcake',
                 price: '60',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img65,
               },
               {
                 id: 5,
                 title: 'Chocolate Topings Cupcake',
                 price: '70',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img66,
               },
               {
                 id: 6,
                 title: 'Butter cream cupcake',
                 price: '70',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img67,
               },
               {
                 id: 7,
                 title: 'Chocolate Cream Cupcake',
                 price: '80',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img68,
               },
               {
                 id: 8,
                 title: 'Chocolate plain cupcake',
                 price: '₹ 85',
                 rating: 4.8,
                 reviews: 109,
                 imageUrl: Img69,
              },
              {
                id: 9,
                title: 'Chocolate Truffle Cupcake',
                price: '₹ 90',
                rating: 4.8,
                reviews: 109,
                imageUrl: Img76,
              },
              {
                id: 10,
                title: 'Normal Cookies',
                price: '₹ 100',
                rating: 4.8,
                reviews: 109,
                imageUrl: Img70,
              },
              {
                id: 11,
                title: 'Chocolate Chip Cookies',
                price: '₹ 100',
                rating: 4.8,
                reviews: 109,
                imageUrl: Img71,
              },
              {
                id: 12,
                title: 'Chocolate Cookies',
                price: '₹ 100',
                rating: 4.8,
                reviews: 109,
                imageUrl: Img72,
              },
              {
                id: 13,
                title: 'Plain Cookies',
                price: '₹ 100',
                rating: 4.8,
                reviews: 109,
                imageUrl: Img73,
              },
              {
                id: 14,
                title: 'Ghee Cookies',
                price: '₹ 100',
                rating: 4.8,
                reviews: 109,
                imageUrl: Img74,
              },
              {
                id: 15,
                title: 'Salt Cookies',
                price: '₹ 60',
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

export default Birthday;