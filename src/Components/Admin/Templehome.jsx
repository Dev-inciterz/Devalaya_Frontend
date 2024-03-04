import React from 'react'
import Navbar from '../Nav/Navbar'
import Templedatasheet from './Templedatasheet'

const Templehome = () => {
  return (
    <div>
        <Navbar />

        <div className="temple_gridtable">
            <Templedatasheet />
        </div>
    </div>
  )
}

export default Templehome