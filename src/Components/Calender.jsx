import React from 'react'
import GitHubCalendar from 'react-github-calendar';
// import "./stats.css"


export const Calender = () => {


  return <div  >
    <h1>My Github Calender</h1>
    <div >
        <GitHubCalendar  
                username="Abhisek753"
                fontSize={20}
                blockSize={18}
                >
        </GitHubCalendar>
    </div>
    
  </div>
  
}