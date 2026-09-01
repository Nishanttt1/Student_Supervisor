import React from "react";
import notification from '../assets/notification.png';
import "./Calendar.css";

const Calendar = () => {
  return (
    <div className="calendar">
      <header className="header">
        <div className="title-left">
          <span>DEAD & MEETING</span>
          <h2>Calendar</h2>
        </div>

        <div className="title-right">
          <button className="notification-logo">
            <img src={notification} alt="" />
          </button>

          <button className="profile-logo">RR</button>
        </div>
      </header>
    </div>
  );
};

export default Calendar;
