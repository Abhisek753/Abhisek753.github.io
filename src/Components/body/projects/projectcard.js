import React from 'react'
import "./project-card.css"
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({project}) => {
  return (
    <div className='project-card'>
        <div className='project-info'>
            <label className='project-title'>{project.title}</label>
            <div className='project-links'>
                {project.demo&&(<a className='project-link' href={project.demo}>
                    <div className='link-button'>
                       <div style={{display:"flex",alignItems:"center"}}> <FaGlobe/>Demo</div>
                    </div>
                    </a>
                        )}
                 {project.github&&(<a className='project-link' href={project.github}>
                     <div className='link-button'>
                    <i class="devicon-github-original colored"></i>Github
                    </div>
                    </a>
                    )}
            </div>
            <p className='project-des'>{project.about}</p>
            <div className='project-tags'>
                    {project.tags.map((tag)=>{
                        return (
                            <label className='tag'>{tag}</label>
                        )
                    })}
            </div>
        </div>
        <img src={project.image} className="project-photo"/>

    </div>
  )
}

export default ProjectCard