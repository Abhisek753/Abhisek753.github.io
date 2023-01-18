import React from 'react'
import "./web.css"
import { AiFillCalendar, AiOutlineLaptop, AiOutlineWechat} from "react-icons/ai";
import { HiUser } from 'react-icons/hi';
import { FaElementor } from "react-icons/fa";
import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const Web = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  

  return (
    <div className='web'>
          <div className='web-option'>
           <a href='#home'>
           <HiUser className='option-icon'/>Home

            
           </a>
        </div>

         <div className='web-option'>
           <a href='#about'>
           <HiUser className='option-icon'/>About
          
           </a>
        </div>  
        <div className='web-option'>
           <a href='#projects'>
              <AiFillCalendar className='option-icon' />Projects
           </a>
        </div>
        <div className='web-option'>
           <a href='#skills'>
           <AiOutlineLaptop className='option-icon'/>Skills
            
           </a>
        </div>
       
        <div className='web-option'>
           <a href='#contact'>
            <AiOutlineWechat className='option-icon'/>Contact
            
           </a>
        </div>
        <div className='web-option'>
           <a href='#resume'>
            <FaElementor className='option-icon'/>Resume
            
           </a>
        </div>
        <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
    </div>
  )
}

export default Web