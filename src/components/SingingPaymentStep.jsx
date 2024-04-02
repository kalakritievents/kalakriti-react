import React, { useEffect } from 'react';
import Header from './Header'; // Adjust the path as necessary
import styles from './PaymentStep.module.css';
import styles1 from './Footer.module.css';
import { Card } from 'react-bootstrap';
// import Footer from './Footer';
import { Link } from 'react-router-dom';


const PaymentStep = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.paymentStepPage}>
            <Header isEventPage={true} />
            <div className={styles.paymentCardsContainer}>
                <Card className={styles.paymentCard}>
                    <Card.Body>
                        <Card.Title>Step 1: Registration</Card.Title>
                        <Card.Text>
                            Click on the "Pay Now" button to initiate your registration process.
                            Complete your payment securely through Razorpay to confirm your entry.
                        </Card.Text>
                        {/* <Button  >Pay Now with Razorpay</Button> */}
                        <Link variant="primary" to="/SingingPaymentgateway" className={styles.razorpayButton}>Pay Now with Razorpay</Link>

                    </Card.Body>
                </Card>
                <Card className={styles.paymentCard}>
                    <Card.Body>
                        <Card.Title>Step 2: Artwork Submission</Card.Title>
                        <Card.Text>
                            After completing your payment, you will be redirected to the Artwork Submission page.
                            Here, you can upload and submit your entries for the event.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            {/* <Footer /> */}





            <div>
                <div id="contact" className={styles1.arch_contact_us_duplicate}>
                    <div id="contact" className={styles1.contactSection}>
                        <div className={styles1.contactContent}>
                            <div className={styles1.contactInfo}>
                                <h1 style={{ "margin": "0px 0px 32px 0px" }}>Contact Us</h1>
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
                            <div className={styles1.contactForm}>
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Contact Number" />
                                <input type="email" placeholder="Email" />
                                <textarea placeholder="Message"></textarea>
                                <button>Send</button>
                                {/* Social Icons */}
                                <div className={styles1.socialIcons}>
                                    <a href="https://www.facebook.com/KalakritiEvent" target="_blank" rel="noopener noreferrer">
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
                <div className={styles1.terms}>
                    Read our <a href="YOUR_TERMS_URL" className={styles1.link}>T&C</a> and <a href="YOUR_PRIVACY_URL" className={styles1.link}>Privacy & Policy</a>.
                </div>

                {/* Copyright Notice */}
                <div className={styles1.copyRight}>
                    <p>COPYRIGHT © 2023 KalaKriti Events</p>
                </div>

            </div>

        </div>
    );
};

export default PaymentStep;
