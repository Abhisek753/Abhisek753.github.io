import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import SocialContact from '../../common/social-contact'
import Separator from '../../common/social-contact/separator'
import "./contact.css"
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div className='contact'>
      <Separator/>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch ? Contact me on any of the platform</p>
          <SocialContact/>
        </div>
    
             <div className='download'>
               <div className='contact-mail'>
                  <AiFillMail className='download-icon' />
                   Email:properavhievement@gmail.com
               </div >
             <div className='contact-mail'>
                 <FiPhoneCall className='download-icon'  />
                   Mobile : +918986296084
             </div>
        
        </div>
      </div>
    </div>
  )
}

export default Contact