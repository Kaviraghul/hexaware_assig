import './home_side_draw.css';
import { useState } from 'react';

export default function HomeSideDraw({ setSelectedSection }) {

  const [activeSection, setActiveSection] = useState("Dashboard");


  const handleSectionClick = (section) => {
    setActiveSection(section);
    setSelectedSection(section);
  };

  return (
    <div className="home-left-draw">
      <div className="home-left-draw-logo">
        <p className="home-left-draw-logo-text">Hexaware <br /> Assignment</p>
      </div>
      <div className="home-left-draw-sections">
        <div
          className={`draw-section ${activeSection === "Dashboard" ? "active" : ""}`}
          onClick={() => handleSectionClick("Dashboard")}
        >
          <p>Dashboard</p>
        </div>
        <div
          className={`draw-section ${activeSection === "Employee" ? "active" : ""}`}
          onClick={() => handleSectionClick("Employee")}
        >
          <p>Employee</p>
        </div>
        <div
          className={`draw-section ${activeSection === "Calendar" ? "active" : ""}`}
          onClick={() => handleSectionClick("Calendar")}
        >
          <p>Calendar</p>
        </div>
        <div
          className={`draw-section ${activeSection === "Inbox" ? "active" : ""}`}
          onClick={() => handleSectionClick("Inbox")}
        >
          <p>Inbox</p>
        </div>
      </div>
    </div>
  );
}
