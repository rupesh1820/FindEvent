import React from 'react'
import Navbar from './FirstPageComponenet/Navbar'
import Descriptionpage from './FirstPageComponenet/Descriptionpage'
import WeOffer from './FirstPageComponenet/WeOffer'
import FeaturedJob from './FirstPageComponenet/FeaturedJob'
import Footer from './FirstPageComponenet/Footer'
const Homepage = () => {
  return (
    <div className='m-0 p-0'>
      <Navbar></Navbar>
      <Descriptionpage/>
      <FeaturedJob></FeaturedJob>
      <WeOffer></WeOffer>
      
      
    </div>
  )
}

export default Homepage
