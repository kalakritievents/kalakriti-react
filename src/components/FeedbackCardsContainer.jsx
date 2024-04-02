import React from 'react';
import FeedbackCard from './FeedbackCard'; // Ensure this is the correct path
import './FeedbackCardsContainer.css'; // Path to your CSS file
// Importing images
import feedback1 from '../assets/events/ArtEvent/Feedbacks/feedback1.jpeg';
import feedback2 from '../assets/events/ArtEvent/Feedbacks/feedback2.jpeg';
import feedback3 from '../assets/events/ArtEvent/Feedbacks/feedback3.jpeg';
import feedback4 from '../assets/events/ArtEvent/Feedbacks/feedback4.jpeg';
import feedback5 from '../assets/events/ArtEvent/Feedbacks/feedback5.jpeg';
import feedback6 from '../assets/events/ArtEvent/Feedbacks/feedback6.jpeg';
import feedback7 from '../assets/events/ArtEvent/Feedbacks/feedback7.jpeg';
import feedback8 from '../assets/events/ArtEvent/Feedbacks/feedback8.jpeg';
import feedback9 from '../assets/events/ArtEvent/Feedbacks/feedback9.jpeg';
import feedback10 from '../assets/events/ArtEvent/Feedbacks/feedback10.jpeg';
import feedback11 from '../assets/events/ArtEvent/Feedbacks/feedback11.jpeg';

const FeedbackCardsContainer = () => {
  const feedbacks = [
    {
      image: feedback1,
      name: 'Priya Singh',
      feedback: 'The Kalakriti event was enlightening and superbly organized. A must-attend for art lovers!',
      rating: 5
    },
    {
      image: feedback2,
      name: 'Rohan Gupta',
      feedback: 'Truly mesmerizing experience. The creativity on display was breathtaking!',
      rating: 4
    },
    {
      image: feedback3,
      name: 'Anita Desai',
      feedback: 'An amazing platform for artists. Loved the variety and the vibrant atmosphere!',
      rating: 5
    },
    {
      image: feedback4,
      name: 'Kunali Shah',
      feedback: 'Kalakriti events bring out the best in the art community. Absolutely inspiring!',
      rating: 4
    },
    {
      image: feedback5,
      name: 'Sonal Mathur',
      feedback: 'The attention to detail and the overall organization was top-notch. Had a great time!',
      rating: 5
    },
    {
      image: feedback6,
      name: 'Vijay Kumar',
      feedback: 'A vibrant display of culture and art. Truly appreciated by every art enthusiast!',
      rating: 4
    },
    {
      image: feedback7,
      name: 'Sarita Patil',
      feedback: 'Fascinating workshops with hands-on experiences. A wonderful opportunity for learning!',
      rating: 5
    },
    {
      image: feedback8,
      name: 'Hema manushi',
      feedback: 'Incredible range of artwork from various artists. The gallery was splendid!',
      rating: 4
    },
    {
      image: feedback9,
      name: 'Om',
      feedback: 'From the organization to the displays, everything was impeccable. Highly recommended!',
      rating: 5
    },
    {
      image: feedback10,
      name: 'Pari',
      feedback: 'An unforgettable journey through contemporary and traditional art forms.',
      rating: 4
    },
    {
      image: feedback11,
      name: 'Ram',
      feedback: 'Engaging and educational. Kalakriti events provide a unique perspective on art!',
      rating: 5
    }
  ];

  return (
    <div className="feedback-container">
      <h2 className="feedback-header">Feedbacks</h2> {/* Updated for heading alignment */}
      {feedbacks.map((feedback, index) => (
        <FeedbackCard
          key={index}
          image={feedback.image}
          name={feedback.name}
          feedback={feedback.feedback}
          rating={feedback.rating}
        />
      ))}
    </div>
  );
};

export default FeedbackCardsContainer;
