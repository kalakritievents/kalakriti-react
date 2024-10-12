import Header from './Header';
import React from 'react';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import { Carousel } from 'react-bootstrap';
import styles from './ArtEvent.module.css';
import ArtSlide1 from '../assets/events/DanceEvent/ArtSlide1.jpeg';
// import ArtSlide2 from '../assets/events/ArtEvent/ArtSlide2.gif';
import DanceEntryFee from '../assets/events/DanceEvent/DanceEntryFee.jpeg';
import DancePoster from '../assets/events/DanceEvent/ArtPoster.jpeg';
import templete1 from '../assets/templete1.jpg';
import certificate1 from '../assets/certificate1.jpg';
import certificate2 from '../assets/certificate2.jpg';

// import ArtworkDay4 from '../assets/events/ArtEvent/ArtworkDay4';
// import ArtworkDay5 from '../assets/events/ArtEvent/ArtworkDay5';
import FeedbackCardsContainer from './FeedbackCardsContainer';
import CountdownTimer from './CountdownTimer';
import InfoCards from './InfoCards'; // Ensure the path to your InfoCards component is correct
import { Link } from 'react-router-dom';
import Footer from './Footer';
import DatesCard from './DatesCard'; // Adjust the import path as necessary



// const artworks = [
//   { name: 'Abhilash Mandavkar', date: '01/03/2024', imageUrl: 'assets/day1.jpg' },
//   { name: 'Shivam Raut', date: '02/03/2024', imageUrl: 'assets/day2.jpg' },
//   { name: 'Aditya Bais', date: '03/03/2024', imageUrl: 'assets/day3.jpg' },
//   { name: 'Shubham Patil', date: '04/03/2024', imageUrl: 'assets/day4.jpg' },
//   { name: 'DR.UTPAL ROY', date: '05/03/2024', imageUrl: 'assets/day5.jpg' }
//   // Add more artworks as needed
// ];




const ArtEvent = () =>{



  return (
    <div>
      <Header isEventPage={true} />
      <div className={styles.artEventPage}>
        <Carousel interval={3000} className={styles.carousel}>
          <Carousel.Item>
            <img src={ArtSlide1} alt="First Art Event" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={ArtSlide1} alt="Second Art Event" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={ArtSlide1} alt="Third Art Event" /> {/* Change this if you have a third different image */}
          </Carousel.Item>
        </Carousel>

        <div className={styles.eventInfo}>
          <h1>KalaKriti Dance Event</h1>
          <p>Let your body be your canvas! Showcase your graceful moves and captivating expressions in this online dance competition. Whether you specialize in classical Indian dance forms, contemporary styles, or upbeat routines, this is your platform to shine. Dazzle us with your talent and mesmerize the nation with your rhythm.
</p>
        </div>

        <div className={styles.posters}>
          <div className={styles.poster}>
            <img src={DancePoster} alt="Art Prize" />
          </div>
          <div className={styles.poster}>
            <img src={DanceEntryFee} alt="Art Entry Fee" />
          </div>
        </div>
      </div>
      <div className={styles.registerSection}>
        {/* <button onClick={() => window.location.href = 'art_register.html'} className={styles.detailsBtn}>REGISTER NOW</button> */}
        <Link to="/DanceRegister" className={styles.detailsBtn}>REGISTER NOW</Link>

      </div>



      <div className={styles.indianCultureSection}>
        <h2>NATIONAL DANCE CONTEST FOR OUR INDIAN CULTURE</h2>
        <p style={{ "fontSize": "larger" }}>India's Largest Online Dance Competition Platform*</p>
        {/* <h4 style={{ "fontWeight": "bold" }} >SEASON 2 LIVE NOW</h4> */}
        <h4 className={styles.SeasonName} >SEASON 7 LIVE NOW</h4>

      </div>

      <div className={styles.container3}>
        <div className={styles.left}>
          <h1>National level E-Certificate</h1>
          <p>Every participant will get their national level E-Certificate within 48 hours (2 days) after submission of artwork/artworks.</p>
          <p>Winner will get the cash prizes And Trophy After The Result</p>
        </div>
        <div className={styles.right}>
          <img className={styles.cimg} src={templete1} alt="E-Certificate" />
        </div>
      </div>

      <div className={styles.container4}>
        <div className={styles.left4}>
          <img className={styles.cimg1} src={certificate1} alt="Award" />
        </div>
        <div className={styles.right4}>
          <img className={styles.cimg1} src={certificate2} alt="Award" />
        </div>
      </div>


      <DatesCard/>


      <FeedbackCardsContainer />
      
      <CountdownTimer targetDate="2024-12-31T00:00:00" />

      <InfoCards />



      <Footer />

    </div>
  );
}
export default ArtEvent;
