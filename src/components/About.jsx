import React from 'react';
import styles from './About.module.css'; // Ensure this is the correct path for your CSS file
import Footer from './Footer';
import Header from './Header';

const About = () => {
    return (
        <div>
            <Header/>

            <div className={styles.aboutContainer}>
                <div className={styles.aboutCard}>
                    <h1 className={styles.aboutTitle}>About KalaKriti Events</h1>
                    <p className={styles.aboutText}>Welcome to KalaKriti Events, an artistic journey that transcends boundaries.</p>

                    <h2 className={styles.aboutHeading}>Overview</h2>
                    <p className={styles.aboutText}>KalaKriti Event is a celebration of creativity, a canvas where artists from diverse backgrounds come together to paint a vivid tapestry of human expression. Founded in 2023, our event has evolved into a prestigious platform that showcases art in all its glory.</p>

                    <h2 className={styles.aboutHeading}>Our Mission</h2>
                    <ul className={styles.aboutList}>
                        <li>Foster a thriving art community that encourages artists to explore their potential.</li>
                        <li>Promote inclusivity by embracing various art forms and artists regardless of their background.</li>
                        <li>Engage art enthusiasts and collectors to appreciate and support emerging talents.</li>
                        <li>Ignite conversations, inspire change, and evoke emotions through the power of art.</li>
                    </ul>

                    <h2 className={styles.aboutHeading}>Our History</h2>
                    <p className={styles.aboutText}>KalaKriti Art Event began as a small art exhibition in a local gallery, and it has since grown into an annual extravaganza that draws artists and art lovers from across the globe. Over the years, we've featured thousands of artists and exhibited a wide range of art forms, from classical paintings to cutting-edge digital art.</p>

                    <h2 className={styles.aboutHeading}>Our Vision</h2>
                    <p className={styles.aboutText}>Our vision is to continue expanding the horizons of art, creating a world where creativity knows no bounds. We aspire to be a beacon of inspiration and a catalyst for positive change through art.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
