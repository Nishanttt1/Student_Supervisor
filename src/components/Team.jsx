import "./Team.css";
import notification from "../assets/notification.png";

const Team = () => {
  return (
    <div className="team">
      <header className="team-header">
        <div className="team-details">
          <span>COLLABORATION</span>
          <h1>Project Team</h1>
        </div>

        <div>
          <button className="notification">
            <img src={notification} alt="" />
          </button>

          <button className="profile">RR</button>
        </div>
      </header>
      <section className="team-empty-state">
        <div className="team-empty-icon">+</div>
        <h2>Build your project team</h2>
        <p>
          Create a project first, then invite members to collaborate with you.
        </p>
      </section>
    </div>
  );
};

export default Team;
