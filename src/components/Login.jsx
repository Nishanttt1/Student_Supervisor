import React from "react";
import { useNavigate } from "react-router-dom";
import tape_recorder from "../assets/tape-recorder.png";
import dashboard_img from "../assets/content/dashboard_img.png";
import notifi_img from "../assets/content/notifi_img.png";
import projects_img from "../assets/content/projects_img.png";
import tasks_img from "../assets/content/tasks_img.png";
import submission_img from "../assets/content/submission_img.png";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="header-left">
          <img src={tape_recorder} alt="AcademiQ Logo" className="login-logo" />
          <div className="title">
            <h1>AcademiQ</h1>
            <span>PROJECT HUB</span>
          </div>
        </div>

        <div className="header-right">
          <button className="sign-up">Sign Up for free</button>

          <button className="login" type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </header>

      <main className="login-container">
        {/* LEFT SIDE */}
        <div className="container-left">
          <h2>
            Manage. Collaborate.
            <br />
            Build. Succeed.
          </h2>

          <p>
            A smarter way to manage academic projects, collaborate with your
            team, and stay on track from proposal to completion.
          </p>

          <div className="login-buttons">
            <button className="log" type="button" onClick={handleSignIn}>
              Login
            </button>

            <button className="sign">Sign Up</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="container-right">
          <div className="container-images">
            <img
              src={notifi_img}
              alt="Notifications"
              className="screen notification-screen"
            />

            <img
              src={dashboard_img}
              alt="Dashboard"
              className="screen dashboard-screen"
            />

            <img
              src={projects_img}
              alt="Projects"
              className="screen projects-screen"
            />

            <img src={tasks_img} alt="Tasks" className="screen tasks-screen" />

            <img
              src={submission_img}
              alt="Submissions"
              className="screen submission-screen"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
