import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import list from "../Assistance/List.json"

function Courses() {
  const freecourse = list.filter((data) => data.catagory === 'Paid');
  return (
    <>
    <Nav/>
    <br />
    <div className='min-h-screen mt-20 bg-white-300 '>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {freecourse.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Courses
