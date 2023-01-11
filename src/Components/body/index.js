import React from 'react'
import { Skills } from '../Skills'
import About from './about'
import "./body.css"
import Contact from './Contect'
import Projects from './projects'

const Body = () => {
  return (
    <div className='body'>
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

    </div>
  )
}

export default Body