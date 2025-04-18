// import React from 'react';
import React from "react";
import styles from './Footer.module.css';
import { Accordion } from 'react-bootstrap'; // Ensure React Bootstrap is installed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from "react-router-dom";
// import styles from './FaqSection.module.css'; // Your CSS module

const Footer = () => {


  return (
    <div>
      <div className={styles.faq}>
        <h3>Have Any Questions?</h3>
        <h1>FAQ's</h1>
        <Accordion defaultActiveKey="0" className="accordion-flush">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who can participate?</Accordion.Header>
            <Accordion.Body>
              Everyone can participate all over India whether He/She is a beginner or professional artist. All are welcome.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What types of Arts can I submit?</Accordion.Header>
            <Accordion.Body>
              You can submit any artwork. There is no specific theme, type, medium, and size of artworks.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What If I paid the fees but unable to upload payment screenshot or artwork in submission form?</Accordion.Header>
            <Accordion.Body>
              If you are unable to upload payment screenshot or artwork then please open google chrome directly from you mobile or computer and then search our website name kalakritievents.com, go the respective page of submission.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How can I participate?</Accordion.Header>
            <Accordion.Body>
              Please click on REGISTER button and complete both the steps: STEP 1- Payment procedure, STEP 2- Upload your Art Images by filling the form.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>On what basis artworks will be judged? Who are the judges?</Accordion.Header>
            <Accordion.Body>
              Winners will be announced on the basis of art skills decided by well-known professional and experienced juries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Will my artwork be published on social media?</Accordion.Header>
            <Accordion.Body>
              Yes, Your Artwork will be published on our Instagram also on our official website.
            </Accordion.Body>
          </Accordion.Item>
          {/* Add more items here */}
          <Accordion.Item eventKey="6">
            <Accordion.Header>When will I get my Participation Certificate and Free copy of E-Magazine?</Accordion.Header>
            <Accordion.Body>
              You will receive your National Level E-Certificate of Participation within 48 hours after the artwork submission on your registered email address.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>What is the result date?</Accordion.Header>
            <Accordion.Body>
              The result date for Season 3 will be announced soon on our Instagram page and this same website.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>If I have any problem how can I contact you?</Accordion.Header>
            <Accordion.Body>
              If you have any problems, you can contact us on our email id or Instagram. Also, WhatsApp support is available.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Will I get any confirmation message?</Accordion.Header>
            <Accordion.Body>
              Yes, we will send you a confirmation e-mail with your unique contestant ID and E-Certificate within 48 hrs after registration and submission of your artwork.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>How many Delivery days for shipping?</Accordion.Header>
            <Accordion.Body>
              Certificates and trophies will be dispatched within 5-7 working days from the date of payment.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
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
                <strong>Address:</strong> Kalakriti Art Event,India<br />
                <strong>Phone:</strong> +91 7218559884<br />
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
}

export default Footer;
