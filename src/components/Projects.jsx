import React from 'react'
import './Projects.css';
import notification from "../assets/notification.png";

const Projects = () => {
  return (
    <div className='project-page'>

        <div className='page-header'>
            <div className='header-text'>
                <span>CURRENT SEMESTER</span>
                <h1>My Projects</h1>
            </div>
            <button className='add-project'><span>+</span> Create Project</button>

            <button className='notification'><img src={notification} alt="" /></button>

            <button className='profile'>RR</button>

        </div>

    </div>

  )
}

export default Projects
