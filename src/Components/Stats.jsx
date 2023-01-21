import React from 'react'
import "./Stats.css"

export const Stats = () => {
  return<div  >
   
        <h1 >My Statistics</h1>
        <div className='stats-div' >
        <div className='left-stat'>
          <a  href="https://github.com/Abhisek753">
            <img
             
              align="left"
              src="https://github-readme-streak-stats.herokuapp.com/?user=Abhisek753"
              alt='stat'
            />
          </a>
          </div>
          <div className='right-stat'>
          <a  href="https://github.com/Abhisek753">  
          <img
          
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abhisek753"
            alt='stat'  //launguages
          />
          </a>
         </div>
        </div>
      <div className='b-stat'>
       
        <a className='jjjj' href="https://github.com/Abhisek753">
          <img
            
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=Abhisek753&count_private=true&show_icons=true" //stats
            alt='stat'            
          />
        </a>
      
      </div>
    </div>
  
  
}