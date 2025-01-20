import React from 'react';
import Header from './Header'; // Adjust the import path as needed
import Footer from './Footer'; // Adjust the import path as needed
import { Card, Dropdown, DropdownButton } from 'react-bootstrap'; // Ensure React Bootstrap is installed
import styles from './ResultPage.module.css'; // Path to your CSS file for this component

const events = [
    { name: 'Art Event', basepath: '/art', seasons: 15 },
    { name: 'Mehandi Event', basepath: '/mehandi', seasons: 15 },
    { name: 'Rangoli Event', basepath: '/rangoli', seasons: 15 },
    { name: 'Photography Event', basepath: '/photography', seasons: 15 },
    { name: 'Dance Event', basepath: '/dance', seasons: 8 },
    { name: 'Singing Event', basepath: '/singing', seasons: 7 },
];

const ResultPage = () => {
    // Function to handle navigation. Adjust as needed.
    const handleSelect = (eventKey, eventPath) => {
        window.location.href = `/result${eventPath}_season${eventKey}.html`;
    };

    return (
        <div className={styles.resultPage}>
            <div style={{ "width": "100%" }}>
                <Header isEventPage={true} />
            </div>            
            <div className={styles.resultsContainer}>
                {events.map((event, index) => (
                    <Card key={index} className={styles.resultCard}>
                        <Card.Body>
                            <Card.Title>{event.name} Results</Card.Title>
                            <DropdownButton id={`dropdown-${index}-button`} title="View Results" variant="primary">
                                {[...Array(event.seasons)].map((x, i) => (
                                    <Dropdown.Item key={i} onClick={() => handleSelect(i + 1, event.basepath)}>
                                        {`Season ${i + 1}`} {i === event.seasons - 1 ? <span className={styles.newlabel}>New</span> : null}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default ResultPage;


                            
