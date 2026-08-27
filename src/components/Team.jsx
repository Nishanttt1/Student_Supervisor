import './Team.css';

const Team = () => {
  return (
    <div className="team">
      <header className="team-header">
        <div className="team-details">
          <span>COLLABORATION</span>
          <h1>Project Team</h1>
        </div>
      </header>
      <section className="team-empty-state">
        <div className="team-empty-icon">+</div>
        <h2>Build your project team</h2>
        <p>Create a project first, then invite members to collaborate with you.</p>
      </section>
    </div>
  )
}

export default Team
