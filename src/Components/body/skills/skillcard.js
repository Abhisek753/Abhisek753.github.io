import React from 'react'
import "./skill-card.css"

const Skillcard = ({skill}) => {
  return (
    <div className='skill-card'>
        <div className='skill-icon'>{skill.icon}</div>
        <label className='skill-name'>{skill.name}</label>
        
    </div>
  )
}

export default Skillcard