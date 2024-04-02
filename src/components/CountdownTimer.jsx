import React, { useEffect, useState } from 'react';
import './CountdownTimer.css'; // Ensure this is the correct path

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="countdown-timer">
      {/* <div className="time-box">{timeLeft.days || '0'}<span>Days</span></div> */}
      <div className="time-box">{timeLeft.hours || '00'}<span>Hours</span></div>
      <div className="time-box">{timeLeft.minutes || '00'}<span>Minutes</span></div>
      <div className="time-box">{timeLeft.seconds || '00'}<span>Seconds</span></div>
    </div>
  );
};

export default CountdownTimer;
