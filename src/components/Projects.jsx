import "./Projects.css";
import notification from "../assets/notification.png";
import { useState } from "react";

const Projects = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="project-page">
      <div className="page-header">
        <div className="header-text">
          <span>CURRENT SEMESTER</span>
          <h1>My Projects</h1>
        </div>

        <button
          className="add-project"
          onClick={() => setShowCreateModal(true)}
        >
          <span>+</span> Create Project
        </button>

        <button className="notification">
          <img src={notification} alt="" />
        </button>

        <button className="profile">RR</button>
      </div>

      <div className="project-portfolio">
        <div className="portfolio-details">
          <span>Current Semester</span>
          <h2>Your Academic Portfolio</h2>
          <p>
            You can create and manage multiple projects during the semester.
          </p>
        </div>

        <div className="portfolio-count">
          <strong>0</strong>
          <span>Projects</span>
        </div>
      </div>

      <div className="body">
        <p className="body-details">No Current Projects</p>
      </div>

      {showCreateModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowCreateModal(false)}
        >
          <div className="create-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setShowCreateModal(false)}
            >
              X
            </button>
            <h2>Create New Project</h2>
            <p>Start a new academic project for this semester.</p>

            <input type="text" placeholder="Project title" />
            <textarea
              name=""
              placeholder="Project description"
              rows="4"
              id=""
            ></textarea>

            <select name="" id="">
              {" "}
              <option value="">Select department / course</option>
              <option value="CSIT">Bsc.CSIT. Software Engineering</option>
              <option value="other Projects">Other</option>
            </select>

            <select name="" id="">
              <option value="">Request a Supervisor</option>
              <option value="">Dr.Resh Raj Chaudary</option>
              <option value="">Er. Resh Raj Chaudary</option>
              <option value="">Ko ho Resh Raj Chaudary</option>
            </select>

            <div className="modal-actions">
              <button className="cancel" onClick={() => setShowCreateModal(false)}>cancel</button>

              <button className="create-btn">
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
