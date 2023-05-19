import React from 'react'
import "./mobile.css"
import {  HiUser, HiXCircle} from "react-icons/hi";
import { AiFillCalendar, AiOutlineLaptop, AiOutlineWechat } from 'react-icons/ai';
import { FaElementor } from "react-icons/fa";
import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const Mobile = ({isOpen,setIsOpen}) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
      <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
       </Button>
      <HiXCircle/>

      </div>
      <div className='mobile-options'>

      <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
           <a href='#home'>
           <HiUser className='option-icon'/>Home
          
           </a>
        </div>  
        <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
           <a href='#about'>
           <HiUser className='option-icon'/>About
          
           </a>
        </div>  
      <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
           <a href='#projects'>
              <AiFillCalendar className='option-icon' />Projects
           </a>
        </div>
        <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
           <a href='#skills'>
           <AiOutlineLaptop className='option-icon'/>Skills
            
           </a>
        </div>
       
        <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
           <a href='#contact'>
            <AiOutlineWechat className='option-icon'/>Contact
            
           </a>
        </div>
        {/* <div className='mobile-option'>
           <a href='#resume'>
            <FaElementor className='option-icon'/>Resume
            
           </a>
        </div> */}
         <div className='mobile-option'
         onClick={()=>window.open("https://drive.google.com/file/d/1XC-etr2o1EV66wNP1FwqS1ePGBGdknxW/view?usp=share_link","_blank")}
           >
            <a href="./fw21_0691-Abhisek-Kumar-Resume.pdf" download={true}>
         <FaElementor className='option-icon'/>Resume
         </a>
        </div>
      </div>
    
    </div>
  )
}

export default Mobile