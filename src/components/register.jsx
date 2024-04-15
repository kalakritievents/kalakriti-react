import React, { useEffect } from "react";
import { Link } from 'react-router-dom'; // Ensure you have React Router installed
import Header from './Header'; // Adjust the import path as needed
import Footer from './Footer'; // Adjust the import path as needed
import styles from './Register.module.css'; // Path to your CSS file for this component

const events = [
    { name: 'Art Event', basepath: '/art' },
    { name: 'Mehandi Event', basepath: '/Mehndi' },
    { name: 'Rangoli Event', basepath: '/rangoli' },
    { name: 'Photography Event', basepath: '/photography' },
    { name: 'Dance Event', basepath: '/dance' },
    { name: 'Singing Event', basepath: '/singing' },
];

const Register = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100); // Adjust delay time as needed, 100ms is just an example
        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts before the timeout is completed
    }, []);

    
    return (
        <div className={styles.registerPage}>
            <div style={{ "width": "100%" }}>

                <Header isEventPage={true} />
            </div>
            <div className={styles.eventsContainer}>
                {events.map((event, index) => (
                    <div key={index} className={styles.eventCard}>
                        <h3>{event.name}</h3>
                        <Link to={`${event.basepath}Register`} className={styles.registerButton}>Register</Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Register;
