// import React from 'react';
// import { Link } from "react-router-dom";
// import Signup from './Signup';
// import './Home.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import Contact from '@mui/icons-material/Shop2Outlined';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Img01 from './images/img01.jpg';
// import Img02 from './images/img02.jpg';
// import Img10 from './images/img10.jpg';
// import Img30 from './images/img30.jpg';
// import Img22 from './images/img22.jpg';
// import Img13 from './images/img13.jpg';
// import FlavorsComponent from './FlavorComponents';


// function Home() {
//     return(
     
//         <div className="App">
//          <header className="header">
//           <h3 className='l'>GGBEESS CAKE</h3>
//           {/* <div className="logo">GGBEESS CAKE</div> */}
//           {/* <input type="text" className="search" placeholder="Search for cakes, occasion, flavor and more" /><SearchIcon/>  */}
          
//           <div className="actions">
//             {/* <div className="track-order">Track Order</div> */}
//             <div className='cart'><Link to='/aboutus' className='sign-in'>About Us</Link><Contact/></div>
//             <div className="cart"><Link to="/Cart" className='sign-in'>Cart</Link><ShoppingCartIcon/></div>
//             <div className="sign-in"><Link to='/register' className='sign-in'>SignUp</Link><PersonIcon/></div>
//           </div>
//           </header>
//         <nav className="navbar">
//           <div><button className='button'><Link to='/BestSeller' className='button'>Trending Cakes</Link></button></div>
//           <div><button className='button'><Link to='/products' className='button'>New Launcher</Link></button></div>
//           <div><button className='button'><Link to='/ThemeCakes' className='button'>Theme Cakes</Link></button></div>
//           <div><button className='button'><Link to='/dessert' className='button'>Desserts</Link></button></div>
//           <div><button className='button'><Link to='/Birthday' className='button'>Birthday</Link></button></div>
//           <div><button className='button'><Link to='/WeddingCakes' className='button'>Anniversary</Link></button></div>
//           <div><button className='button'><Link to='/custom' className='button'>Customized Cakes</Link></button></div>
//         </nav>  
        
//         <div className="cards">
//           <div className="card">
//             <img src={Img01} alt="Cake"/>
//             <div className="text">Create Sweet Memories</div>
//           </div>
//           <div className="card">
//             <img src={Img30} alt="Cake" />
//             <div className="text">Suprise Your Loved One</div>
//           </div>
//           <div className="card">
//             <img src={Img02} alt="Cake" />
//             <div className="text">Little One Deserves a Big Smile</div>
//           </div>
//         </div>
//         <div className="cards">
//           <div className="card">
//             <img src={Img10} alt="Cake" />
//             <div className="text">Make Your Birthday Wish</div>
//           </div>
//           <div className="card">
//             <img src={Img22} alt="Cake" />
//             <div className="text">Memories Of Sweetness</div>
//           </div>
//           <div className="card">
//             <img src={Img13} alt="Cake" />
//             <div className="text">Kiddy Corner</div>
//           </div>
//         </div>
//         <div>
//         <FlavorsComponent />
//         </div>
//       </div>
       
//     );
// }

// export default Home;

{/* <div>
<div className="cake-carousel">
<Slider {...settings}>
<div className="cake-card">
<img src="path/to/your/image1.jpg" alt="Create Sweet Memories" />
<h3>Create Sweet Memories</h3>
</div>
<div className="cake-card">
<img src="path/to/your/image2.jpg" alt="Gourmet Cakes" />
<h3>Gourmet Cakes</h3>
</div>
<div className="cake-card">
<img src="path/to/your/image3.jpg" alt="Your Little One Deserves a Big Smile" />
<h3>Your Little One Deserves a Big Smile</h3>
</div>
</Slider>
</div>
</div> */}

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Home.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Contact from '@mui/icons-material/Shop2Outlined';
import Review from '@mui/icons-material/Reviews';
import FlavorsComponent from './FlavorComponents';
import Img01 from './images/img01.jpg'; // Correct import syntax
import Img02 from './images/img02.jpg';
import Img10 from './images/img10.jpg';
import Img30 from './images/img30.jpg';
import Img22 from './images/img22.jpg';
import Img13 from './images/img13.jpg';

function Home() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        setIsAuthenticated(authStatus);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <div className="App">
            <header className="header">
                <h3 className='l'>GGBEESS CAKE</h3>
                <div className="actions">
                    <div className='cart'><Link to='/aboutus' className='sign-in'>About Us</Link><Contact/></div>
                    <div className="cart"><Link to="/Cart" className='sign-in'>Cart</Link><ShoppingCartIcon/></div>
                    <div className='cart'><Link to="/review" className='sign-in'>Review</Link><Review/></div>
                    {isAuthenticated ? (
                        <div className="sign-in">
                            <button onClick={handleLogout} className='sign-in1'>Logout</button>
                        </div>
                    ) : (
                        <div className="sign-in">
                            <Link to='/register' className='sign-in'>SignUp</Link><PersonIcon/>
                        </div>
                    )}
                </div>
            </header>
            
            <nav className="navbar">
                <div><Link to='/BestSeller'><button className='button'>Trending Cakes</button></Link></div>
                <div><Link to='/products'><button className='button'>New Launcher</button></Link></div>
                <div><Link to='/ThemeCakes'><button className='button'>Theme Cakes</button></Link></div>
                <div><Link to='/dessert'><button className='button'>Desserts</button></Link></div>
                <div><Link to='/Birthday'><button className='button'>Birthday</button></Link></div>
                <div><Link to='/WeddingCakes'><button className='button'>Anniversary</button></Link></div>
                <div><Link to='/custom'><button className='button'>Customized Cakes</button></Link></div>
            </nav>

            <div className="cards">
                <div className="card">
                    <img src={Img01} alt="Cake"/>
                    <div className="text">Create Sweet Memories</div>
                </div>
                <div className="card">
                    <img src={Img30} alt="Cake" />
                    <div className="text">Surprise Your Loved One</div>
                </div>
                <div className="card">
                    <img src={Img02} alt="Cake" />
                    <div className="text">Little One Deserves a Big Smile</div>
                </div>
            </div>

            <div className="cards">
                <div className="card">
                    <img src={Img10} alt="Cake" />
                    <div className="text">Make Your Birthday Wish</div>
                </div>
                <div className="card">
                    <img src={Img22} alt="Cake" />
                    <div className="text">Memories Of Sweetness</div>
                </div>
                <div className="card">
                    <img src={Img13} alt="Cake" />
                    <div className="text">Kiddy Corner</div>
                </div>
            </div>
            
            <FlavorsComponent />
        </div>
    );
}

export default Home;
