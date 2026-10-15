import { useState } from "react";
import "./Team.css";
import notification from "../assets/notification.png";

const Team = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [members, setMembers] = useState([
    {
      initials: "RR",
      name: "Resh Raj",
      role: "Team Leader · Backend",
      status: "Online",
      color: "purple",
    },
    {
      initials: "AK",
      name: "Anish K.",
      role: "Frontend Developer",
      status: "Online",
      color: "cyan",
    },
    {
      initials: "ST",
      name: "Suman T.",
      role: "AI/ML Developer",
      status: "Away",
      color: "green",
    },
    {
      initials: "PM",
      name: "Prabin M.",
      role: "Database & Documentation",
      status: "Offline",
      color: "pink",
    },
  ]);
  const [inviteForm, setInviteForm] = useState({ name: "", role: "" });

  const handleInvite = (event) => {
    event.preventDefault();
    const name = inviteForm.name.trim();
    const role = inviteForm.role.trim();

    if (!name || !role) return;

    const initials = name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    setMembers((currentMembers) => [
      ...currentMembers,
      { initials, name, role, status: "Pending", color: "orange" },
    ]);
    setInviteForm({ name: "", role: "" });
    setShowInviteModal(false);
  };

  return (
    <div className="team">
      <header className="header">
        <div className="title-left">
          <span>COLLABORATION</span>
          <h1>Project Team</h1>
        </div>

        <div className="title-right">
          <button
            className="add-project"
            onClick={() => setShowInviteModal(true)}
          >
            <span>+</span>Invite Member
          </button>

          <button className="notification-logo" aria-label="Notifications">
            <img src={notification} alt="Notifications" />
          </button>

          <button className="profile-logo" aria-label="Profile">
            RR
          </button>
        </div>
      </header>

      <section className="team-panel">
        <div className="team-panel-heading">
          <div>
            <h2>AI-Based Network Monitoring System</h2>
            <p>{members.length} members · Dr. Sarah Sharma as supervisor</p>
          </div>
          <span className="member-count">{members.length} members</span>
        </div>

        <div className="member-grid">
          {members.map((member) => (
            <article
              className="member-row"
              key={`${member.name}-${member.role}`}
            >
              <div className={`member-avatar ${member.color}`}>
                {member.initials}
              </div>
              <div className="member-details">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
              <span className={`member-status ${member.status.toLowerCase()}`}>
                {member.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      {showInviteModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowInviteModal(false)}
        >
          <form
            className="invite-modal"
            onSubmit={handleInvite}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="close-modal"
              aria-label="Close invite form"
              onClick={() => setShowInviteModal(false)}
            >
              ×
            </button>
            <h2>Invite a team member</h2>
            <p>Add a collaborator to your project team.</p>

            <label>
              Name
              <input
                type="text"
                value={inviteForm.name}
                onChange={(event) =>
                  setInviteForm({ ...inviteForm, name: event.target.value })
                }
                placeholder="e.g. Aayush P."
                required
              />
            </label>
            <label>
              Role
              <input
                type="text"
                value={inviteForm.role}
                onChange={(event) =>
                  setInviteForm({ ...inviteForm, role: event.target.value })
                }
                placeholder="e.g. UI/UX Designer"
                required
              />
            </label>

            <div className="invite-actions">
              <button
                type="button"
                className="cancel-invite"
                onClick={() => setShowInviteModal(false)}
              >
                Cancel
              </button>
              <button type="submit" className="send-invite">
                Send Invite
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Team;
