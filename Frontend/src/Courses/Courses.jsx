import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Freebook from '../components/Freebook'

function Courses() {
  return (
    <>
    <Nav/>
    <div className='min-h-screen'>
      <Freebook/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses
