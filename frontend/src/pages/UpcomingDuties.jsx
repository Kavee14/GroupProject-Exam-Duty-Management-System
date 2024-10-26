import React from 'react';
import './UpcomingDuties.css';

const UpcomingDuties = () => {
  return (
    <div className="upcoming-duties">
      <h4 className="Title"> Upcoming Duties</h4>
      <div className="duty-box blue-box"> {/* First box with blue background */}
        <div className="duty-date">
          <span className="date-number">09</span>
          <div className="day-name">Tue</div>
        </div>
        <div className="duty-details">
          <p>8:00 a.m. - 11:00 a.m.</p>
          <p>COM123</p>
          <p>Prof. Alwattagoda Premadasa Auditorium</p>
        </div>
      </div>

      <div className="duty-box white-box"> {/* Second box with white background */}
        <div className="duty-date">
          <span className="date-number">12</span>
          <div className="day-name">Fri</div>
        </div>
        <div className="duty-details">
          <p>8:00 a.m. - 11:00 a.m.</p>
          <p>COM132</p>
          <p>Prof. Alwattagoda Premadasa Auditorium</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDuties;
