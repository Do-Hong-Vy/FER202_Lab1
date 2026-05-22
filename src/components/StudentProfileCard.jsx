import { useState } from "react";
import studentProfile from "../data/studentProfile";
import "../styles/profile-card.css";
import "../styles/themes.css";

const StudentProfileCard = () => {
  const { avatar, fullName, studentId, className, major, hobbies } =
    studentProfile;

  const [isOnline, setIsOnline] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleStatus = () => setIsOnline(!isOnline);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleLike = () => setLikes(likes + 1);

  return (
    <div className={`page-wrapper ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div className="card">

        <div className="card-header">
          <div className="avatar-area">
            <img src={avatar} alt={`${fullName}'s avatar`} className="avatar" />
            <span className={`online-badge ${isOnline ? "online" : "offline"}`}>
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
          <div className="header-info">
            <h1 className="name">{fullName}</h1>
            <p className="card-label">Student Profile Card</p>
            <p className="student-id-text"><strong>Student ID:</strong> {studentId}</p>
          </div>
        </div>

        <div className="section">
          <h3 className="section-heading">Information</h3>
          <p className="info-description">
            {fullName} ({studentId}) - Class: {className}, Major: {major}
          </p>
          <p className="info-row">
            <strong>Class:</strong> {className}
          </p>
          <p className="info-row">
            <strong>Major:</strong> {major}
          </p>
        </div>

        <div className="section">
          <h3 className="section-heading">Hobbies</h3>
          <div className="hobbies-list">
            {hobbies.map((hobby, index) => (
              <span key={index} className="hobby-tag">
                {hobby}
              </span>
            ))}
          </div>
        </div>

        <div className="section">
          <h3 className="section-heading">Current Student Status</h3>
          <div className={`status-box ${isOnline ? "status-online" : "status-offline"}`}>
            <strong>{isOnline ? "Online" : "Offline"}</strong>
            {" - "}
            Student is {isOnline ? "available" : "unavailable"} now.
          </div>
          <div className="status-actions">
            <button className="btn-switch" onClick={toggleStatus}>
              Switch to {isOnline ? "Offline" : "Online"}
            </button>
            <button className="btn-darkmode" onClick={toggleTheme}>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        <div className="like-section">
          <p className="like-label">LIKE COUNTER</p>
          <p className="like-number">{likes}</p>
          <button className="btn-like" onClick={handleLike}>
            Like (+1)
          </button>
        </div>

      </div>
    </div>
  );
};

export default StudentProfileCard;
