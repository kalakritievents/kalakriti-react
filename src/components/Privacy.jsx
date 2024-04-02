import React from 'react';
import styles from './Privacy.module.css'; // Ensure this is the correct path for your CSS file

const Privacy = () => {
    return (
        <div className={styles.privacyContainer}>
            <h1 className={styles.heading}>Privacy and Policy</h1>

            <h2 className={styles.subHeading}>Refund Policy</h2>
            <p className={styles.text}>The participation fee, including the delivery charges, is non-refundable. Once you participate and your contestant ID is generated, it will be forwarded to the judges for evaluation. Refunds are not available once this process begins.</p>

            <h2 className={styles.subHeading}>Pricing</h2>
            <h3 className={styles.subHeadingSmall}>Participation Fee</h3>
            <p className={styles.text}>The participation fee for the KalaKriti Art Contest is Rs. 499, which includes delivery charges, processing fees, and applicable taxes.</p>

            <h2 className={styles.subHeading}>Cancellation</h2>
            <h3 className={styles.subHeadingSmall}>Cancellation Policy</h3>
            <p className={styles.text}>Cancellations are not available once you have participated and your contestant ID has been generated. Once your contestant ID is generated, your submission will be forwarded to the judges for evaluation.</p>
        </div>
    );
};

export default Privacy;
