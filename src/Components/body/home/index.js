import React from 'react'
import SocialContact from '../../common/social-contact'
import "./home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className='home-top'>
        <div className='home-info'>
            Hello There 👋 I am
            <br/> <span className='info-name'>Abhisek Kumar 👨🏻‍💻</span>
            <h3>Full Stack Web Developer</h3>
            I love Experimenting with the web.
            <a href="src\portfolio_img\Abhisek_Kumar_Resume.pdf" download
        ><div  className="button-85 dwn-btn " role="button">Resume</div></a> 
        
        </div>
        
        <div className='home-photo'>
            <img src={require("../../../portfolio_img/pic.jpg")}
            className="picture"
            />
        </div>

      </div>    
      <SocialContact/>
    
    </div>
  )
}

export default Home




/* CSS */
