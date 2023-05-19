import React from 'react'
import "./resume.css"

const Resume = () => {
  return (
    <div className='resume-parent'>
      <div className='resume-text'>
      <h1>Please Look Into My Resume</h1>
       
      </div>
     {/* <a  href="Abhisek_Kumar_Resume.pdf" download={true}
     ><div  className="button-85 resume-btn">DOWNLOAD</div></a>  */}
      <div className='resume-btn '
         onClick={()=>window.open("https://drive.google.com/file/d/1XC-etr2o1EV66wNP1FwqS1ePGBGdknxW/view?usp=share_link","_blank")}
           >
            <a href='./fw21_0691-Abhisek-Kumar-Resume.pdf' download={true} >
              DOWNLOAD
         </a>
        </div>

    </div>
  )
}

export default Resume