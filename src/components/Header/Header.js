import React from 'react'
import './Header.css'
import Navbar from'../../content/Navbar/Navbar'
import Data from '../../content/Data/Data'
import Graph from '../../content/Graph/Graph'
import Footer from '../../content/Footer/Footer'
const Header = () => {
  return (
    <div>
      <Navbar />
      <Data />
      <Graph />
      <Footer />
    </div>
  )
}

export default Header