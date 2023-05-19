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
            {/* <a href="Abhisek_Kumar_Resume.pdf" download={true}
        ><div  className="button-85 dwn-btn " role="button">Resume</div></a>  */}
        
         {/* resume */}
            
         <div className='button-85 dwn-btn resume-btn'
         onClick={()=>window.open("https://drive.google.com/file/d/1XC-etr2o1EV66wNP1FwqS1ePGBGdknxW/view?usp=share_link","_blank")}
           >
            <a href='./fw21_0691-Abhisek-Kumar-Resume.pdf' download={true}>
         Resume {">"}
         </a>
        </div>
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
