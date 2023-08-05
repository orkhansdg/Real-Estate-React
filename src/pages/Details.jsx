import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Features from '../components/Details/Features'
import DetailsMain from '../components/Details/DetailsMain'
import { useParams } from 'react-router-dom'
import data from '../components/data'
import BackToTopButton from '../components/BackToTopButton'
import Neighborhood from '../components/Neighborhood'

const Details = () => {
  const {id} = useParams();
  
  const details = data.find(item=>item.id.toString() === id);

  return (
    <div>
      <Navbar/>
      <DetailsMain details={details}/>
      <Features/>
      <Neighborhood/>
      <Footer/>
      <BackToTopButton/>
    </div>
  )
}

export default Details