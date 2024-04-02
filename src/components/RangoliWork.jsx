import React, { useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import styles from "./ArtWork.module.css"; // Ensure this is the correct path
import Header from "./Header";
// import Footer from "./Footer";

// Dynamically import images based on naming convention. Only include what you actually have.
const artworkImports = [
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay1.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay2.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay3.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay4.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay5.jpeg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay6.jpeg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay7.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay8.png'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay9.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay10.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay11.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay12.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay13.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay14.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay15.jpg'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay16.webp'),
    require('../assets/events/RangoliEvent/ArtWorks/ArtworkDay17.jpeg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay18.jpeg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay19.jpeg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay20.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay21.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay22.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay23.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay24.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay25.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay26.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay27.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay28.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay29.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay30.jpg'),
    require('../assets/events/ArtEvent/ArtWorks/ArtworkDay31.jpg'),

];

const randomTitles = [
    "Aarav Patel",
    "Aaradhya Reddy",
    "Amit Shah",
    "Aditi Gupta",
    "Arjun Kumar",
    "Ananya Singh",
    "Aakash Verma",
    "Akshay Sharma",
    "Bhavya Yadav",
    "Bhavesh Singh",
    "Chirag Chauhan",
    "Chetna Patel",
    "Dhruv Desai",
    "Divya Mishra",
    "Deepak Kumar",
    "Diya Gupta",
    "Esha Singh",
    "Eklavya Sharma",
    "Firoz Khan",
    "Fatima Sheikh",
    "Gaurav Gupta",
    "Gitanjali Devi",
    "Hemant Kumar",
    "Hina Sharma",
    "Ishan Choudhary",
    "Ishika Patel",
    "Jay Patel",
    "Jiya Singh",
    "Karan Sharma",
    "Kavya Reddy"
    // Add more random titles up to the number of available artworks.
];

const artworks = artworkImports.map((src, index) => ({
    src, // Use the imported image directly.
    title: randomTitles[index % randomTitles.length], // Cycle through titles if less than images.
    date: `0${(index + 1)}/03/2024`.slice(-10) // Format the date.
}));

const ArtWork = () => {
    /*useEffect(() => {
        window.scrollTo(0, 0);
    }, []);*/

    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100); // Adjust delay time as needed, 100ms is just an example
        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts before the timeout is completed
    }, []);
    

    return (
        <div>

            <Header isEventPage={true} />

            <div className={styles.artEventPage}>
                <h1 className={styles.titleArtworks}>Rangoli Of The Day</h1>
                <CardGroup className={styles.dailyArtworks}>
                    {artworks.map((artwork, index) => (
                        <Card key={index} className={styles.cardDaily}>
                            <Card.Img variant="top" src={artwork.src} />
                            <Card.Body>
                                <Card.Title>{artwork.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <small>{artwork.date}</small>
                            </Card.Footer>
                        </Card>
                    ))}
                </CardGroup>
            </div>
            {/* <Footer /> */}

        </div>
    );
};

export default ArtWork;
