import React from 'react'
import "./mobile.css"
import {  HiUser, HiXCircle} from "react-icons/hi";
import { AiFillCalendar, AiOutlineLaptop, AiOutlineWechat } from 'react-icons/ai';
import { FaElementor } from "react-icons/fa";


const Mobile = ({isOpen,setIsOpen}) => {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
      <HiXCircle/>
      </div>
      <div className='mobile-options'>
      <div className='mobile-option'>
           <a href='#projects'>
              <AiFillCalendar className='option-icon' />Projects
           </a>
        </div>
        <div className='mobile-option'>
           <a href='#skills'>
           <AiOutlineLaptop className='option-icon'/>Skills
            
           </a>
        </div>
        <div className='mobile-option'>
           <a href='#about'>
           <HiUser className='option-icon'/>About

            
           </a>
        </div>
        <div className='mobile-option'>
           <a href='#contact'>
            <AiOutlineWechat className='option-icon'/>Contact
            
           </a>
        </div>
        <div className='mobile-option'>
           <a href='#resume'>
            <FaElementor className='option-icon'/>Resume
            
           </a>
        </div>
      </div>
    
    </div>
  )
}

export default Mobile