import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import tape_recorder from "../assets/tape-recorder.png";
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
          <img src={tape_recorder} alt="" />
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
              <NavLink to="/dashboard" className="menu-link">
                <img className="icon" src={dashboard} alt="" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="menu-link">
                <img className="icon" src={folder} alt="" /> My Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/task" className="menu-link">
                <img className="icon" src={clipboard} alt="" /> Tasks
              </NavLink>{" "}
            </li>
            <li>
              <NavLink  to="/submission" className="menu-link">
                <img className="icon" src={resume} alt="" /> Submissions
              </NavLink>{" "}
            </li>
            <li>
              <NavLink  to="/feedback" className="menu-link">
                <img className="icon" src={feedback} alt="" /> Supervisor
                Feedback
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/team" className="menu-link">
                <img className="icon" src={group_chat} alt="" /> Team
              </NavLink>
            </li>
            <li>
              <NavLink  to="/calendar" className="menu-link">
                <img className="icon" src={calendar} alt="" /> Calendar
              </NavLink>{" "}
            </li>
            <li>
              <NavLink  to="/resource" className="menu-link">
                <img className="icon" src={online_resource} alt="" /> Resources
              </NavLink>{" "}
            </li>
            <li>
              <NavLink  to="/notification" className="menu-link">
                <img className="icon" src={notification} alt="" /> Notifications
              </NavLink>{" "}
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

        <div>
          <img className="profile-icon" src={chevron} alt="" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
