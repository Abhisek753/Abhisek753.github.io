
import React from 'react'
import "./mainpage.css"

import Footer from '../footer'
import Body from '../body'
import { Header } from '../header'

export const Mainpage = () => {
  
  return (
    <div className='mainpage'>
      <div>
      {/* <Navbar/> */}

      </div>
      
      <div>
        <Header/>
      </div>
      <div>
        <Body/>
      </div>
      <div>
        <Footer/>
      </div>
        <h1 style={{color:"secondary"}}>I am abhisek</h1>
       
        {/* <AllRoutes/> */}
    </div>
  )
}
