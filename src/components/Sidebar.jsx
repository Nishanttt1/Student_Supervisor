import React from "react";
import tapeRecorder from "../assets/tape-recorder.png";
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
import chevron from '../assets/chevron.png'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <img src={tapeRecorder} alt="Tape recorder logo" />
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
              <img className="icon" src={dashboard} alt="" /> Dashbord
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
        <span>Final Year .CS</span>
        <span> <img className="profile-icon" src={chevron} alt="" />
        </span>
      </div>
      </div>

      
    </aside>
  );
};

export default Sidebar;
