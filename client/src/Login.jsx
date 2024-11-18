// import React from 'react'
// import { useState} from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import  "./Login.css";
// import axios from 'axios'

// function Login() {
//     const [email,setEmail] = useState()
//     const [password, setPassword] = useState()
//     const navigate = useNavigate()

//     axios.defaults.withCredentials = true;
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post('http://localhost:3001/login', {email,password})
//         .then(res => {
//           console.log("login: "+res.data);
//           if(res.data.Status === "Success"){
//             if(res.data.role === "admin"){
//               navigate('/admin')
//             }else{
//               navigate('/');
//             }
//           }
//             //navigate('/login')
//         }).catch(err => console.log(err))
//     }

//     return(
//     <section>
//       <div className="form-box"> 
//         <div className="form-value"> 
//           <form action="" onSubmit={handleSubmit}>
//             <h2>Login</h2>
//             <div className="inputbox">
//               <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
//               <label htmlFor="email">Email-id</label>
//             </div>
//             <div className="inputbox">
//               <input type="password" onChange={(e) => setPassword(e.target.value)} required />
//               <label htmlFor="password">Password</label>
//             </div>
//             <div className="forget">
//               <label htmlFor="remember">
//                 <input type="checkbox" id="remember" />
//                 Remember Me
//                 <a href="#"> Forgot Password</a>
//               </label>
//             </div>
//             <button type="submit">Login</button>
//             <div className="register">
//               <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
//             </div>
//           </form>
//         </div>  
//       </div>
//     </section>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Setting up Axios to send cookies with requests
    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        try {
            const res = await axios.post('http://localhost:3001/login', { email, password });
            if (res.data.Status === "Success") {
                localStorage.setItem('isAuthenticated', true); // Set user as authenticated
                if (res.data.role === "admin") {
                    navigate('/admin'); // Redirect to admin page
                } else {
                    navigate('/'); // Redirect to home page
                }
            } else {
                alert("Login failed: " + res.data); // Handle login failure
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred. Please try again."); // Notify user of the error
        }
    };

    return (
        <div className='bg'>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="inputbox">
                            <input 
                                type="email" 
                                name="email" 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <label htmlFor="email">Email-id</label>
                        </div>
                        <div className="inputbox">
                            <input 
                                type="password" 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="forget">
                            <label htmlFor="remember">
                                <input type="checkbox" id="remember" />
                                Remember Me
                                <a href="#"> Forgot Password</a>
                            </label>
                        </div>
                        <button type="submit" className='b'>Login</button>
                        <div className="register">
                            <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
