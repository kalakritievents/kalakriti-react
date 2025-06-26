
'react';
import styles from './ArtEvent.module.css';

const DatesCard = () => {
  return (
    <div className={styles.datesSection}>
      <h1 className={styles.mainTitle}>GRAND SEASON 18</h1>
      <h2 className={styles.sectionTitle}>IMPORTANT DATES 
{/*         <span className={styles.updated}>(Updated)</span> */}
      </h2>
      <div className={styles.datesContainer}>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Last Date To Apply</p>
          <p className={styles.date}>10th July 2025</p>
        </div>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Registration Start Date</p>
          <p className={styles.date}>25th June 2025</p>
        </div>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Result Date</p>
          <p className={styles.date}>12th July 2025</p>
        </div>
        <div className={styles.dateBox}>
          <p className={styles.dateTitle}>Prize Distribution</p>
          <p className={styles.date}>13th July 2025</p>
        </div>
      </div>
    </div>
  );
};

export default DatesCard;
