
import React from 'react'
import "./home.css"

import AllRoutes from '../../Pages/AllRoutes'
import { Theme } from "../../Theme"
import Navbar from '../Navbar'
import Footer from '../footer'
import Body from '../body'
import { Header } from '../header'

export const Home = () => {
  
  return (
    <div className='home'>
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
