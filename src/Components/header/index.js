import React, { useState } from 'react'
import "./header.css"
import Mobile from './mobile'
import Web from './web'
import { AiFillAppstore } from "react-icons/ai";

export const Header = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='header'>
      <div className='logo'>
        <a href='#home'>
        <img className='logo-img' src='https://avatars.githubusercontent.com/u/112477961?v=4'/>
        </a> 
      </div>
      <div className='menu'>
         <div className='web-menu'> 
         <Web/>
          </div>
         <div className='mobile-menu'>
          <div onClick={()=>setIsOpen(!isOpen)}>
          <AiFillAppstore className='menu-icon'/>
          </div>
         {isOpen &&  <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
         </div>
      </div>
      
    </div>
  )
}
