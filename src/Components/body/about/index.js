import React from 'react'
import SocialContact from '../../common/social-contact'
import "./about.css"

const About = () => {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
            Hellow There 👋 I am
            <br/> <span className='info-name'>Abhisek Kumar 👨🏻‍💻</span>
            <br/>I love Experimenting with the web.
        </div>
        <div className='about-photo'>
            <img src={require("../../../portfolio_img/coding.png")}
            className="picture"
            />
        </div>

      </div>    
      <SocialContact/>
    
    </div>
  )
}

export default About