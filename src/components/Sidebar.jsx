import React from "react";
import "./Sidebar.css";
import calendar from "../assets/calendar.png";
import clipboard from "../assets/clipboard.png";
import folder from "../assets/folder.png";
import group_chat from "../assets/group-chat.png";
import resume from "../assets/resume.png";
import notification from "../assets/notification.png";
import feedback from "../assets/feedback.png";
import dashboard from "../assets/dashboard.png";
import online_resource from "../assets/online-resource.png";
import chevron from "../assets/chevron.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m12 3 7 4.1v8L12 19l-7-3.9v-8L12 3Z" />
            <path d="m5 7.1 7 4 7-4M12 11v8" />
          </svg>
        </div>

        <div>
          <h2>AcademiQ</h2>
          <span>PROJECT HUB</span>
        </div>
      </div>

      <p className="sidebar-title">STUDENT PORTAL</p>

      <nav>
        <div className="menu-item">
          <ul>
            <li>
              {" "}
              <img className="icon" src={dashboard} alt="" /> Dashboard
            </li>
            <li>
              <img className="icon" src={folder} alt="" /> My Projects
            </li>
            <li>
              <img className="icon" src={clipboard} alt="" /> Tasks
            </li>
            <li>
              <img className="icon" src={resume} alt="" /> Submissions
            </li>
            <li>
              <img className="icon" src={feedback} alt="" /> Supervisor Feedback
            </li>
            <li>
              <img className="icon" src={group_chat} alt="" /> Team
            </li>
            <li>
              <img className="icon" src={calendar} alt="" /> Calendar
            </li>
            <li>
              <img className="icon" src={online_resource} alt="" /> Resources
            </li>
            <li>
              <img className="icon" src={notification} alt="" /> Notifications
            </li>
          </ul>
        </div>
      </nav>

      <div className="profile">
        <div className="profile-img">RR</div>

        <div className="profile-data">
          <strong>Resh Raj</strong>
          <span>Final Year · CS</span>
        </div>

        <div><img className="profile-icon" src={chevron} alt="" /></div>
      </div>
    </aside>
  );
};

export default Sidebar;
