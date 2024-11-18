// import React, { useState } from 'react';
// import './Review.css'; // For separate styling
// import { Link } from 'react-router-dom';

// const ReviewPage = () => {
//     const [reviews, setReviews] = useState([]);
//     const [name, setName] = useState('');
//     const [rating, setRating] = useState(5);
//     const [reviewText, setReviewText] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newReview = {
//             id: Date.now(),
//             name,
//             rating,
//             reviewText,
//         };
//         setReviews([newReview, ...reviews]);
//         setName('');
//         setRating(5);
//         setReviewText('');
//     };

//     return (
//         <section>
            
            
//             <nav className="navbar">
//             <div><Link to='/BestSeller'><button className='button'>Trending Cakes</button></Link></div>
//                 <div><Link to='/products'><button className='button'>New Launcher</button></Link></div>
//                 <div><Link to='/ThemeCakes'><button className='button'>Theme Cakes</button></Link></div>
//                 <div><Link to='/dessert'><button className='button'>Desserts</button></Link></div>
//                 <div><Link to='/Birthday'><button className='button'>Birthday</button></Link></div>
//                 <div><Link to='/WeddingCakes'><button className='button'>Anniversary</button></Link></div>
//                 <div><Link to='/custom'><button className='button'>Customized Cakes</button></Link></div>
//                 <div><Link to='/'><button className='button'>Home</button></Link></div>
//             </nav><br/><br/>
//         <div className="review-page">
//             <h1>Cake Shop Reviews</h1>
//             <form onSubmit={handleSubmit} className="review-form">
//                 <label htmlFor="name">Name</label>
//                 <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <label htmlFor="rating">Rating</label>
//                 <input
//                     type="number"
//                     id="rating"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     min="1"
//                     max="5"
//                     required
//                 />
//                 <label htmlFor="reviewText">Review</label>
//                 <textarea
//                     id="reviewText"
//                     value={reviewText}
//                     onChange={(e) => setReviewText(e.target.value)}
//                     required
//                 ></textarea>
//                 <button type="submit">Submit Review</button>
//             </form>
//             <br/><br/>
//             <h2>Customer Reviews</h2>
//             <ul className="reviews-list">
//                 {reviews.length === 0 ? (
//                     <p>No reviews yet.</p>
//                 ) : (
//                     reviews.map((review) => (
//                         <li key={review.id} className="review-item">
//                             <strong>{review.name}</strong> (Rating: {review.rating}/5)
//                             <p>{review.reviewText}</p>
//                         </li>
//                     ))
//                 )}
//             </ul>
//         </div>
//         </section>
//     );
// };

// export default ReviewPage;


// import React, { useState } from 'react';
// import './Review.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

// // StarRating Component
// const StarRating = ({ rating }) => {
//     return (
//         <div className="star-rating">
//             {[1, 2, 3, 4, 5].map((star) => (
//                 <span key={star}>
//                     {star <= rating ? (
//                         <FontAwesomeIcon icon={faStar} className="star filled" />
//                     ) : star - rating === 0.5 ? (
//                         <FontAwesomeIcon icon={faStarHalfAlt} className="star half-filled" />
//                     ) : (
//                         <FontAwesomeIcon icon={faStar} className="star" />
//                     )}
//                 </span>
//             ))}
//         </div>
//     );
// };

// const ReviewPage = () => {
//     const [reviews, setReviews] = useState([
//         { id: 1, name: 'John Doe', rating: 4.5, reviewText: 'Delicious cake!' },
//         { id: 2, name: 'Jane Smith', rating: 3.5, reviewText: 'Loved the texture and flavor!' },
//         // Additional reviews can be added here
//     ]);
//     const [name, setName] = useState('');
//     const [rating, setRating] = useState(5);
//     const [reviewText, setReviewText] = useState('');
//     const [isFormVisible, setIsFormVisible] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newReview = {
//             id: Date.now(),
//             name,
//             rating: parseFloat(rating),
//             reviewText,
//         };
//         setReviews([newReview, ...reviews]);
//         setName('');
//         setRating(5);
//         setReviewText('');
//         setIsFormVisible(false);
//     };

//     return (
//         <section>
//             <nav className="navbar">
//                 <div><Link to='/BestSeller'><button className='button'>Trending Cakes</button></Link></div>
//                 <div><Link to='/products'><button className='button'>New Launcher</button></Link></div>
//                 <div><Link to='/ThemeCakes'><button className='button'>Theme Cakes</button></Link></div>
//                 <div><Link to='/dessert'><button className='button'>Desserts</button></Link></div>
//                 <div><Link to='/Birthday'><button className='button'>Birthday</button></Link></div>
//                 <div><Link to='/WeddingCakes'><button className='button'>Anniversary</button></Link></div>
//                 <div><Link to='/custom'><button className='button'>Customized Cakes</button></Link></div>
//                 <div><Link to='/'><button className='button'>Home</button></Link></div>
//             </nav>
//             <br />
//             <div className="review-page">
//                 <h1 className='h1'>Cake Shop Reviews</h1>

//                 {!isFormVisible ? (
//                     <div>
//                         <h2>Customer Reviews</h2>
//                         <div className="reviews-container">
//                             {reviews.length === 0 ? (
//                                 <p>No reviews yet.</p>
//                             ) : (
//                                 reviews.map((review) => (
//                                     <div key={review.id} className="review-card">
//                                         <div className="review-header">
//                                             <strong>{review.name}</strong>
//                                             <div className="review-stars">
//                                                 <StarRating rating={review.rating} />
//                                             </div>
//                                         </div>
//                                         <p>{review.reviewText}</p>
//                                     </div>
//                                 ))
//                             )}
//                         </div>

//                         <button onClick={() => setIsFormVisible(true)} className="write-review-btn">
//                             Write a Review
//                         </button>
//                     </div>
//                 ) : (
//                     <div>
//                         <form onSubmit={handleSubmit} className="review-form">
//                             <label htmlFor="name">Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                             />
//                             <label htmlFor="rating">Rating (1-5, including .5)</label>
//                             <input
//                                 type="number"
//                                 id="rating"
//                                 value={rating}
//                                 onChange={(e) => setRating(e.target.value)}
//                                 min="1"
//                                 max="5"
//                                 step="0.5"
//                                 required
//                             />
//                             <label htmlFor="reviewText">Review or Suggestion</label>
//                             <textarea
//                                 id="reviewText"
//                                 value={reviewText}
//                                 onChange={(e) => setReviewText(e.target.value)}
//                                 required
//                             ></textarea>
//                             <div className="button-container">
//                     <button type="submit" className="submit-review-btn">Submit Review</button>
//                     <button
//                         type="button"
//                         onClick={() => setIsFormVisible(false)}
//                         className="cancel-review-btn"
//                     >
//                         Cancel
//                     </button>
//                 </div>
//                         </form>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };




// export default ReviewPage;

import React, { useState } from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// StarRating Component
const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>
                    {star <= rating ? (
                        <FontAwesomeIcon icon={faStar} className="star filled" />
                    ) : star - rating === 0.5 ? (
                        <FontAwesomeIcon icon={faStarHalfAlt} className="star half-filled" />
                    ) : (
                        <FontAwesomeIcon icon={faStar} className="star" />
                    )}
                </span>
            ))}
        </div>
    );
};

const ReviewPage = () => {
    const [reviews, setReviews] = useState(() => {
        // Load reviews from local storage initially
        const storedReviews = localStorage.getItem('reviews');
        return storedReviews ? JSON.parse(storedReviews) : [];
    });

    const [name, setName] = useState('');
    const [rating, setRating] = useState(5);
    const [reviewText, setReviewText] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: Date.now(),
            name,
            rating: parseFloat(rating),
            reviewText,
        };

        const updatedReviews = [newReview, ...reviews];
        setReviews(updatedReviews);

        // Store reviews in local storage
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));

        setName('');
        setRating(5);
        setReviewText('');
        setIsFormVisible(false);
    };

    return (
        <section>
            <nav className="navbar1">
                <div><Link to='/BestSeller'><button className='button'>Trending Cakes</button></Link></div>
                <div><Link to='/products'><button className='button'>New Launcher</button></Link></div>
                <div><Link to='/ThemeCakes'><button className='button'>Theme Cakes</button></Link></div>
                <div><Link to='/dessert'><button className='button'>Desserts</button></Link></div>
                <div><Link to='/Birthday'><button className='button'>Birthday</button></Link></div>
                <div><Link to='/WeddingCakes'><button className='button'>Anniversary</button></Link></div>
                <div><Link to='/custom'><button className='button'>Customized Cakes</button></Link></div>
                <div><Link to='/'><button className='button'>Home</button></Link></div>
            </nav>
            <br />
            <div className="review-page">
                <h1 className='h1'>Cake Shop Reviews</h1>

                {!isFormVisible ? (
                    <div>
                        <h2>Customer Reviews</h2>
                        <div className="reviews-container">
                            {reviews.length === 0 ? (
                                <p>No reviews yet.</p>
                            ) : (
                                reviews.map((review) => (
                                    <div key={review.id} className="review-card">
                                        <div className="review-header">
                                            <strong>{review.name}</strong>
                                            <div className="review-stars">
                                                <StarRating rating={review.rating} />
                                            </div>
                                        </div>
                                        <p>{review.reviewText}</p>
                                    </div>
                                ))
                            )}
                        </div>

                        <button onClick={() => setIsFormVisible(true)} className="write-review-btn">
                            Write a Review
                        </button>
                    </div>
                ) : (
                    <div>
                        <form onSubmit={handleSubmit} className="review-form">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label htmlFor="rating">Rating (1-5, including .5)</label>
                            <input
                                type="number"
                                id="rating"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                min="1"
                                max="5"
                                step="0.5"
                                required
                            />
                            <label htmlFor="reviewText">Review or Suggestion</label>
                            <textarea
                                id="reviewText"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                required
                            ></textarea>
                            <div className="button-container">
                                <button type="submit" className="submit-review-btn">Submit Review</button>
                                <button
                                    type="button"
                                    onClick={() => setIsFormVisible(false)}
                                    className="cancel-review-btn"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ReviewPage;

