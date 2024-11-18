// import { useState } from "react";
// import './Signup.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom'


// function Signup() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassWord] = useState('');
//     const [phone, setPhone] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3001/register', { name, email, phone, password })
//             .then(res => {
//                 navigate('/login');
//             })
//             .catch(err => console.log(err));
//     }

//     return (
//         <div className='signup-container'>
            
//             <div className="signup-form-box">
//                 <div className="signup-form-wrapper">
//                     <form onSubmit={handleSubmit}>
//                         <div id="id1">
//                             <h2 className="signup-heading">Sign Up</h2><br />
//                             <label htmlFor="username">Username</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your username"
//                                 id="username"
//                                 className="signup-input"
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                             /><br />
//                             <label htmlFor="email">Email</label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 id="email"
//                                 className="signup-input"
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             /><br />
//                             <label htmlFor="phone">Mobile Number</label>
//                             <input
//                                 type="tel"
//                                 placeholder="Enter your Phone number"
//                                 id="phone"
//                                 className="signup-input"
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 required
//                             /><br />
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 type="password"
//                                 placeholder="Enter your Password"
//                                 id="password"
//                                 className="signup-input"
//                                 onChange={(e) => setPassWord(e.target.value)}
//                                 required
//                             /><br /><br />
//                         </div>

//                         <button className="signup-button">Sign Up</button>
//                         <p className="signup-text">Already have an account?</p>
//                         <Link to='/login' className="signup-link">Login</Link>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signup;

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';
import axios from 'axios';
import backgroundImage from './images/background01.jpg'; // Import the background image

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, phone, password })
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        
        <div
          className="signup-background" 
          style={{
              backgroundImage: `url(${backgroundImage})`, // Set background image here
          }}
        >
            <div className="signup-form-box">
                <div className="signup-form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <h2 className="signup-heading">Sign Up</h2>
                        <div id="id1">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                id="username"
                                className="signup-input"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                id="email"
                                className="signup-input"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="phone">Mobile Number</label>
                            <input
                                type="tel"
                                placeholder="Enter your Phone number"
                                id="phone"
                                className="signup-input"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                id="password"
                                className="signup-input"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button className="signup-button">Sign Up</button>
                        <p className="signup-text">Already have an account?</p>
                        <Link to='/login' className="signup-link">Login</Link>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

export default Signup;
