import React, { useState } from 'react';
import Header from './Header';
import './ArtPaymentGateway.css';
import { Link } from "react-router-dom";
import styles from './Footer.module.css';


const ArtPaymentGateway = () => {
    const [name, setName] = useState('');
    const [artworkCount, setArtworkCount] = useState(1);
    const [amount, setAmount] = useState(150); // Default amount for one artwork
    const [paymentLink, setPaymentLink] = useState('https://rzp.io/l/wrSuQTYpGb'); // Default payment link

    const handleArtworkCountChange = (event) => {
        const count = parseInt(event.target.value, 10);
        setArtworkCount(count);

        // Calculate amount based on artwork count
        switch (count) {
            case 1:
                setAmount(150);
                setPaymentLink('https://rzp.io/l/wrSuQTYpGb');
                break;
            case 2:
                setAmount(220);
                setPaymentLink('https://rzp.io/l/buhAykqvkD');
                break;
            case 3:
                setAmount(320);
                setPaymentLink('https://rzp.io/l/xkV1b6cxF');
                break;
            case 4:
                setAmount(420);
                setPaymentLink('https://rzp.io/l/Y3Tmuko');
                break;
            case 5:
                setAmount(520);
                setPaymentLink('https://rzp.io/l/BhALDXl');
                break;
            case 6:
                setAmount(620);
                setPaymentLink('https://rzp.io/l/C6QHZVaR');
                break;
            case 7:
                setAmount(720);
                setPaymentLink('https://rzp.io/l/sD5S3to');
                break;
            case 8:
                setAmount(820);
                setPaymentLink('https://rzp.io/l/dEv9Q30tN');
                break;
            case 9:
                setAmount(920);
                setPaymentLink('https://rzp.io/l/FGazPupF');
                break;
            case 10:
                setAmount(999);
                setPaymentLink('https://rzp.io/l/s2Dz4KX0bC');
                break;
            default:
                setAmount(150);
                setPaymentLink('https://rzp.io/l/wrSuQTYpGb');
        }
    };

    const handlePayment = () => {
        window.open(paymentLink);
    };

    return (
        <div>
            <Header />
            <div className="payment-container">
            <h2>Submit Your Payment</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="input-field" />
            </div>
            <div>
                <label htmlFor="artworkCount">Number of Artworks:</label>
                <input type="number" id="artworkCount" min="1" max="10" value={artworkCount} onChange={handleArtworkCountChange} className="input-field" />
                
            </div>
            <div>
                <label htmlFor="amount">Amount to be Paid:</label>
                <input type="text" id="amount" value={`Rs.${amount}`} readOnly className="input-field" />
            </div>
            <button onClick={handlePayment} className="pay-now-btn">Pay Now</button>
        </div>

        <div id="contact" className={styles.arch_contact_us_duplicate}>
        <div id="contact" className={styles.contactSection}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h1 style={{ "margin": "0px 0px 32px 0px"}}>Contact Us</h1>
              <h3>KalaKriti Art Event</h3>
              <p>We're thrilled to hear from you and assist you with any inquiries you may have about the Kalakriti Art Event. Please don't hesitate to reach out to us using the contact information provided below:</p>
              <address>
              <br />
                <strong>Address:</strong> Kalakriti Art Event, Mumbai-India<br />
                <strong>Phone:</strong> +91 9209452285<br />
                <strong>Email:</strong> kalakritievents07@gmail.com
              <br />
              <br />
              </address>
              <p>Our dedicated team is here to assist you and ensure you have a memorable experience at the Kalakriti Art Event. Feel free to get in touch, and we'll respond to your inquiries as soon as possible.</p>
              <p>Thank you for your interest in Kalakriti Art Event!</p>
            </div>
            <div className={styles.contactForm}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Contact Number" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button>Send</button>
              {/* Social Icons */}
              <div className={styles.socialIcons}>
                <a href="https://www.facebook.com/KalakritiEvent" target="_blank" style={{"color":"rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1))"}} rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/kalakriti_art_events/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Terms and Conditions & Privacy Policy Links */}
      <div className={styles.terms}>
        Read our <Link to="/TnC" className={styles.link}>T&C</Link> and <Link to="/Privacy" className={styles.link}>Privacy & Policy</Link>.
        

      </div>

      {/* Copyright Notice */}
      <div className={styles.copyRight}>
        <p>COPYRIGHT © 2023 KalaKriti Events</p>
      </div>
            

        </div>
    );
};

export default ArtPaymentGateway;
