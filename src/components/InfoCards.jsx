import React from 'react';
import { Link } from 'react-router-dom';
import './InfoCards.css'; // Make sure this path is correct

const InfoCards = () => {
    // const navigate = useNavigate(); // This replaces useHistory

    return (
        <div className="info-cards-container">
            <div className="info-card">
                <h2>NATIONAL ART CONTEST</h2>
                <div className="info-content">
                    <h3>Eligibility</h3>
                    <p>This NAC Contest is a national level Contest Conducted by GOVERNMENT OF INDIA DEPARTMENT OF ART & CULTURE MINISTRY, for all the students starting from the classes 5th to P.H.D.</p>
                    <h3>Level Of Competition</h3>
                    <p>Pre-School - Easy</p>
                    <p>Children - Medium</p>
                    <p>Adult - Medium/Hard</p>
                </div>
            </div>

            <div className="info-card">
                <h2>Examination Details</h2>
                <div className="info-content">
                    <h3>Registration Mode:</h3>
                    <p>Online</p>
                    <h3>Exam Mode:</h3>
                    <p>Online From Home</p>
                    {/* <button onClick={() => navigate('/ArtRegister')}>REGISTER NOW</button> */}
                    <button>
                    <Link to="/ArtRegister" style={{ "textDecoration": "none" }}>REGISTER NOW</Link>
                    </button>

                </div>
            </div>
        </div>
    );
};


export default InfoCards;
