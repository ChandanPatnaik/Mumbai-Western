import React from 'react'
import './App.css'
import Sidebar from '../src/components/Sidebar/Sidebar'
import Header from '../src/components/Header/Header'
const App = () => {
  return (
    <div className='Home'>
        <Sidebar />
        <Header />
    </div>
  )
}

export default App