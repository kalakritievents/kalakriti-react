import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoImage from '../assets/events/HomePage/logo.jpg'; // Adjust file extension if needed

const Header = ({ isEventPage = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <header className={styles.header}>
                <Link to="/" className={styles.logo}>
                    <img src={logoImage} alt="KalaKriti Events" />
                    <span className={styles.logoText}>KalaKriti Events</span>  {/* Add this line */}

                </Link>
                <button className={styles.toggler} onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                <nav className={`${styles.navbar} ${isOpen ? styles.navOpen : ''}`}>
                    <Link to='/#' className={styles.navItem}>Home</Link>
                    <Link to="/about" className={styles.navItem}>About Us</Link>
                    <Link to="/" className={styles.navItem}>Contact Us</Link>
                    {isEventPage && <>
                        <Link to={`/Register`} className={styles.navItem}>Register</Link>
                        <Link to={`/result`} className={styles.navItem}>Results</Link>
                    </>}
                    <div className={styles.search}>
                        <input type="text" placeholder="Search" className={styles.searchInput} />
                        <button className={styles.searchButton}>Search</button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
