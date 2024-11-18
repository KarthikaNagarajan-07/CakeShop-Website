import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Aboutus.css';
import Contact from '@mui/icons-material/Call';

const mapContainerStyle = {
    height: "400px",
    width: "100%",
};

const center = {
    lat: 11.2723, // Replace with your shop's latitude
    lng: 77.5874, // Replace with your shop's longitude
};

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1>About Us - Ggbeess Cake Shop</h1>

            <div className="rating-container">
                <div className="rating-value">4.7</div>
                <div className="rating-stars">⭐⭐⭐⭐⭐</div>
                <div className="rating-count">95 Ratings</div>
                
            </div>

            <p>
                Welcome to Ggbeess Cake Shop! Located in the heart of Perundurai, we have been serving the community with delicious cakes and baked goods for over 7 years. Since our establishment in 2017, we've become a local favorite for anyone looking to indulge in fresh, quality cakes with a variety of flavors to choose from.
            </p>

            <div className="address-container">
                <h3>Address</h3>
                <p>No, 122/1, Erode Main Road, Perundurai HO, Perundurai - 638052</p>
                <p>(Opposite to Taluk Office, Near Police Station Roundana)</p>
            </div>

            <div className="timing-container">
                <h3>Timing</h3>
                <p>Mon - Sat: 9:00 AM - 8:30 PM</p>
                <p>Sun: 9:00 AM - 5:00 PM</p>
            </div>

            <div className="section map-container">
                <h2>Find Us</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.785165276313!2d77.58320957406234!3d11.277196788903643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96dbb1d3581cd%3A0xc7a744bc8ed55de0!2sGGbeess%20Cake%20Shop!5e0!3m2!1sen!2sin!4v1725375573344!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className="address-container">
            <h3>Our Services</h3>
            <ul>
                Home Delivery<br />
                Egg-less Cakes Available<br />
                Sitting Available
            </ul>
            </div>
            <div className="address-container">
            <h3>Why Choose Us?</h3>
            <p>
                Our customers love us and have rated us highly for our quality and service. With a rating of 4.7 out of 5 stars from 95 happy customers, we strive to maintain our commitment to excellence.
            </p>
            </div>

            <div className="address-container">            
            <h3>Contact Us</h3>
            <p >If you have any questions, want to place an order, or just want to learn more about what we offer, feel free to reach out through our website or visit us in person.</p>
            <p><Contact/><b>CALL: 07947130812</b></p>
            </div>
        </div>
    );
};

export default AboutUs;
