import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'; // Make sure you create this CSS module
import Header from './Header';
import Art_HomePage from '../assets/events/HomePage/Art_HomePage.png';
import Rangoli_HomePage from '../assets/events/HomePage/Rangoli_HomePage.png';
import Dance_HomePage from '../assets/events/HomePage/Dance_HomePage.png';
import Mehndi_HomePage from '../assets/events/HomePage/mehandi_HomePage.png';
import Photography_HomePage from '../assets/events/HomePage/photography_HomePage.png';
import Singing_HomePage from '../assets/events/HomePage/Singing_HomePage.jpeg';
import Footer from './Footer';


function HomePage() {
  return (
    <div>

      <Header isEventPage={true} />
      <div className={styles.homePage}>


        <section className={styles.eventSection}>
          {/* Example for one event; replicate for others */}
          <div className={styles.eventCard}>
            <img src={Art_HomePage} alt="Kalakriti Art Event" className={styles.eventImage} />
            <div className={styles.eventInfo}>
              <h2>Kalakriti Art Event</h2>
              <p>Unleash your creativity and showcase your artistic vision! Submit paintings, sculptures, sketches, digital art, or any art form that ignites your passion. </p>
              <Link to="/art" className={styles.eventLink}>View Event</Link>
            </div>
          </div>
          <div className={styles.eventCard}>
            <img src={Mehndi_HomePage} alt="Kalakriti Art Event" className={styles.eventImage} />
            <div className={styles.eventInfo}>
              <h2>Kalakriti Mehndi Event</h2>
              <p>Dazzle us with your mehndi designs, traditional or contemporary! Win over a national audience.
</p>
              <Link to="/mehndi" className={styles.eventLink}>View Event</Link>
            </div>
          </div>
          <div className={styles.eventCard}>
            <img src={Rangoli_HomePage} alt="Kalakriti Art Event" className={styles.eventImage} />
            <div className={styles.eventInfo}>
              <h2>Kalakriti Rangoli Event</h2>
              <p>Turn floors into art! Submit your rangoli designs & celebrate Indian heritage online.</p>
              <Link to="/rangoli" className={styles.eventLink}>View Event</Link>
            </div>
          </div>
          <div className={styles.eventCard}>
            <img src={Photography_HomePage} alt="Kalakriti Art Event" className={styles.eventImage} />
            <div className={styles.eventInfo}>
              <h2>Kalakriti Photography Event</h2>
              <p>Capture the world! Submit your best photos & share your unique view nationally.</p>
              <Link to="/photography" className={styles.eventLink}>View Event</Link>
            </div>
          </div>
          <div className={styles.eventCard}>
            <img src={Dance_HomePage} alt="Kalakriti Art Event" className={styles.eventImage} />
            <div className={styles.eventInfo}>
              <h2>Kalakriti Dance Event</h2>
              <p>Move us with your talent! Showcase any dance style & compete on a national platform.</p>
              <Link to="/dance" className={styles.eventLink}>View Event</Link>
            </div>
          </div>
          <div className={styles.eventCard}>
            <img src={Singing_HomePage} alt="Kalakriti Art Event" className={styles.eventImage} />
            <div className={styles.eventInfo}>
              <h2>Kalakriti Singing Event</h2>
              <p>Sing your heart out! Submit any genre & win hearts with your voice online.</p>
              <Link to="/singing" className={styles.eventLink}>View Event</Link>
            </div>
          </div>
          {/* Repeat for other events */}
        </section>
      </div>
      <Footer />

    </div>
  );
}
export default HomePage;
