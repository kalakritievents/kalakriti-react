
'react';
import styles from './ArtEvent.module.css';

const DatesCard = () => {
  return (
    <div className={styles.datesSection}>
      <h1 className={styles.mainTitle}>GRAND SEASON 14</h1>
      <h2 className={styles.sectionTitle}>IMPORTANT DATES 
{/*         <span className={styles.updated}>(Updated)</span> */}
      </h2>
      <div className={styles.datesContainer}>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Last Date To Apply</p>
          <p className={styles.date}>1stth November 2024</p>
        </div>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Registration Start Date</p>
          <p className={styles.date}>10th October 2024</p>
        </div>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Result Date</p>
          <p className={styles.date}>8th November 2024</p>
        </div>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Prize Distribution</p>
          <p className={styles.date}>10th November 2024</p>
        </div>
      </div>
    </div>
  );
};

export default DatesCard;
