import { useState } from "react";
import "./App.css";

const studentInfo = {
  avatar: "src/assets/avt.jpg",
  fullName: "Đỗ Hồng Vỹ",
  studentId: "HE190507",
  className: "SE2009",
  major: "Software Engineering",
  hobbies: ["Robotics & IoT", "Programming", "Traveling"],
};

const App = () => {
  const { avatar, fullName, studentId, className, major, hobbies } =
    studentInfo;

  const [isOnline, setIsOnline] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [animateLike, setAnimateLike] = useState(false);

  const toggleStatus = () => setIsOnline(!isOnline);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleLike = () => {
    setLikes(likes + 1);
    setAnimateLike(true);
    setTimeout(() => setAnimateLike(false), 600);
  };

  return (
    <div className={`app-wrapper ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div className="profile-container">
        <div className="profile-card">
          <div className="avatar-wrapper">
            <div className="avatar-ring"></div>
            <img src={avatar} alt={`${fullName}'s Avatar`} className="avatar" />
            <div className={`status-badge ${isOnline ? "online" : "offline"}`}>
              <span className="status-dot"></span>
            </div>
          </div>

          <div className="header-section">
            <h1 className="name">{fullName}</h1>
            <p className="subtitle">{major}</p>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Student ID</span>
              <span className="info-value">{studentId}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Class</span>
              <span className="info-value">{className}</span>
            </div>
          </div>

          <div className="hobbies-section">
            <h3 className="section-title">Hobbies</h3>
            <ul className="hobbies-list">
              {hobbies.map((hobby, index) => (
                <li key={index} className="hobby-tag">
                  {hobby}
                </li>
              ))}
            </ul>
          </div>

          <div className="button-section">
            <button
              className={`btn btn-status ${isOnline ? "online" : "offline"}`}
              onClick={toggleStatus}
            >
              {isOnline ? "Online" : "Offline"}
            </button>
            <button className="btn btn-theme" onClick={toggleTheme}>
              {isDarkMode ? "Light" : "Dark"} Mode
            </button>
          </div>

          <div className="like-section">
            <p className="like-count">
              {likes} {likes === 1 ? "Like" : "Likes"}
            </p>
            <button
              className={`btn-like ${animateLike ? "animate" : ""}`}
              onClick={handleLike}
            >
              <p>Like</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
