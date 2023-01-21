import React from 'react'
import Separator from '../../common/social-contact/separator'
import { SkillsData } from '../../data/skills'
import Skillcard from './skillcard'
import "./skills.css"
import { FiCodesandbox } from "react-icons/fi";
//given two map one for fronted and another for backend
const Skills = () => {
  const data=SkillsData;
  return (
    <div className='skills'>
      <Separator/>
      <label className='section-title'>Skills </label>
      <div className='skills-container'></div>  
     {data.map((item)=>{
      return (
        <div className='skill-section'>
          <label className='skills-section-title'>{item.type}</label>
          <div className='skills-list'>
            {item.list.map((skill)=>{
              return<Skillcard skill={skill}/>
              
            })}
          </div>
        </div>
          

      );
        
      })}
    
    </div>
  )
}

export default Skills