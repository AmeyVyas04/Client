import React from 'react'
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import Nav from '../components/Nav'
import Middle from '../components/Middle'
import Why from '../components/Why'
import Downloadapp from '../components/Downloadapp'
function Home() {
  return (
   <>
    <Nav/>
   <Banner/>
   <Middle/>
   <Why/>
   <Downloadapp/>
   <Freebook/>
   <Footer/>
   </>
  )
}

export default Home
