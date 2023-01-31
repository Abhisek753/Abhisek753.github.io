import React from 'react'
import "./resume.css"

const Resume = () => {
  return (
    <div className='resume-parent'>
      <div className='resume-text'>
      <h1>Please Look Into My Resume</h1>
       
      </div>
     <a  href="Abhisek_Kumar_Resume.pdf" download={true}
     ><div  className="button-85 resume-btn">DOWNLOAD</div></a> 

    </div>
  )
}

export default Resume