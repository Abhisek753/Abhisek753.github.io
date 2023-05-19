import React, { useEffect } from 'react'
import "./web.css"
import { AiFillCalendar, AiOutlineLaptop, AiOutlineWechat} from "react-icons/ai";
import { HiUser } from 'react-icons/hi';
import { FaElementor } from "react-icons/fa";
import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react'



const Web = () => {
  const { colorMode, toggleColorMode } = useColorMode()

    useEffect(()=>{
      colorMode=="light"?toggleColorMode("dark"):toggleColorMode("light")
    },[])


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
        
    
        <div className='web-option'
         onClick={()=>window.open("https://drive.google.com/file/d/1XC-etr2o1EV66wNP1FwqS1ePGBGdknxW/view?usp=share_link","_blank")}
           >
            <a href='./fw21_0691-Abhisek-Kumar-Resume.pdf' download={true}>
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