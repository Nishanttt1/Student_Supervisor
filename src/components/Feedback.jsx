import React from "react";
import notification from "../assets/notification.png";
import "./Feedback.css";

const Feedback = () => {
  const feedbackItems = [
    {
      title: "System Design",
      message:
        "Database design is good, but improve the relationship between users and project members before final implementation.",
      status: "Revision",
      score: "8/10",
      tone: "red",
    },
    {
      title: "Requirements Analysis",
      message:
        "Excellent documentation. The use case diagrams are thorough and well structured.",
      status: "Approved",
      score: "9/10",
      tone: "green",
    },
    {
      title: "Project Proposal",
      message:
        "Please clarify the scope of AI integration and define measurable evaluation criteria.",
      status: "Query",
      score: "9/10",
      tone: "orange",
    },
  ];

  return (
    <div className="feedback">
      <header className="header">
        <div className="title-left">
          <span> ACADEMIC PREVIEW</span>
          <h2>Supervisor Feedback</h2>
        </div>
        <div className="title-right">
          <button className="notification-logo">
            <img src={notification} alt="" />
          </button>

          <button className="profile-logo">RR</button>
        </div>
      </header>

      <main className="feedback-list" aria-label="Supervisor feedback">
        {feedbackItems.map((item) => (
          <article className="feedback-card" key={item.title}>
            <div className={`feedback-icon ${item.tone}`} aria-hidden="true">
              <span />
            </div>

            <div className="feedback-content">
              <h3>{item.title}</h3>
              <p className="feedback-author">
                Dr. Sarah Sharma · Academic Supervisor
              </p>
              <p className="feedback-message">{item.message}</p>
              <p className="feedback-actions">
                Feedback history · Reply / acknowledge
              </p>
            </div>

            <div className="feedback-summary">
              <span className={`feedback-status ${item.tone}`}>
                {item.status}
              </span>
              <span className="feedback-score">{item.score}</span>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Feedback;
