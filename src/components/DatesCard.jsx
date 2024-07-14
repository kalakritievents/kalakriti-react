import React from 'react';
import styles from './ArtEvent.module.css';

const DatesCard = () => {
  return (
    <div className={styles.datesSection}>
      <h1 className={styles.mainTitle}>GRAND SEASON 12</h1>
      <h2 className={styles.sectionTitle}>IMPORTANT DATES 
{/*         <span className={styles.updated}>(Updated)</span> */}
      </h2>
      <div className={styles.datesContainer}>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Last Date To Apply</p>
          <p className={styles.date}>20th July 2024</p>
        </div>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Registration Start Date</p>
          <p className={styles.date}>1st July 2024</p>
        </div>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Result Date</p>
          <p className={styles.date}>25th July 2024</p>
        </div>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Prize Distribution</p>
          <p className={styles.date}>26th july 2024</p>
        </div>
      </div>
    </div>
  );
};

export default DatesCard;
