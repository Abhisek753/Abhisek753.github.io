import React from 'react'
import Home from './home'

import "./body.css"
import Contact from './Contect'
import Projects from './projects'
import Skills from './skills'
import About from './about'
import {Routes,Route} from "react-router-dom"
import Resume from './work'




const Body = () => {
  return (
    <div className='body'>
      <section id='home'>
        <Home/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
      <section id='resume'>
        <Resume/>
      </section>

    </div>
  )
}

export default Body