import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './ReviewAdmin.css'; // Create and style as per your need

const AdminPage = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        // Fetch reviews from local storage when admin page loads
        const storedReviews = localStorage.getItem('reviews');
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        }
    }, []);

    // Handler for back button
    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="admin-page">
            <h1>Admin - Reviews</h1>
            
            
            {reviews.length === 0 ? (
                <p>No reviews available.</p>
            ) : (
                <div className="reviews-list">
                    {reviews.map((review) => (
                        <div key={review.id} className="admin-review-card">
                            <h3>{review.name}</h3>
                            <p>Rating: {review.rating}</p>
                            <p>{review.reviewText}</p>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={handleBackClick} className="back-button">Go Back</button> {/* Back button */}
        </div>
    );
};

export default AdminPage;
