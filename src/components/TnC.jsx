import React from 'react';
import styles from './TnC.module.css'; // Ensure this is the correct path for your CSS file

const TnC = () => {
    return (
        <div className={styles.tncContainer}>
            <h1 className={styles.heading}>Terms & Conditions (T&C)</h1>

            <h2 className={styles.subHeading}>Copyright Terms and Conditions</h2>
            <p className={styles.text}>By submitting art images, you agree that the submitted artwork is your original creation, and you own all copyright rights to it. Kalakriti Art Event will not be held responsible for any copyright issues arising from submitted artwork. Participants are encouraged to avoid any copyright infringement issues. Participants found guilty of copyright infringement may face necessary actions under Section 13 of the Copyright Act, 1957.</p>

            <h2 className={styles.subHeading}>Participation Agreement</h2>
            <p className={styles.text}>By participating in the KalaKriti Art Contest, you acknowledge that you have read, understood, and accepted all the terms and conditions. You agree to abide by the decisions made by the jury of the KalaKriti Art Contest. Participation fees paid are non-refundable, regardless of the contest results.</p>

            <h2 className={styles.subHeading}>Image Usage Consent</h2>
            <p className={styles.text}>By participating in the KalaKriti Art Contest, you grant permission for your submitted images to be posted on the KalaKriti Art Contest website. Participants are responsible for checking the contest results, which will be declared on the official website.</p>

            <h2 className={styles.subHeading}>Subscription to Newsletter</h2>
            <p className={styles.text}>By participating in KalaKriti Art Contest events, visitors agree to subscribe to the KalaKriti Art Contest Newsletter. Subscribers will receive updates on art-related information and programs via email and phone number.</p>

            <h2 className={styles.subHeading}>Shipping</h2>
            <h3 className={styles.subHeadingSmall}>Delivery Charges</h3>
            <p className={styles.text}>We charge a flat fee of Rs. 499 for delivery, which includes processing fees, delivery charges, and applicable taxes (including GST). This fee is non-refundable and covers the cost of processing your participation.</p>
        </div>
    );
};

export default TnC;
