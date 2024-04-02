import React from 'react';
import './FeedbackCard.css'; // Make sure this path is correct

const FeedbackCard = ({ image, name, feedback, rating }) => {
  return (
    <div className="feedback-card">
      <img src={image} alt="Feedback" className="feedback-image"/>
      <div className="card-content">
        <h3 className="feedback-name">{name}</h3>
        <p className="feedback-text">{feedback}</p> {/* This line was updated */}
        <div className="star-rating">
          {[...Array(5)].map((star, index) => (
            <span key={index} className={`fa fa-star ${index < rating ? 'checked' : ''}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
